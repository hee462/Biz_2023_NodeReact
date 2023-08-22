import uuid from "react-uuid";
import moment from "moment";
import localforage from "localforage";
// 코딩에서 매직리터럴(매직스트링/매직넘버) 금지!!!!!!
// 문자열로 생성된 값을 참조하여 어떤 문제를 해결하는 것
// if(name==="홍길동")
// nickname ='홍길동'
// const SAMPLE_NAME = '홍길도'
// nickname =SAMLE_NAME
// if(name===SAMPLE_NAME)

const LOCAL_DB = "BUCKT_LIST";
export const newBucketDto = () => {
  const bucketDto = {
    id: uuid(),
    img_src: "",
    sdate: moment().format("YYYY[-]MM[-]DD"),
    stime: moment().format("HH:mm:ss"),
    bucket: "새로운 Bucket",
    complete: false,
  };
  return bucketDto;
};
export const getBucketList = async () => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  //DB 에서 get 한 데이터가 없으면 임시 데이터를 생성하고
  //db에 insert 한 후 그 데이터를 return 하기
  if (!bucketList) {
    const bucketDto = newBucketDto();
    // indexDB에 추가하기
    await setBuckList([bucketDto]);

    return [bucketDto];
  }
  return bucketList;
};
// id값을 매개변수로 받아서 리스트 중 id 값에 해당하는 한개의 item을 return
export const getBucket = async (id) => {
  const bucketList = await localforage.getItem(LOCAL_DB);
  // buketList 중에서id가 매개변수로 전달받은 갑소가 같은 요소를 찾아서 추출하기
  const bucket = bucketList.find((item) => item.id === id);
  // bucketList 에서 데이터를 find 했는데 결과값이 null 이거나 또는 undefined인 경우도 있다
  // 결과값이 여러가지  falsy 값이 경우 null 로 통일하여 return
  //**** 즉 실패값이면 null 값으로 통해서 리턴하라는 문 : ??
  return bucket ?? null;
};

export const newBucket = async () => {
  const bucketDto = newBucketDto();
  const bucketList = await getBucketList();
  /*
  JS 에서 기존 배열에 새로운 값을 추가하기
  배열.push(item): 배열의 끝에 새로운 item 추가하기 -> 새로등록한것을 마지막으로
  배열.unShift(item):배열의 맨 처음에 추가하기 -> 새로등록한것을 처음으로
  
  */
  bucketList.unshift(bucketDto);
  await setBuckList(bucketList);
  return bucketDto;
};
// browser의 indexedDB에 BUCKETLIST 이름으로 데이터 저장
export const setBuckList = async (bucketList) => {
  // bucketList 데이터를 JSON 데이터로 업데이트 하기
  return await localforage.setItem(LOCAL_DB, bucketList);
};
