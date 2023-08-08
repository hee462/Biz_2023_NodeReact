// false,falsy,

const yes = true;
const no = false;

const strNull = null; //object
const strBlank = ""; //string
const numZero = 0; //number
let valUnderfined; //undefined
const numNaN = NaN; //number
const notNum = 0n; //bigint

//변수 strNull의 데이터 타입이 무엇인가?
console.log(typeof strNull); //object
console.log(typeof strBlank); //string
console.log(typeof numZero); //number
console.log(typeof valUnderfined); // undefined
console.log(typeof numNaN); //number
console.log(typeof notNum); //bigint

// 위에서 선언한 변수들을 if() 명령문에 포함하거나
// !연산자를 동반하면 이 변수들의 성질이 true, false 인가?로 바뀐다
// falsy falsey 형 데이터라고 한다
if (!strNull) console.log("strNull?", typeof strNull); //object
if (!strBlank) console.log("strBlank?", typeof strBlank); //string
if (!numZero) console.log("numZero?", typeof numZero); //number
if (!valUnderfined) console.log("valUnderfined?", typeof valUnderfined); // undefined
if (!numNaN) console.log("numNaN?", typeof numNaN); //number
if (!notNum) console.log("notNum?", typeof notNum); //bigint

const num = 0;
if (num === 0) {
  console.log("Num는 0이다");
} else {
  console.log("Num는 0이 아니다");
}
if (!num) console.log("진짜로 Num는 0이네");

const strName = "";
if (!strName) console.log("이름이 없어요");
if (strName === null || strName === "") console.log("이름이 진짜없네");

console.log(strName || "홍길동");
const 구매자 = strName || "구매자없음";
const 판매자 = "판매자없음";
if (strName !== null && strName !== "") {
  판매자 = strName;
}
