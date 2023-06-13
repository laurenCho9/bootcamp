function setTime() {
  const time = new Date();
  const 분 = time.getMinutes().toString();
  const 초 = time.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

// 주기성
setInterval(setTime, 1000);
