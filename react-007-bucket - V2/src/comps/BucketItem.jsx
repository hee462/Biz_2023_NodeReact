import { NavLink } from "react-router-dom";
import dImage from "../assets/그림1.png";
const BuckItem = ({ item }) => {
  return (
    <li>
      <NavLink to={`content/${item.id}`}>
        <img
          src={item.img_src || dImage}
          className={({ isAactive }) => (isAactive ? "active" : "none")}
        />
        <span className={item.complete ? "complete" : "none"}>
          {item.bucket}
        </span>
      </NavLink>
    </li>
  );
};
export default BuckItem;
