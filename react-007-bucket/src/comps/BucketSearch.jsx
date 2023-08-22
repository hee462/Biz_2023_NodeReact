import Input from "../shareCompus/SearchInput";
import Button from "../shareCompus/Button";
import { Form } from "react-router-dom";
import styled from "styled-components";

const StyledInputDiv = styled.div`
  width: 80%;
  margin: 5px auto;
  margin: 0;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  & input {
    flex: 3;
  }
  & button {
    flex: 1;
    margin: 5px;
  }
`;
const BucketSearch = () => {
  return (
    <StyledInputDiv>
      <Input />
      <Form method="POST">
        <Button>새로작성</Button>
      </Form>
    </StyledInputDiv>
  );
};
export default BucketSearch;
