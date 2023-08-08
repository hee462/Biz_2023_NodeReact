const sum = (num) => {
  const setNum = (num1) => (num = num1);
  return [num, setNum()];
};

const [num, setnum] = useState(0);
const nations = ["대한민국", "우리나라"];
console.log(nations);
const [n1, n2] = nations;
const nation1 = nations[0];
const nation2 = nations[1];
console.log(n1);
console.log(n2);

const nations2 = [...nations, "korea"];
console.log(nations2);

// nations 배열을 nation3에 복사하라
const nation3 = nations;
console.log("1", nations);
console.log("3", nation3);
nation3[0] = "Republic";
console.log("1", nations);

const nation4 = [...nations];
nation4[0] = "Republic of Korea";
console.log("1", nations);
