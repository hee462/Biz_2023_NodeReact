import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import { Button } from "./styled/BBsStyled";

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
