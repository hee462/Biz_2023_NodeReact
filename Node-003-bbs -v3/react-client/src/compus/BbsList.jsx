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
        <td>{bbs.b_seq}</td>
        <td>
          <img src={`/static/upload/${bbs.b_image}`} width="50px" />
        </td>
        <td>{bbs.b_title}</td>
        <td>0</td>
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
            <th>SEQ</th>

            <th>작성자</th>
            <th>제목</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>{bbsItems}</tbody>
      </table>
    </>
  );
};
export default BbsList;
