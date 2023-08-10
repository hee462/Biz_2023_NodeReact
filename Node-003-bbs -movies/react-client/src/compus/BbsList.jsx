import { useBbsContext } from "../provider/BBsProvider";
import css from "../css/BBsList.module.css";

const sampleData = [
  { b_seq: 0, b_nickname: "홍길동", b_title: "활빈당" },
  { b_seq: 1, b_nickname: "이몽룡", b_title: "장원급제" },
  { b_seq: 2, b_nickname: "성춘향", b_title: "남원" },
  { b_seq: 3, b_nickname: "변학도", b_title: "사또" },
  { b_seq: 4, b_nickname: "향단이", b_title: "몸종" },
];
const BbsList = () => {
  const { bbsList, setBbsList } = useBbsContext("");
  const bbsItems = bbsList.map((bbs) => {
    return (
      <tr key={bbs.b_seq} data-seq={bbs.b_seq}>
        <td>{bbs.b_date}</td>
        <td>
          <img src={`/static/upload/${bbs.b_image}`} width="80px" />
          {/* {bbs.b_seq} */}
        </td>
        <td>
          {bbs.b_nickname}{" "}
          <a
            href="https://search.naver.com/search.naver?sm=tab_sug.top&where=nexearch&query=%EC%98%81%ED%99%94+%EA%B0%9C%EB%B4%89&oquery=%EC%98%81%ED%99%94%EC%98%88%EB%A7%A4&tqi=iLfr%2Bsp0JywssPoeKDCssssst1w-134732&acq=%EC%98%81%ED%99%94&acr=3&qdt=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            예매하기
          </a>
        </td>
        <td>{bbs.b_title}</td>
        <td>{bbs.b_content}</td>
        <td>{bbs.b_ccode}</td>
      </tr>
    );
  });
  /**
   * JS의 join() 함수 :배열의 요소를 하나의 문자열로 변환하는 함수
   *  const arr =[1,2,3,4,5,6,7,8,9]
   *  const str =arr.join("")
   * str => "1 2 3 4 5 6 7 8 9 " 과 같은 문자열을 만들어 낸다
   */

  return (
    <>
      <table className={css.main}>
        <thead>
          <tr>
            <th>개봉일</th>
            <th>순위</th>
            <th>예매/추가정보</th>
            <th>제목</th>
            <th>내용</th>
            <th>평점</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};
export default BbsList;
