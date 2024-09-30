//1. shorthand = 키 : 값 ("키" X)

const student = {
  name : "홍길동",
  score : 90,
  age : 20,
  school : "kosta",
  introduce : function () {
    console.log("나의 이름은 홍길동입니다.");
  }
}

console.log(student);

// const name ="홍길동";
// const score = 90;

// const student2 = {
//   name,
//   score
// }

// console.log(student2);

//2. 객체의 구조분해 할당

// const name = student.name;
// const score = student.score;
// const age = student.age;
// const school = student.school;


const {name,introduce} = student;

console.log(name);
introduce();

// 3. 배열 구조분해 할당

const arr = [1,2,3];
arr = [4,5,6];

const num1 = arr[0];
const num2 = arr[1];
const num3 = arr[2];

console.log(num1, num2, num3);

const [n1,n2,n3] = arr;

console.log(n1,n2,n3);

const useState = ["a", function setA() { console.log("a"); }];
const [state, setState] = useState;

console.log(state, setState);

setState();
