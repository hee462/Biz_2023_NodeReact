import BucktItem from "./BucketItem";
import css from "./BuketList.module.scss";
import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

const UL = styled.ul`
  & a.active {
    color: red;
  }
  & span.complete {
    text-decoration: line-through;
  }
`;

const BuketList = () => {
  const { buckeList } = useLoaderData();
  const BuketItemListView = buckeList?.map((item) => {
    return <BucktItem key={item.id} item={item} />;
  });
  return <UL className={css.buket_ul}>{BuketItemListView}</UL>;
};
export default BuketList;
