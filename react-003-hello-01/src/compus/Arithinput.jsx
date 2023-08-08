// 부모 Comp 에서 전달받은 값이 적으면 pros 자리에 {nums, setNums}를 바로 넣을수도 있다
const ArithInput = (pros) => {
  const { nums, setNums } = pros;
  // const onChangeNum1Handler = (e) => {};
  // const onChangeNum2Handler = (e) => {};
  const onChangeHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // const { name, value } = e.target;
    setNums({ ...nums, [name]: value });
  };

  return (
    <div>
      <div>
        <label>숫자1</label>
        <input
          name="num1"
          placeholder="num1"
          value={nums.num1}
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>숫자2</label>
        <input
          name="num2"
          placeholder="num2"
          value={nums.num2}
          onChange={onChangeHandler}
        ></input>
      </div>
    </div>
  );
};
export default ArithInput;
