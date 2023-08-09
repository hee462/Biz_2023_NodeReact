// react-router-dom에서 제공하는 a link  확장 컴포넌트
import { NavLink } from "react-router-dom";
import "../css/NavList.css";

const NavList = () => {
  return (
    <nav className="main">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/notice">공지사항</NavLink>
        </li>
        <li>
          <NavLink to="/bbs">자유게시판</NavLink>
        </li>
        <li>
          <NavLink to="/mypage">mypage</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default NavList;
