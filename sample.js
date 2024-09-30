var a1 = "a1" ;
let b = "b"; // 지역변수 , 값이 재할당 되는 변수
const c = { name: "홍길동", key: "c" }; //  동적으로 타입이 할당 ,
//  값이 재할당되지 않음 (함수가 상수에 할당되는 경우에는 호이스팅 대상이 아님)
c=10;
const f =  () => console.log("함수입니다."); // 화살표 함수 
const f1 = (n1, n2) => {
  return n1 + n2 ;
}

console.log(a); // 선언(호이스팅), 초기값에 접근은 안됨
console.log(a1);
console.log(b);
console.log(c);
console.log(add(1, 1));
f();
console.log(f1(2,2));
//[1,2,3]; // 1 // "hello"
//() => {} ; // 상수 = 딱 한번만 값을 지정 , 값을 변경하지 못함

console.log(1 + 1);

var a = 1 ; // 전역변수, 값이 재할당 되는 변수, 호이스팅

function add(n1, n2) {
  // 호이스팅 대상
  return n1 + n2;
}


