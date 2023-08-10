import { useState, useRef } from "react";
import { BBsDto } from "../data/BBsDto";
import "../css/Input.css";
const BBsInput = () => {
  const [bbs, setBbs] = useState(BBsDto);
  const [image, setImage] = useState();
  const [images, setImages] = useState([]);
  const imageRef = useRef(null);
  const imagesRef = useRef(null);

  const thumbImages = images.map((image) => {
    return <img src={image} width="50px" />;
  });
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBbs({ ...bbs, [name]: value });
  };

  // type이 file인 input 에서 파일이 선택되었을때 발생하는 event
  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (fe) => {
      setImage(fe.target.result);
    };
    fileReader.readAsDataURL(file);
  };

  const filesChangeHandler = (e) => {
    const files = e.target.files;
    Array.from(files).forEach((file) => {
      const fileReader = new FileReader();
      fileReader.onload = (fe) => {
        setImages((images) => [...images, fe.target.result]);
      };
      fileReader.readAsDataURL(file);
    });
  };

  return (
    <section className="main">
      <div className="bbs input">
        <input
          name="b_nickname"
          placeholder="감독"
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
        <input
          name="b_star"
          placeholder="평점"
          value={bbs.b_star}
          onChange={inputChangeHandler}
        />
      </div>
      <div className="image main">
        <label htmlFor="main_image"> 포스터</label>
        <input
          id="main_image"
          type="file"
          accept="image/*"
          onChange={fileChangeHandler}
          /* React에서 각요소의 key 역할을 수행 */
          ref={imageRef}
        />
        <div className="thumb_main">
          <img src={image ? image : ""} width="300px" />
        </div>
      </div>
      <div className="image gallery">
        <label htmlFor="gallery_image"> 등장인물</label>
        <input
          id="gallery_image"
          type="file"
          accept="image/*"
          multiple="multiple"
          ref={imagesRef}
          onChange={filesChangeHandler}
        />
        <div className="thumb_gallery">{thumbImages}</div>
      </div>
      <div className="button">
        <button>저장</button>
      </div>
      <div className="view"></div>
    </section>
  );
};
export default BBsInput;
