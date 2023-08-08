//express 의 Router : Client의 Request 를 수신하여 처리하는 문지기
// import express from "express";
import { Router } from "express";
const router = Router();
import DB from "../models/index.js";
const BBS = DB.models.tbl_bbs;

router.get("/", async (req, res) => {
  BBS.findAll().then((result) => {
    res.render("bbs/list", { BBS: result });
  });
});

// GET localhost:3000/bbs/insert
router.get("/insert", (req, res) => {
  res.render("bbs/input");
});

export default router;
