import BbsList from "./BbsList";
import BbsInput from "./BbsInput";

const BBsMain = () => {
  // deps(useEffect()함수의 두번째 파라메타)가 빈배열([])이면
  // 화면이 최초 Rendering 된 직후->(mount라고 칭함) 한번 실행되는 Event 함수
  // 컴포넌트 마운트 :화면이 최초 Rendering 이 (모두) 된 직후
  // useEffect(() => {
  //   const fetchBBList = async () => {
  //     const result = await getBbsList();
  //     setBbsList(result);
  //   };
  //   fetchBBList();
  // }, []);

  return (
    <>
      <BbsInput />
      <BbsList />
    </>
  );
};
export default BBsMain;
