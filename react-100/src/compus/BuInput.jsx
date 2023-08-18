import css from "../css/input.css";
import BuList from "./BuList";
const BuInput = ({ bDto, setbDto }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setbDto({ ...bDto, [name]: value });
  };
  const onReset = () => {
    setbDto({
      bDtate: "",
      bTime: "",
      bSubject: "",
      bContent: "",
    });
  };

  return (
    <section>
      <div className="input_div">
        <input
          placeholder="날짜"
          value={bDto.bDtate}
          name="bDate"
          onChange={inputOnChange}
        />
        <input
          placeholder="시간"
          value={bDto.bTime}
          name="bTime"
          onChange={inputOnChange}
        />
        <br />
        <button onClick={onReset}>새로고침</button>
        <br />
        <input
          placeholder="제목"
          className="input_subject"
          value={bDto.bSubject}
          name="bSubject"
          onChange={inputOnChange}
        />
        <br />
        <input
          placeholder="내용"
          className="input_content"
          value={bDto.bContent}
          name="bContent"
          onChange={inputOnChange}
        />
      </div>
      <div>
        <BuList />
      </div>
      {/* <footer>만든사람 : 변희선</footer> */}
    </section>
  );
};
export default BuInput;
