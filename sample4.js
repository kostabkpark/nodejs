// 객체 = 가변값 , 주소를 복사하기 때문에 복사 후에 변수에 할당된 값을 변경하면 ... 
const student = {
  name : "홍길동",
  score : 90
}

const student1 = student;
console.log("student1 == student", student1 == student)  // 얕은비교, 참조값를 비교
console.log("student1 === student", JSON.stringify(student1) === JSON.stringify(student))  // 깊은비교, 객체를 문자열로 변환해서 비교
// JSON.stringify() 

// 불변객체 {...spread 연산자}
const student2 = {...student};
console.log("student2 == student", student2 == student)  // 얕은비교, 참조값를 비교
console.log("student2 === student",JSON.stringify(student2) === JSON.stringify(student)) //  깊은비교, 객체를 문자열로 변환하여 비교
console.log(student1, student, student2);

student1.age = 20; // side effect 일어남
student2.age = 30; // 원본을 불변 객체로 만들어서 side effect 가 일어나지 않음
student2.school = "kosta";

console.log(student1, student, student2);

// 배열 = 가변값 , 주소를 복사하기 때문에 복사 후에 변수에 할당된 값을 변경하면 ... 

const arr = [1,2,3];
const arr1 = arr;
// 불변객체(배열), [...spread]
const arr2 = [...arr];

console.log(arr, arr1, arr2);

// side effect
arr1.push(4);
// side effect X
arr2.push(10);

console.log(arr, arr1, arr2);

// 원시타입의 데이터들 - number, string, boolean : 불변값 
// 변수 복사할 때 값이 복사

let num1 = 0;
let num2 = num1;

console.log(num1, num2)

num2 = num2 + 1;

console.log(num1, num2)
