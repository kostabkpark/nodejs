// 배열/객체
// 1. 순회 (for) : 요소를 순서대로 하나씩 접근하는 것
const numbers = [1,2,3];
const student = {
  name :"홍길동",
  score: 90,
  age : 20
}
for(let i=0; i< numbers.length; i++) {
  console.log(numbers[i]);
}
for (let number of numbers) {
  console.log(number);
  number += 1;
  console.log(number);
}

for (let key in student) {
  console.log(key, student[key]);
}
// 2. property / method
// 2-1 filter method
const words = ["abc", "bcde", "cdef", "hello", "eeeeee"];

words.filter((word) => word.length >= 4) // callback 함수에 있는 테스트를 통과한 요소만 가지는 배열을 반환
      .forEach(word => console.log(word));

// 2-2 includes : words 중에 hello , h 을 원소로 가지고 있는지 여부 확인 
console.log(words.includes('h'));
console.log(words.includes('hello'));
// 2-3 map : 기존 배열을 가지고 새로운 배열을 만들어주는 메서드
const numArr = [1,2,3,4];  // ==> [3,6,9,12]
const mappedArr = numArr.map((num) => num * 3);
console.log(mappedArr);
