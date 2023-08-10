import {
  createBrowserRouter,
  matchRoutes,
  RouterProvider,
} from "react-router-dom";
import BBsMain from "../compus/BbsMain";
import App from "../App";
import MyPage from "../compus/Mypage";
// Nav Provider 컴포넌트
// Nav 의 모든설정(IA)를 한곳에서 설정하는 컴포넌트
const MainRouter = () => {
  // nav 에서 Menu 를 클릭했을때 보여질 화면들 설정하기
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <h1>나는 홈이양</h1> },
        { path: "/notice", element: <h1> 나는 공지사항</h1> },
        { path: "/bbs", element: <BBsMain /> },
        { path: "/mypage", element: <MyPage /> },
        {
          path: "/login",
          element: <h1>나는 오류얌</h1>,
          errorElement: <h1>오류</h1>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default MainRouter;
