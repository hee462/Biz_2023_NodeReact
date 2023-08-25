# React BucketList 프로젝트

- `react-router-dom`,`styled-component`,`module.css`를 연동한 프로젝트

```bash
npm install react-router-dom
npm install styled-components
npm install react-uuid
npm install moment
```

## 프로젝트에 storyBook 적용하기

- storyBook: custom 컴포넌트를 관리하는 도구
- storybook 개발도구 전역으로 설치하기: `npm install -g storybook`
- 생성된 프로젝트 폴더에서 :`storybook init`
- `프로젝트/.storybook` 폴더는 절대 편집 금지
- `프로젝트/src/stories` 폴더의 파일, 파일 모두삭제

## 컴포넌트 storyBook DashBoard에 표시하기

- 자신의 커스텀 컴포넌트를 src 아래 임의의 폴더에 생성한다
- MButton 컴포넌트 생성 : `src/shareComps/MButton.jsx`파일생성
- dashboard 표시 생성 :`src/storyies/MButton`폴더를 생성하고.
  `index.stories.js`파일 생성
- 파일에 컴포넌트 설명과 예제 작성

```jsx
/// 보여줄 컴포넌트 import
import MButton from "../../shareCompus/MButton";

//설명작성
export default{
    title : "내가 만든 버튼 " ,// 보여줄이름
    component :  [MButton]  , // 보여줄(import 한) 컴포넌트
}
// 예제작성
export const 버튼1 =() => <MButton>클릭<MButton/>
```

## react-router-dom의 데이터 핸들링

- `createBrowserRouter()` 함수를 사용하여 구현한 router 프로젝트에서 데이터의 핸들링은 state가 없는 상황에서 마치
  state를 변화 시키는 것처럼 화면이 rendering 되는 효과를 구현할 수 있다, -`createBrowserRouter()` 함수는 `react-router`에서 `data-routing`으로 구분한다

### router 구성요소중 loader와 action속성, useLoaderData() hook 함수

- router를 설정할때 다음과 같이 loader를 설정하면 router에 의한 화면이 rendering 되기 전에,
  화면에 보여질 데이터를 어떤 서버로 부터 가져오거나, 데이터를 준비하는 코드를 실행할 수 있다.
- loader는 최종적으로 데이터를 JSON type으로 return 하도록 구현되어야 한다.
- loader가 return 한 JSON type의 데이터는 마치 state처럼 화면을 rendering 하는 요소로 작동된다.
- loader가 return JSON의 원본 데이터를 어디선가 변화시키면 화면이 reRendering 되는 것을 확인 할 수 있다.
- loader 함수의 예

```jsx
const sampleLoader = async () => {
  const res = await fetch("서버/getList");
  const result = await res.json();
  return { sampleList: result };
};
```

- 위의 코드에서 return 된 sampleList 변수는 state 처럼 작동되며,
  만약 result 데이터가 변화되면 sampleList 가 감지를 하고 state 처럼 화면 rendering을 수행하도록 작동한다
- `MVP` ,`MVVM` 패턴의 경우 데이터를 변화시키고, 이 변화된 데이터가 어떤 절차로 화면에 rendering 되는지 애플리케이션
  개발자는 신경쓰지 않아도 되는 패턴
