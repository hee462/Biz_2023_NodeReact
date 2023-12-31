import _tbl_bbs from "./tbl_bbs.js";
import _tbl_files from "./tbl_files.js";
// 모델 생성
const initModels = (sequelize) => {
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);
  /**
   * tbl_bbs와 tbl_files 테이블은 1:N의 관계가 설정되어 있다
   * sequelize 에서 1:N Association(참조무결성관계) 관계가 설정되었을때
   * 그 설정을 model 에 미리 정해서 select join이 매우 쉽게 구현 될 수 있다
   *
   */
  tbl_bbs.hasMany(tbl_files, { as: "F_FILES", foreignKey: "f_bseq" });

  tbl_files.belongsTo(tbl_bbs, { as: "F_BBS", foreignKey: "f_bseq" });

  return {
    tbl_bbs,
    tbl_files,
  };
};

export default initModels;
