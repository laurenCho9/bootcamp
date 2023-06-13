function sayHello() {
  console.log("안녕하세요");
}

// 1회성: 1초뒤 한번 호출
// setTimeout(sayHello, 1000);

// 주기성: 1초단위로 계속해서 호출
setInterval(sayHello, 1000);
