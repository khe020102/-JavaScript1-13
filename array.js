'use strict';

// Array

// 1. Decleration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['a', 'b'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); // a출력
console.log(fruits[1]); // b출력
console.log(fruits[2]); // undefined출력
console.log(fruits[fruits.length - 1]); // 0부터 시작하니까 총 길이에서 -1을 해줘 마지막 인덱스 출력

//3. Looping over an array
//print all fruits
//a. for
console.clear();
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//b.for of
for(let fruit of fruits) {
    console.log(fruit);
}

// c. forEach
fruits.forEach(function (fruit, index, array) { // 우리가 전달한 함수를 value 하나하나 전달해주는 callback 함수
    console.log(fruit, index, array);
});

// 4. Addtion, deletion, copy
// push:add an item to the end
fruits.push('c', 'd');
console.log(fruits);


//pop:remove an aitem from the end
fruits.pop(); // d 삭제
fruits.pop(); // c 삭제
console.log(fruits);

//unshift: add an item to the beginning
fruits.unshift('c', 'd');
console.log(fruits);
// remove an item from the beginning
