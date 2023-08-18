import { useBbsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";

const onClickDetail = () => {};
const BbsList = () => {
  const { bbsList, setBbsList } = useBbsContext("");
  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_seq}</td>

        <td id="line">
          {bbs.b_date} <br />
          <img src={`/static/upload/${bbs.b_image}`} width="80px" />
        </td>
        <td>{bbs.b_title}</td>
        <td>{bbs.b_content}</td>
        <td>{bbs.b_ccode}</td>

        <td>
          {bbs.b_nickname}
          <a
            href="https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EC%98%81%ED%99%94+%EA%B0%9C%EB%B4%89&oquery=%EC%98%81%ED%99%94%EC%98%88%EB%A7%A4&tqi=iLfr%2Bsp0JywssPoeKDCssssst1w-134732&acq=%EC%98%81%ED%99%94&acr=3&qdt=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            예매하기
          </a>
        </td>
      </tr>
    );
  });
  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>순위</th>
            <th>개봉일</th>
            <th>제목</th>
            <th>내용</th>
            <th>평점</th>
            <th>예매/추가정보</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};
export default BbsList;
