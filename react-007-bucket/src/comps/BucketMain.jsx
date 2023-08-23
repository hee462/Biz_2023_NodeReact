import styled from "styled-components";
import BucketSearch from "./BucketSearch";
import { redirect, Outlet } from "react-router-dom";
import { getBucketList, newBucket } from "../modules/bucketFech";
import BuketList from "./BucketList";

const ASideBar = styled.aside`
  width: 22rem;
  background-color: #f7f7f7;
  border-right: solid 2px #cccc;
  display: flex;
  flex-direction: column;
`;
/*
다른 tag로 감싸진  a tag의 속성 지정하기
a tag 는 다른 tag 와 달리 상당히 독자적인 성질을 많이 갖는다
다른 tag(여기에서는 li tag)로 감싸는 구조일 경우
실제  a tag 가 지정된 문자열을 클릭하면 a tag로 인해 URL 이 변화되는데
만약 a tag 바깥쪽을 클릭하면 실제로 URL 변화 등이 없어
        <li><a href="#"></li>
위 구조에서 <a href="#"><li>text</li></a> 처럼 만들수 있지만
이는 HTML5 문법 구조에 어긋나는 패턴이다.
이럴때는  a tag의 display를 inline-block으로 설정하고,li 크기에 맞춰 가득채우면된다

*/
const UL = styled.ul`
  margin: 10px;
  list-style: none;
  & li {
    padding: 0;
    margin: 5px auto;
    text-align: left;

    &:hover {
      background-color: #aaa;
      cursor: pointer;
    }
  }
  & a {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5),
      2px 3px 3px 3px rgba(0, 0, 0, 0.2);

    text-decoration: none;
    display: inline-block;
    width: 100%;
    padding: 12px 16px;
    margin: 5px auto;
    color: inherit;
  }
`;
export const mainLoader = async () => {
  const buckeList = await getBucketList();
  return { buckeList };
};
export const mainAction = async () => {
  const bucket = await newBucket();
  return redirect(`/content/${bucket.id}/edit`);
};
const BuketMain = () => {
  // const { buckeList } = useLoaderData();
  // const bucketItemListView = buckeList.map((item) => {
  //   return (
  //     <li>
  //       <NavLink to={`content/${item.id}`}>{item.bucket}</NavLink>
  //     </li>
  //   );
  // });
  return (
    <>
      <ASideBar>
        <BucketSearch />
        <BuketList />
      </ASideBar>
      <div>
        <h1>
          <Outlet />
        </h1>
      </div>
    </>
  );
};
export default BuketMain;

// const BuketMain = () => {
//   return <h1>여기는 BuketMain</h1>;
// };
