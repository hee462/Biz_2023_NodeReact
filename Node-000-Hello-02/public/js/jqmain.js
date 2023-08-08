// 지금부터 Jqurey script 영역
document.addEventListener("DOMContentLoaded", () => {});

$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("반갑습니다");
  $("div.bbs").css("color", "blue");

  // 바닐라 js 코드로 아래 코드 작성하면
  //   const divs1 = document.qureySelectAll("div.main");
  //   const onClickHandler = (e) => {
  //     const text = e.currenttarget.innerText;
  //     alert(text);
  //   };
  //   for (let i = 0; i < divs1.length; i++) {
  //     divs[i].addEventListener(onClickHandler);
  //   }
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });
});
