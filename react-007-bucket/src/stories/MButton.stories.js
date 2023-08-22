import styled from "styled-components";
import MButton from "../shareCompus/MButton";
const Container = styled.div`
  width: 200px;
`;

// storybook dash 보드에 표현할 이름
export default {
  title: "내가 만든 버튼",
  component: [MButton],
};
export const 버튼샘플 = () => (
  <Container>
    <MButton>클릭하세요</MButton>
  </Container>
);