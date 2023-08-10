# NodeJS + Express +MySQL + Sequelize 연동 프로젝트

- 프로젝트 생성 : `npx express-21c myproject -s`(주의!! -s 반드시 포함)
- DB Model 생성하기 위하여

1. sequelize-auto 설치 : `npm install -g sequelize-auto`
2. mysql2 엔진 설치 :`npm install -g mysql2`
3. 터미널에서 `sequelize-auto` 실행하여 화면이 나타나는 확인

## sequelize 를 사용하여 기존 DB에서 Model 추출하기

- model정보를 저장할 임시 폴더 생성 `db_make` 폴더 생성
  만약 터미널에서 생성한다면 `$mkdir db_make`명령으로 실행하여 생성
- DB Model 추출 실행(db_make 폴더에서 실행할것, 다른 폴더 삭제 주의)
  `sequelize-auto -h localhost -d imageDB -u root -x '!Biz8080'`

## sequelize model 파일 편집

- 생성된 model 파일이 ES5 이전 방식으로 만들어진 파일이기 때문에 ES5+
  버전으로 수동 변환해야 한다

```js
//기존코드
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes)
// 변경 진행
import Sequelize from "sequelize";
export default (sequelize) =>


```

- 칼럼 설정부분 코드 변경

```js
// 기존코드 중에 DataTypes
 return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
  // 변경 코드 type: Sequelize.DataTypes.BIGINT,
  return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },

```

- 변경된 model 들을 init-models에 등록하기

```js
import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";

// initModel 함수에 모델 설정코드 추가
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);
  // 다른 곳에서 model을 사용할수 있도록 export 준비
  return {
    tbl_files,
    tbl_bbs,
  };
};
```

## 기타설정

- `app.js`에서 DB.sequelize.sync() 함수 점검
- 서버 Start, Table 삭제후 서버 Re Start 하여 Table 생성확인

## Client JS에서 FormData 에 담긴 body 데이터 받기

- JS 에서 FormData 에 Text, Image 등을 append 하여 서버로 보내면 기본 설정에서는 이 데이터를 수신하지 못한다
- FormData를 수신하기 위하여 middle ware를 설치한다: `npm install multer`
- app.js에 multer 설정

```js
import multer from "multer";
// 다음 코드를 찾아서 multer middle ware 설치
app.set("views", path.join("views"));
// express에 multer 설치
app.set(multer().array());
```
