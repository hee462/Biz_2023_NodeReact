import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { useState } from "react";
import { SampleData } from "../data/SampleTodo";
// JS 에서 날짜와 관련된 여러가지 문제를 해결한 plug in
// Date 라고 하는 날짜와 관련된 객체가 있지만 실무에서는 거의 moment를 사용한다
import moment from "moment";

const TodoMain = () => {
  /**
   * State 끌어올리기
   * TodoInput 과 TodoList에 있던 state 들을 TodoMain 부모 컴포넌트로 이동
   * 1. TodoInput에서 입력된 content state의 값을
   * 2. TodoList의 todoList state 배열에 추가하여
   * 3. TodoList > TodoItem 을 통하여 화면에 출력을 해야한다
   *
   * 이 상황에서 TodoInput 과 TodoList는 같은 부모의 형제간이다
   *    React에서는 형제간의 State를 절대 공유할 수 없다
   *    React 부모가 만들어서 전달해준 State만 볼수 있다.
   *    자식이 만든 State는 부모도 볼 수 없다
   *
   * 이 상황을 해결하기 위하여 자식 Comps 있던 State와 State함수를
   * 부모 Comps 인 Todomain으로 끌어올리기를 한다
   * 그리고, 자식 Comps에 전달해주어야 한다
   */
  const [todo, setTodo] = useState(null);
  const [content, setContent] = useState("");
  const [todoList, setTodoList] = useState([]);

  const todoListAdd = (todo) => {
    const id = todoList[todoList.length - 1]?.id + 1 || 0;
    const addTodo = {
      id: id,
      sdate: moment().format("YYYY[-]MM[-]DD"),
      stime: moment().format("HH:mm:ss"),
      content: todo,
      complete: false,
    };
    setTodoList([...todoList, addTodo]);
  };
  const itemComplete = (id) => {
    const compTodoList = todoList.map((todo) => {
      //완료처리 예정
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodoList([...compTodoList]);
  };
  const itemDelete = (id) => {
    // id에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제할까요?")) {
      // list를 forEach 하면서 item 의  id 와 일치하는 데이터가 있으면 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 id와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((todo) => {
        return todo.id !== id;
      });
      setContent([...deleteTodoList.concat]);
    }
  };
  // Content를 클릭했을때 선택된 item을 찾아주는 함수
  const updateItemSelect = (id) => {
    const selectTodoList = todoList.filter((todo) => {
      return todo.id === id;
    });
    setContent(selectTodoList[0].content);
    // 업데이트를 위한 id 가져오기
    setTodo({ ...selectTodoList[0] });
  };
  // 내용을 변경하고 저장을 클릭했을대 내용을 변경하는 함수
  const updateitemOK = (text) => {
    if (todo) {
      const updateTodo = { ...todo, content: text };
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return updateTodo;
        }
        return item;
      });
      setTodoList(updateTodoList);
      setTodo(null);
    } else {
      todoListAdd(text);
    }
  };
  return (
    <div className="todo">
      <TodoInput
        content={content}
        setContent={setContent}
        todoListAdd={updateitemOK}
      />
      <TodoList
        todoList={todoList}
        itemDelete={itemDelete}
        itemComplete={itemComplete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
