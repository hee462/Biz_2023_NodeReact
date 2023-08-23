import BucktItem from "./BucketItem";
import css from "./BuketList.module.scss";
import { NavLink, useLoaderData } from "react-router-dom";
const BuketList = () => {
  const { buckeList } = useLoaderData();
  const BuketItemListView = buckeList?.map((item) => {
    return <BucktItem key={item.id} item={item} />;
  });
  return <ul className={css.buket_ul}>{BuketItemListView}</ul>;
};
export default BuketList;
