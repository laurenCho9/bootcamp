// 이벤트를 넣는 방법
const timeElement = document.querySelector("#time");

// function 클릭시_실행될_함수() {
//   timeElement.style.color = "#fff";
//   timeElement.style.backgroundColor = "pink";
//   timeElement.innerText = "12:00";
// }

// 주의할 점은 클릭시_실행된_함수에 괄호를 쳐서 호출하면 바로 실행되버림.
// timeElement.addEventListener("click", 클릭시_실행될_함수);
// timeElement.addEventListener("mouseover", 실행될_함수);

// 특정 엘레멘트에 이벤트를 줄 수도 있지만 전체, 윈도우 자체에도 이벤트를 줄 수 있어요.
// function 실행될_함수() {
//   timeElement.style.color = "red";
//   timeElement.style.backgroundColor = "rgb(0, 118, 189)";
//   timeElement.innerText = "24:00";
// }

// 복사 버튼이나 단축키 누를 때 이벤트 실행
// window.addEventListener("copy", 실행될_함수);
// 브라우저 창 크기를 조절할 때 이벤트 실행
// window.addEventListener("resize", 실행될_함수);

// 이번에는 style을 응용해서 윈도우가 아닌 엘레멘트에 이벤트 주기
function 색깔을_바꿔주는_함수() {
  if (timeElement.style.color === "orange") {
    timeElement.style.color = "blue";
  } else {
    timeElement.style.color = "orange";
  }
}

function 숫자를_바꿔주는_함수() {
  timeElement.innerText = "12:00";
}

timeElement.addEventListener("click", 색깔을_바꿔주는_함수);
timeElement.addEventListener("click", 숫자를_바꿔주는_함수);
