# NodeJS 서버와 연동되는 React Client

## react의 실행 port 변경

- NodeJS서버와 React 개발환경의 Server의 실행 port가 모두 3000 으로 서로 겹치는 관계로 여러문제를 일으킬수 있다
- NodeJS에서 port를 변경할수도 있지만, React의 실행 스크립트를 변경하여 Port 변경하자
- `package.json`파일의 다음 start 스크립트 설정을 변경한다

```json
//원래 start 스크립트
"start": "react-scripts start",
// 윈도우 스크립트
"start": "set PORT=5000 && react-scripts start",
// mac
"start": "export PORT=5000 && react-scripts start",
```

## NodeJS server와 연동에서 CORS 오류를 방지하기 위한 설정

- `package.json`에 다음 항목 추가

```json
//다음항목 중간에 추가하기
"private": true,
  "dependencies": {

  }
// 추가된 코드
"private": true,
"proxy":"http://localhost:3000/"
  "dependencies": {

  }
```

## React 프로젝트를 NodeJS 폴더에 포함시키기

- React 프로젝트를 NodeJS 폴더로 이동한다
- 적당한 이름으로 변경한다 : `react-client`
- node의 bin/app.js 의 다음항목을 변경한다

```js
// 기존코드
app.use(express.static(path.join("public")));
// React Build 폴더를 static 으로 지정하기
app.use(express.static(path.join("react-client/build")));
```

- react-client 에서 build 명령 실행 :`npm run build`

- 이렇게 설정을 할면 NodeJS 의 `http://localhost:3000/`을 열면 react 초기화면이 열린다

- React의 코드를 변경하면, 반드시 다시 build를 실행해 주어야 한다

## React의 시작 방법 변경

- 기존의 React 시작방법 :`npm run start`
- 새로운 React 시작방법 : `nodemon --exec "react-scripts build"`
- 단, 이 방법은 기존의 React Hot Loading 기능을 사용하기 어렵다
  때문에 기존의 Hot Loading 방법을 사용하려면 또하나의 터미널을 열고
  `npm run start`를 실행해준다
- 기본 상태에서는 nodemon 이 계속 재 시작한다. nodemons 현재 react-client 폴더에 있는
  어떠한 파일이라도 변경이 되면 자동 재 시작이된다. nodemon의 실행을 다소 제한할 필요가 있다
