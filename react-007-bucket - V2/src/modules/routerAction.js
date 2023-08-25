import uuid from "react-uuid";

const sampleBucketList = ["개발자되기", "리액트 정복", "스프링정복"];

// list를 json 타입 변경
export const buketLoader = () => {
  /*
    buket을 key로 하고 sampleBucketLis를 데이터로 담아서
    JSON type으로 데이터 return
    
    */
  return { bucketList: sampleBucketList };
};
export const bucketAction = () => {
  return sampleBucketList.push(uuid());
};
