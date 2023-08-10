import { useParams } from "react-router-dom";

const BbsDetail = () => {
  const { seq } = useParams();
  return (
    <>
      <h1>여기는 자세히 보기 화면입니다</h1>
      <p>선택한 게시판 :{seq}</p>
    </>
  );
};
export default BbsDetail;
