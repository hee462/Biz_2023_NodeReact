// 1개의 Todo Data를 생성하기 위한 함수
// java Dto 클래스 선언

// JS 에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// Date 라고 하는 날짜와 관련된 객체가 있지만 실무에서는 거의 moment를 사용한다
import moment from "moment";

// ininData 함수를 호출하면 새로운 TodoData 생성하여 return
const initData = () => {
  return {
    id: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:ss:mm"),
    content: "",
    complete: false,
  };
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};
const func4 = () => {};
export { initData };
