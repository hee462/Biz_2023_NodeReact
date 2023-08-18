import { Inputdiv } from "../styled/BBsStyled";
import { Button } from "../styled/MyButton";

const BBsInput = ({ bbsDto, setBbsDto, bbsInput }) => {
  const inpuOnChange = (e) => {
    const { name, value } = e.target;
    setBbsDto({ ...bbsDto, [name]: value });
  };
  const btnOnClickHandler = () => {
    bbsInput();
  };
  return (
    <>
      <Inputdiv>
        <label htmlFor="">작성자</label>
        <input
          type="text"
          value={bbsDto.bWriter}
          name="bWriter"
          onChange={inpuOnChange}
        />
      </Inputdiv>
      <Inputdiv>
        <label htmlFor="">제목</label>
        <input
          type="text"
          value={bbsDto.bSubject}
          name="bSubject"
          onChange={inpuOnChange}
        />
      </Inputdiv>
      <Inputdiv>
        <label htmlFor="">내용</label>
        <textarea
          rows={10}
          value={bbsDto.bContent}
          name="bContent"
          onChange={inpuOnChange}
        />
      </Inputdiv>
      <Button type="button" onClick={btnOnClickHandler}>
        저장
      </Button>
    </>
  );
};
export default BBsInput;
