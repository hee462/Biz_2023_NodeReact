import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import { Button } from "./styled/BBsStyled";
/**
 * react-router-dom의 useNavigate() hooks 함수
 * 보통 react-router-dom 에서 다른 페이지를 열고자 할때 NavLink를 사용하여
 * a tag를 생성하고 페이지 전환을 한다
 * 하지만 button등 tag 를 사용할때는 onClick event를 캡춰하여 페이지를 전환해야 하는데
 * 이때는 NavLink를 사용하기가 다소 불편해진다
 * 이럴때 useNavigate() hooks 함수를 통하여 객체를 생성하고
 * 생생한 객체에 URL(requestPath)를 설정하면
 * JS document.location.href = URL 과 같은 코드를 사용하는 것과 같다
 *
 * v5에서는 useHistory,Link,useRedirect등 여러가지 함수와 객체들이 있었는데
 * v6에서는 대부분이 useNavigate() hooks를 통하여 생성된 객체로 통합되었다
 *
 * 특히 useRedirect의 경우 별도로 Navigate component를 통하여 실행할수도 있다
 */

/*
App Component
react-router-dom v6에서 useRoutes()Hook 함수를 생성하고
router를 return하는 구조로 변경한다 
*/
function App() {
  // useNavigate hooks 함수를 사용하여  navigate 객체 생성
  const navigate = useNavigate();
  // App Component 내에 inner Component를 생성하기
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  }; // end AppBody
  //App.js Component를 화면에 표현하면, react-router-dom에 의해서 path를 감지하고
  //AppBody Component를 화면에 렌더링 한다
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="#eee"
              color="#aaa"
              onClick={() => navigate("/bbs")}
            >
              게시판열기
            </Button>
          ),
        },
        { path: "bbs/*", element: <BBsMain /> },
      ],
    },
  ]);
  return appRouter;
}

export default App;
