import moment from "moment";

export const BuDto = {
  id: "",
  bSubject: "",
  bDate: moment().format("YYYY[-]MM[-]DD"),
  bTime: moment().format("HH:mm:ss"),
  bContent: "",
};
export default BuDto;
