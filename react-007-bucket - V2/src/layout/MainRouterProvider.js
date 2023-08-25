import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BuketMain, { mainLoader, mainAction } from "../comps/BucketMain";
// import { bucketAction, buketLoader } from "../modules/routerAction";
import BuketDetail, {
  detailLoader,
  deleteAction,
  completeAction,
  favoiteAction,
} from "../comps/BucketDetail";
import BucketUpdate, { updateAction } from "../comps/BucketUpdate";
import BuketIndex from "../comps/Bucketindex";
import ErrorPage from "../shareCompus/ErrorPage";
/*
RouterProvider 에 연결하여 각종 Routing을 수행하는 설정만들기
createBrowserRouter()함수를 사용하여 router 객체를 생성
대표적으로 path를 지정하고 path 따라 열리는 컴포넌트를 설정

*/
const router = createBrowserRouter([
  {
    path: "/",
    element: <BuketMain />,
    loader: mainLoader,
    action: mainAction,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <BuketIndex /> },
      {
        path: "content/:id",
        element: <BuketDetail />,
        loader: detailLoader,
        action: favoiteAction,
      },
      {
        path: "content/:id/edit",
        element: <BucketUpdate />,
        loader: detailLoader,
        action: updateAction,
      },
      { path: "content/:id/delete", action: deleteAction },
      { path: "content/:id/complete", action: completeAction },
    ],
  },
]);
/*
react-router-dom 을 사용한 화면 layout 구현하는 도구
...provider는 프로젝트 전반에서 routing(path 변경,클리그 다른화면 전환 등)을 쉽게 구현해주는 도구
Provider 로 감싸는 부분은 router를 사용한 data handling이 가능하다
router v.6.4 이상에서는 Routing 을 구현할때 BrowserRouter 컴포넌트를 사용하지 않고,
createBrowserRouter 함수를 사용한다
...Provider 는 createBrowserRouter 함수로 만든 routing 환경을 쉽게 구현하도록 도와주는 도구가 된다
*/
const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};
export default MainRouterProvider;
