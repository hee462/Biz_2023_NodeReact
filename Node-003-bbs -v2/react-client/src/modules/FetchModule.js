// 함수 선언문에 export 를 붙이면 개별 함수가 export 된다
// export {hello} 한 것과 같다

export const hello = async () => {
  // proxy에 설정된 URL과 합성하여 http://localhost3000/bbs 요청
  const res = await fetch("/bbs");
  const json = await res.json();
  console.log(json);
  //   setTitle(json.title);
  return json.title;
};

export const bbsInsert = async (formData) => {
  const URL = "/bbs/insert";
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL, fetchData);
};
