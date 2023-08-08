// JSON 객체(JavaScript Object Nation)
//{key:value} 쌍으로 구성된 데이터 type
const obj = {
  이름: "홍길동",
  나이: 16,
  전화: "010-8080-9887",
};
console.log(obj);
console.log(obj.이름);
console.log(obj.나이);
console.log(obj.전화);

console.log(obj["이름"]);
console.log(obj["나이"]);
console.log(obj["전화"]);

const searchkey = "이름";
console.log(obj[searchkey]);

const address = [
  { 이름: "홍길동", 나이: 16, 전화: "1111" },
  { 이름: "성춘향", 나이: 18, 전화: "1212" },
  { 이름: "변학도", 나이: 21, 전화: "1313" },
];
// 배열의 요소중에 각각의 항목을 알고싶을때
console.log(address[1].이름);
console.log(address[1].나이);
console.log(address[1].전화);
// 이름만 출력 / 특정조건만 출력 가능
address.forEach((item) => {
  console.log("이름 : ", item.이름);
});
