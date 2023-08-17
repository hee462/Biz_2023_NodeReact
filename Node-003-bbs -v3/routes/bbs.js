// import express from "express";
// const router = express.Router();
import { Router } from "express";
const router = Router();
import multer from "multer";
import path from "path";
import fs from "fs";
import DB from "../models/index.js";
// const tbl_bbs = DB.models.tbl_bbs;
// const tbl_files = DB.models.tbl_files;
// 구조분해하여 객체로부터 변수를 독립하고, 다른이름으로 사용하기
// 다른이름 변수를 :이름형식으로 추가
const { tbl_bbs: BBS, tbl_files: FILES } = DB.models;
/**
 * bbs API Router 설정
 * 보통 API 서버는 view 가 없이 JSON(또는 XML)데이터를 client로
 * return 하는 서버를 말한다(Spring Rest Server)
 *
 * res.send()또는 res.json()함수로 마감한다
 *
 *
 */
const Hello = {
  title: "나는 NodeJS  ",
  message: "Hello NodeJS BBS world",
};
/**
 * window에서 한글깨짐을 바꿔줌
 *
 */
const encKor = (str) => {
  console.log(str);
  return Buffer.from(str, "latin1").toString("utf-8");
};
// 파일을 전송하기 위한 설정값 만들기
const storageOption = {
  filename: (req, file, cb) => {
    file.originalname = encKor(file.originalname);
    const originalName = file.originalname;
    const filePrix = `${Date.now()} - ${Math.round(Math.random() * 100000)}`;
    const fileName = `${filePrix} - ${originalName}`;
    cb(null, fileName);
  },
  destination: (req, file, cb) => {
    // 파일을 저장할 폴더가 없으면 새로 생성해라
    // 업로드 폴더는 app.js 에서 선언한 uploadPath 값을 참조한다
    if (!fs.existsSync(req.uploadPath)) {
      fs.mkdirSync(req.uploadPath);
    }
    cb(null, req.uploadPath);
  },
};
const storage = multer.diskStorage(storageOption);
const uploadMiddleWare = multer({ storage });
router.get("/", async (req, res, next) => {
  res.json(Hello);
});
router.post("/insert", uploadMiddleWare.array("b_images"), async (req, res) => {
  const body = req.body;
  // multer MiddleWare 가 파일 관련 데이터를 필터링하고, 처리한 후
  // 관련정보를 req.file 객체에 담아준다
  const files = req.files;
  const bbsDto = JSON.parse(body.bbs);

  // console.log("body", body, files);
  // files 이미지들 중에서 대표이미지 첫번째

  bbsDto.b_image = files[0]?.filename;
  bbsDto.b_origin_image = files[0]?.originalname;

  const result = await BBS.create(bbsDto);

  // 이미지 정보 생성: 대표이미지를 제외한 나머지 저장하기
  if (files) {
    for (let i = 1; i < files.length; i++) {
      const fileDto = {};
      fileDto.f_image = files[i].filename;
      fileDto.f_origin_image = files[i].originalname;
      fileDto.f_bseq = result.b_seq;
      await FILES.create(fileDto);
    }
  }
  res.send("OK");
});
router.get("/list", async (req, res) => {
  // include
  // sequelize에서 1:N 관계가 설정 되어 있을때 자동으로 JOIN 하는 코드
  const bbsList = await BBS.findAll({
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});
// localhost:3000/bbs/detail/3 으로 요청되면 3이란값이 seq 변수에 담기게 된다
// ?seq =값 =>queryString 방식
//            res.query.seq 로 값 받기
// /:seq    => PathVarriable 방식
//            req.params.seq
// form으로 전송한 데이터는 req.boby에 담겨서 통째로
router.get("/detail/:seq", async (req, res) => {
  const seq = req.params.seq;
  const bbsList = await BBS.findOne({
    where: { b_seq: seq },
    include: { model: FILES, as: "F_FILES" },
  });
  return res.json(bbsList);
});
export default router;
