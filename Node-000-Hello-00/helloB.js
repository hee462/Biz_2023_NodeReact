/*
JS 의 배열은 데이터형이 여러가지 섞여있어도 가능하다
java 에서의 배열은 반드시 같은 데이터형만 가능하다
*/

const arrayValue = [10, 20, 30, "우리나라", "대한민국"];
console.log(arrayValue);

// 배열복사 방법
/*
얕은 복사, 배열의 주소만복사되어 원본과 복사본 배열이 동일한 배열
만약 복사본 배열의 요소중 값이 변경되면 원본도 같이 변경된다
*/
const arrayValu1 = arrayValue;
/**
 * 첫번째 선호하며, 사용비중 높음
 * 전개연산자(...Spread operation)를 이용한 깉은 복사
 * 배열의 요소값 한개한개를 일일이 모두 복사하는 방법
 * 원본과 복사본이 완전히 동일한 값을 갖지만
 * 복사본과 원본은 서로 다른 기억장치에 저장된다
 * 복사본 배열의 요소값을 변경하여도 원본에는 영향을 미치지 않는다
 *
 */
const arrayValu2 = [...arrayValu];
/**
 * ES5 이전에 JS에서 사용하는 for 반복문을 이용한 깊은 복사
 *
 */
const arrayValu3 = [];
for (let array of arrayValu) {
  arrayValu3.push(array);
}
const arrayValu4 = [];
for (let index = 0; index < arrayValu.length; index++) {
  arrayValue4[index] = arrayValu[index];
}
const arrayValu5 = [];
arrayValu.array.forEach((item) => {
  arrayValu5.push(item);
});
