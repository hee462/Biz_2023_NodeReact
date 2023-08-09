import { useState, useRef } from "react";
import { filePreview, filesPreview } from "../modules/imagePreview";
import { bbsInsert } from "../modules/FetchModule";
const BbsInput = () => {
  const [bbs, setBbs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });
  const [image, setimage] = useState("");
  const [images, setimages] = useState([]);
  const imgRef = useRef(null);

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
  const insertButtonClickHandler = async (e) => {
    //alert("Hello");
    // js에서 제공하는 HTTP 객체
    const formData = new FormData();
    formData.append("bbs", bbs);
    //docu.querySelector("#b_img").files[0]
    formData.append("b_img", imgRef.current.files[0]);
    // formData.append("b_nickname", bbs.b_nickname);
    // formData.append("b_title", bbs.b_title);
    // formData.append("b_content", bbs.b_content);
    await bbsInsert(formData);
  };
  return (
    <section className="main">
      <div className="bbs input">
        <input
          name="b_nickname"
          placeholder="작성자"
          value={bbs.b_nickname}
          onChange={inputChangeHandler}
        />
        <input
          name="b_title"
          placeholder="제목"
          value={bbs.b_title}
          onChange={inputChangeHandler}
        />
        <input
          name="b_content"
          placeholder="내용"
          value={bbs.b_content}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="image main">
        <label htmlFor="main_image"> 대표이미지</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          ref={imgRef}
        />
        <div className="thumb_main">
          <img src={image ? image : ""} width="100px" />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_image"> 갤러리 </label>
        <input
          id="gallery_image"
          type="file"
          accept="image/*"
          multiple="multiple"
          onChange={filesChangeHandler}
        />
        <div className="thumb_gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button onClick={insertButtonClickHandler}>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BbsInput;
