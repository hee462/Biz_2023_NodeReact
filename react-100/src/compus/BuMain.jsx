import { BuDto as bDto } from "../data/BuData";
import BuInput from "./BuInput";
import { useState, useEffect } from "react";
import moment from "moment";
import BuList from "./BuList";

const BuMain = () => {
  const [bDto, setbDto] = useState("");
  const [buList, setList] = useState([]);
  useEffect(() => {
    const setForage = async () => {
      await localStorage.setItem("BU", buList);
    };
    setForage();
  }, [buList]);
  useEffect(() => {
    const getForage = async () => {
      await localStorage.getItem("BU");
    };
    getForage();
  }, []);

  const buInput = () => {
    let newbuDto = { ...bDto };
    if (!bDto.id) {
      newbuDto = { ...bDto, id: "", bTime: moment().format("HH:mm:ss") };
    }
  };
  return (
    <>
      <h2>오늘은 금요일 야호</h2>
      <BuInput bDto={bDto} setbDto={setbDto} BuInput={BuInput} />
    </>
  );
};
export default BuMain;
