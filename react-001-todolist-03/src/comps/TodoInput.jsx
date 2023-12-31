// 여기는 Todo Content를 입력하고 추가 실행하는 Componet
/**
 *
 * @param {*} props
 * 부모 Comps로 부터 전달받은 모든 것을 담아 오는 바구니
 * props 를 통하여 전달받은 모든 것은 Read only 이다
 * props 를 통하여 전달받은 state도 여기에서 절대 변경 할 수 없다
 * props 통하여 전달받은 state를 변경하려면
 *      state를 변경할 함수도 같이 전달받아야 한다
 * @returns
 */
const TodoInput = (props) => {
  // 화면에 데이터를 Rendering 할때 사용할 State(변수) 선언
  // const [content, setContent] = useState("");

  const { todo, setTodo, todoInput } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setTodo({ ...todo, content: value });
  };
  const btnClickHandler = (e) => {
    //추가 버튼을 클릭했을때 할일
    todoInput(todo.content);
  };

  return (
    <div className="input">
      <input
        placeholder="TODO"
        value={todo.content}
        onChange={inputChangeHandler}
      />
      {/*
      JSX 주석
      본문의 tag 내에서 사용하는 주석문
      button disabled 속성
      html 에서는 disabled="disabled" 라고 속성을 지정하면
      button tag에  click 속성이 사라지는 효과를 낼 수 있다
      button:disabled style을 지정해주면 button disabled 가 설정되었을때 모양을 만들수 있다

      react 에서는 disabled={true}라는 속성으로 사용한다
      */}
      <button
        onClick={btnClickHandler}
        disabled={todo.content.length < 2}
        className={todo.id ? "update" : ""}
      >
        {todo.id ? " 변경" : "추가"}
      </button>
    </div>
  );
};
export default TodoInput;
