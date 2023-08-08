import TodoInput from "./TodoInput";
import "../css/Todo.css";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
// initData.js 에서 Export 한 함수들 중에서
// initData() 함수만 필요하니 구조분해를 통하여 import
import { initData } from "../data/initData";
// uuid()
// react-uuid 의 export type은 무엇일까? -> default
import uuid from "react-uuid";

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

  // initData() 함수를 실행하여 initData(return 한) 함수가 생성한
  // 객체로 todo 초기화
  const [todo, setTodo] = useState(() => initData());
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });
  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("Use Effect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  // 입력한 TodoContent 를 사용하여 새로운 Todo 추가하기
  const todoListAdd = (content) => {
    const id = todoList[todoList.length - 1]?.id + 1 || 0;
    // 여기서 todo는 inidData에서 생성된 todo
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };
  // Todo완료처리 예정
  const itemComplete = (id) => {
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        // todo.complete 속성을 반전(NOT) 시키기
        // true 이면 false, false면 ture
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };
  const itemDelete = (id) => {
    // id에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제할까요?")) {
      // list를 forEach 하면서 item 의  id 와 일치하는 데이터가 있으면 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 id와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };
  // Content를 클릭했을때 선택된 item을 찾아주는 함수
  const updateItemSelect = (id) => {
    // 전달받은 id 값은 PK적인 성질을 가지므로
    // id에 해당하는 List만 추출하면 그 결과는 item이 1개인 List가 생성된다
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });

    // 업데이트를 위한 Todo 데이터 생성
    setTodo({ ...selectTodoList[0] });
  };
  // update and insert 를 실행하는 함수
  // 내용을 변경하고 저장을 클릭했을때 내용을 변경하는 함수
  const todoInput = (content) => {
    // id 값이 null 또는 "" 이면 리스트에 추가하기
    if (!todo.id) {
      todoListAdd(content);
      // id 값이 null 또는 ""이 아니면 update 실행
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: content };
        }
        return item;
      });
      // setState 함수
      setTodoList(updateTodoList);
    }
  };
  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
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
