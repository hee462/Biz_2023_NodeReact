import { useState } from "react";
import { filePreview, filesPreview } from "../modules/imagePreview";

import css from "../css/BBsinput.module.css";
import { useBbsContext } from "../provider/BBsProvider";
const BbsInput = () => {
  /**
   * BBsProvder Store에 보관되었는 bbs와 setBbs( ) 함수를 가져와서 사용해야 하는데
   * 그 함수를 가져오기 위하여 useContext()라는 Hook 함수
   * useContext() 함수는 어떤 스토어에서 값들을 가져오는지 명시 해주어야 한다
   * 그런데 BBsInpu 에서는 스토어의 이름, 키 등을 앞길이 없다
   * 물론 알아 낼수는 있지만 너무 많은 코드가 필요하다
   * 그래서 BBsProvder에서는 자신의 스토어 정보를 포함한 사용자 정의 useContext()를 만들어야한다
   *
   *
   */
  const { bbs, setBbs, bbsInsertCB, imgRef, imgsRef } = useBbsContext("");
  const { bbsList, setBbsList } = useBbsContext("");

  const [image, setimage] = useState("");
  const [images, setimages] = useState([]);
  // const imgRef = useRef(null);
  // const imgsRef = useRef(null);

  const setMainImage = (image) => {
    setimage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img
        src={image}
        width="50px"
        alt=""
        onClick={(e) => setMainImage(image)}
      />
    );
  });
  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    // console.log(imgSrc);
    setimage(imgSrc);
  };

  const filesChangeHandler = async (e) => {
    const files = e.target.files;
    const imgSrcList = await Promise.all(filesPreview(files));
    // console.log(imgSrcList);
    setimages(imgSrcList);
  };
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };
  /*
fetch 를 통해서 서버로 데이터, 이미지를 전송하기
1. formData 만들기
2. formData 에 각 데이터 append
3. fetch 보내기
  */
  const insertButtonClickHandler = async () => {
    bbsInsertCB();
    //alert("Hello");
    // js에서 제공하는 HTTP 객체
    // const formData = new FormData();
    // const file = imgRef?.current.files[0];
    // const files = imgsRef.current.files;
    // // formData에 bbs(JSON 객체)를 실어서 서버로 보낼때는
    // // 객체를 직접 보낼 수 없다
    // // 객체를 Serialize (직렬화,문자열화)
    // const bbsStr = JSON.stringify(bbs);
    // // node의 router Upload 미들웨어에서 받을 이름
    // // 대표 이미지
    // formData.append("b_images", file);
    // // 갤러리 이미지들
    // for (let file of files) {
    //   formData.append("b_images", file);
    // }
    // formData.append("bbs", bbsStr);
    // //docu.querySelector("#b_img").files[0]와 같은 기능 코드
    // // formData.append("b_nickname", bbs.b_nickname);
    // // formData.append("b_title", bbs.b_title);
    // // formData.append("b_content", bbs.b_content);
    // await bbsInsert(formData);
  };
  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <lable></lable>
          <input
            name="b_nickname"
            placeholder="작성자"
            value={bbs.b_nickname}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <lable></lable>
          <input
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangeHandler}
          />
        </div>
        <input
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>

      <div className={css.image_box}>
        <div>
          <label htmlFor="main_image"> 대표이미지를 선택하세요</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
          />
        </div>
        <div className={css.thumb}>
          <img src={image ? image : ""} width="100px" />
        </div>
        <div>
          <label htmlFor="gallery_image"> 갤러리를 선택 </label>
          <input
            id="gallery_image"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangeHandler}
            ref={imgsRef}
          />
          <div className={css.thumb}>{thumbImages}</div>
        </div>
        <div className={css.button}>
          <button onClick={insertButtonClickHandler}>저장</button>
        </div>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BbsInput;
