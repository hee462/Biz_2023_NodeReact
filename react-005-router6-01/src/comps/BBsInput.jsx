import { Form, Inputdiv } from "../styled/BBsStyled";

const BBsInput = () => {
  return (
    <Form>
      <Inputdiv>
        <label htmlFor="">작성자</label>
        <input type="text" />
      </Inputdiv>
      <Inputdiv>
        <label htmlFor="">제목</label>
        <input type="text" />
      </Inputdiv>
      <Inputdiv>
        <label htmlFor="">내용</label>
        <textarea rows={10} />
      </Inputdiv>
    </Form>
  );
};
export default BBsInput;
