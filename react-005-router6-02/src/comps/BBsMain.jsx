import { useState, useEffect } from "react";
import {
  useRoutes,
  Outlet,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";
import BBsItem from "./BBsItem";
import moment from "moment";
import uuid from "react-uuid";
import loacalforage from "localforage";
import localforage from "localforage";
const BBsBody = () => {
  return (
    <>
      <h1>여기는 게시판 입니다</h1>
      <Outlet />
    </>
  );
};
const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState([]);
  const navigate = useNavigate();
  // bbsList가 변경되는 event 가 발생하면 ()=>{}함수를 실행하라
  // useEffect(() => {}, [bbsList]);
  // 화면이 최초 랜더링된 후(Mount 된 후)에 한번만 실행하라
  // useEffect(()=>{},[])
  useEffect(() => {
    const getForage = async () => {
      setBbsList(await loacalforage.getItem("BBS"));
    };
    getForage();
  }, []);
  useEffect(() => {
    const setForage = async () => {
      await localforage.setItem("BBS", bbsList);
    };
    setForage();
  }, [bbsList]);
  const bbsUpdate = () => {
    const newBbsList = bbsList.map((bbs) => {
      if (bbs.id === bbsDto.id) {
        const updateBbs = {
          ...bbs,
          bContent: bbsDto.bContent,
          bSubject: bbsDto.bSubject,
        };
        return updateBbs;
      }
      return bbs;
    });
    setBbsList([...setBbsList]);
  };
  const bbsInput = () => {
    // 저장 button을 클릭하면 데이터를 어딘가에 저장하기
    let newBbsDto = { ...bbsData };
    if (!bbsDto.id) {
      newBbsDto = {
        ...bbsDto,
        id: uuid(),
        bDate: moment().format("YYYY[-]MM[-]DD"),
      };
    } else {
      return bbsUpdate();
    }
    setBbsList([...bbsList, newBbsDto]);
    navigate("/bbs");
  };
  /*
  가.BBsList.jsx에서 bbsList 데이터를 props로 받아
     만들던 BBsItem 컴포넌트를 BBsMain.jsx 에서 만들고 있다  
  */
  const bbsListItemView = bbsList?.map((item, index) => {
    return <BBsItem item={item} key={item.id} seq={index} />;
  });

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
              {/* 
              나.BBsMain 영역에서 생성된 bbsListItemView를 BBsList 컴포넌트 사이에 주입
                별도에 변수로 설정하지 않았다 
                @변수 ={변수} 이렇게 설정 안하고 그냥 컴포넌트 사이에 넣고 사용
              다. 컴포넌트 사이에 주입된 {bbsListItemView} 컴포넌트는 
                  BBsList에서 {children}이라는 정해진 props 변수로 받는다
              */}
              <BBsList>{bbsListItemView}</BBsList>
              <NavLink to="/bbs/writer">글쓰기</NavLink>
            </>
          ),
        },

        {
          path: "writer",
          element: (
            <BBsInput
              bbsDto={bbsDto}
              setBbsDto={setBbsDto}
              bbsInput={bbsInput}
            />
          ),
        },
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
