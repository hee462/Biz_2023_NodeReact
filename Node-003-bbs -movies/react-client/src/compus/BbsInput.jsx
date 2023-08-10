import { useState } from "react";
import { filePreview, filesPreview } from "../modules/imagePreview";
import css from "../css/BBsinput.module.css";
import { useBbsContext } from "../provider/BBsProvider";
const BbsInput = () => {
  const { bbs, setBbs, bbsInsertCB, imgRef } = useBbsContext("");
  // const { bbsList, setBbsList } = useBbsContext("");

  const [image, setimage] = useState("");
  const [images, setimages] = useState([]);
  // const imgRef = useRef(null);
  // const imgsRef = useRef(null);

  const setMainImage = (image) => {
    setimage(image);
  };

  const thumbImages = images.map((image) => {
    return (
      <img src={image} width="50px" onClick={(e) => setMainImage(image)} />
    );
  });
  const fileChangeHandler = async (e) => {
    const imgSrc = await filePreview(e.target.files[0]);
    setimage(imgSrc);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };

  const insertButtonClickHandler = async () => {
    bbsInsertCB();
  };

  return (
    <section className={css.main}>
      <div className={css.input_container}>
        <div>
          <lable></lable>
          <input
            name="b_date"
            placeholder="개봉일"
            value={bbs.b_date}
            onChange={inputChangeHandler}
          />
        </div>
        {/* <div>
          <lable></lable>
          <input
            name="b_nickname"
            placeholder="감독/연출"
            value={bbs.b_nickname}
            onChange={inputChangeHandler}
          />
        </div> */}
        <div>
          <lable></lable>
          <input
            name="b_title"
            placeholder="제목"
            value={bbs.b_title}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <lable></lable>
          <input
            name="b_content"
            placeholder="내용"
            value={bbs.b_content}
            onChange={inputChangeHandler}
          />
        </div>
        <div>
          <lable></lable>
          <input
            name="b_ccode"
            placeholder="평점"
            value={bbs.b_ccode}
            onChange={inputChangeHandler}
          />
        </div>
      </div>

      <div className={css.image_box}>
        <div>
          <label htmlFor="main_image"> main_image</label>
          <input
            id="main_image"
            type="file"
            accept="image/*"
            onChange={fileChangeHandler}
            ref={imgRef}
          />
        </div>
        <div className={css.thumb}>
          <img src={image ? image : ""} width="180px" />
        </div>
        <div>
          {/* <label htmlFor="actor_image"> 감독/출연 </label> */}
          {/* <input
            id="actor_image"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={filesChangeHandler}
            ref={imgsRef}
          /> */}
          <div className={css.thumb}>{thumbImages}</div>
        </div>
        <div className={css.button}>
          <button onClick={insertButtonClickHandler}>저장</button>
          <button>수정</button>
        </div>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BbsInput;
