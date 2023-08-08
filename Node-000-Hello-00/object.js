const address = {
  이름: "홍길동",
  전화번호: "010-111-1111",
  나이: 18,
};
console.log(address);
address.나이 = 20;
console.log(address);

//address 객체를 새로운 객체로 복사하면서 이름항목만 데이터를 바꾸고 싶다 -> update
const newAddress = { ...address, 이름: 몽룡 };
console.log(newAddress);

// insert
const newAddress1 = { ...address, 주소: "광주" };
console.log(newAddress1);
