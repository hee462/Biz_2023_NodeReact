import styled from "styled-components";
/**
 * ${({color})=>color?} 에서
 * {color} :부모로 부터 받은 props.color 를 전개한 변수
 * ${({bgcolor})=>bgcolor?} 에서
 * {bgcolor} :부모로 부터 받은 props.bgcolor 를 전개한 변수
 *
 */

export const Button = styled.button`
  border: 0;
  outline: none;
  padding: 12px 16px;
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "blue")};
  border-radius: 5px;
  margin: 5px 0;
  &:hover {
    box-shadow: 1px 1px 1px 1px black;
    cursor: pointer;
  }
`;
