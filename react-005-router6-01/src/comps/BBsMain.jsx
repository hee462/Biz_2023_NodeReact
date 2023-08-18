import { useState, useEffect } from "react";
import { useRoutes, Outlet, NavLink, Navigate } from "react-router-dom";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);

  const BBsBody = () => {
    return (
      <>
        <h1>여기는 게시판 입니다</h1>
        <Outlet />
      </>
    );
  };
  const bbsRouter = useRoutes([
    {
      // rootPath :/bbs 로 요청
      path: "/",
      element: <BBsBody />,
      children: [
        // path에 ""이 연결된 경우
        //rootPath와 함께 제일먼저 보여질 Component

        {
          path: "",
          element: (
            <>
              <BBsList bbsList={bbsList} />
              <NavLink to="/bbs/writer">글쓰기</NavLink>
            </>
          ),
        },

        { path: "writer", element: <BBsInput /> },
        // Navigate Component
        // 무조건 redirect 하기 위한 컴포넌트
        // to에 지정한 URL path로 무조건 화면 전환한다
        { path: "home", element: <Navigate to="/" /> },
      ],
    },
  ]);
  return bbsRouter;
};
export default BBsMain;
