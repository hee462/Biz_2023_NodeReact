import { NavLink } from "react-router-dom";
import dImage from "../assets/그림1.png";
const BuckItem = ({ item }) => {
  return (
    <li>
      <NavLink to={`content/${item.id}`}>
        <img src={item.img_src || dImage} alt="" width="30px" />
        {item.bucket}
      </NavLink>
    </li>
  );
};
export default BuckItem;
