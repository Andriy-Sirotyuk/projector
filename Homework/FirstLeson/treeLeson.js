"use strict";

//1. Завдання

/*
const userInput = prompt("Введіть число:");
const number = parseInt(userInput);

if (isNaN(number)) {
    console.log("Помилка: введіть число");
} else {
    for (let i = 0; i < number; i += 2) {
        console.log(i);
    }
}

*/

//2. Завдання

/*
const currentMaxValue = 4589;
const reverseMaxValue = parseInt(currentMaxValue.toString().split('').reverse().join(''));

console.log(reverseMaxValue); // 9854
console.log(typeof reverseMaxValue); // 'number'
*/

//3. Завдання

/*
const resultsArray = [1, 2, [3, [4]]];
const flattenedArray = resultsArray.flat(Infinity);
const result = flattenedArray.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

console.log(flattenedArray); // [1, 2, 3, 4]
console.log(result); // 24

*/
