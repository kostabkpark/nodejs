// 콜백(callback) 함수 : 자신이 아닌 다른 함수의 인자로 전달되는 함수

function add(n1, 콜백함수) {
  콜백함수();
}

const f = (value) => console.log(value + "를 출력하는 함수입니다.");

function main(a, f) {
  f(a);
}

main(10, f);

function sub(f1) {
  f1();
}

sub(()=> console.log("매개변수가 없는 함수입니다."))

function complex(n1, n2, f3) {
  const result = f3(n1,n2); // n1 * n2 리턴해주는 함수
  console.log(result);
}

const addTwonumbers = (a,b) => a+b;
complex(2,3, addTwonumbers);

const mult = (a,b) => a*b;
complex(2,3,mult);

const div = (a,b) => a/b;
complex(4,2,div);

const minus = (a,b) => a-b;
complex(10,3,minus);