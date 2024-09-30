// String 메서드
// 1. includes
const word = "Hello , World";

console.log(word.includes("Hello"));
console.log(word.includes("hello"));
// 2. toLowerCase || toUpperCase
const res = word.toUpperCase().includes("hello".toUpperCase());

console.log(res);
