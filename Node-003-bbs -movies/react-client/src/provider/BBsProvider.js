import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { getBbsList, bbsInsert } from "../modules/FetchModule";

const BBscontext = createContext();
// use로 시작되는 함수는 React에서 HOOK 함수라고 한다
// 여러가지 react와 협력하여 다양한 기능을 구현하는 함수 들이다
// 기본적으로 제공하는 HOOK 함수와 함께 사용자정의(개발자정의)\HOOK 함수를 만들어 사용할수 있다
// 이때 사용자 정의 Hook 함수는 반드시 use 접두사로 시작한다
const useBbsContext = () => {
  return useContext(BBscontext);
};
const BBsContextProvder = ({ children }) => {
  const imgRef = useRef(null);
  const imgsRef = useRef(null);

  const [bbs, setBbs] = useState({
    b_seq: 0,
    b_nickname: "",
    b_title: "",
    b_content: "",
  });
  const [bbsList, setBbsList] = useState([]);
  useEffect(() => {
    const fetchBBList = async () => {
      const result = await getBbsList();
      setBbsList(result);
    };
    fetchBBList();
  }, []);
  const bbsInsertCB = useCallback(async () => {
    const formData = new FormData();
    const file = imgRef?.current.files[0];
    // const files = imgsRef.current.files;
    const bbsStr = JSON.stringify(bbs);
    formData.append("b_images", file);
    // for (let file of files) {
    //   formData.append("b_images", file);
    // }

    formData.append("bbs", bbsStr);
    console.log(bbs, formData);
    await bbsInsert(formData);

    const result = await getBbsList();
    setBbsList(result);
  });
  const props = {
    bbs,
    setBbs,
    bbsList,
    setBbsList,
    bbsInsertCB,
    imgRef,
    imgsRef,
  };
  // BBsContext.Provder라는 Store에 state와 setState()함수를 담아준다
  return <BBscontext.Provider value={props}>{children}</BBscontext.Provider>;
};
export { BBsContextProvder, useBbsContext };
