"use strict"

// 1 задача


// const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

// const initials = userNames
//   .map(name => {
//     const parts = name.split(" ");
//     const sortedParts = parts.sort();
//     return sortedParts.map(part => part[0]).join(".");
//   });

// console.log(initials); // [ "Г.П.А.", "П.О.І.", "Р.А.О."]


// 2 задача

// 1)
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// const vowels = ["А", "Е", "Є", "И", "І", "О", "У", "Ю", "Я"];

// const namesStartingWithVowel1 = userNames.filter(name => {
//   const firstLetter = name.charAt(0).toUpperCase();
//   return vowels.includes(firstLetter);
// });

// console.log(namesStartingWithVowel1);

// 2)
// const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];

// const vowels = ["А", "Е", "Є", "И", "І", "О", "У", "Ю", "Я"];

// const namesStartingWithVowel = userNames.filter(name => vowels.includes(name[0].toUpperCase()));

// console.log(namesStartingWithVowel);


// 3 задача 

// const resultsArray = [1, 2, [3, [4]]];

// function calculateProduct(arr) {
//   return arr.reduce((acc, current) => {
//     if (Array.isArray(current)) {
//       return acc * calculateProduct(current);
//     } else {
//       return acc * current;
//     }
//   }, 1);
// }

// const productOfArray = calculateProduct(resultsArray);

// console.log(productOfArray); 


// 4 задача 

// function optimizer(data) {
//     const updatedData = {};
  
//     for (const key in data) {
//       if (data.hasOwnProperty(key)) {
//         const lowerCaseKey = key.toLowerCase();
//         const roundedPrice = parseFloat(data[key]).toFixed(2);
//         updatedData[lowerCaseKey] = roundedPrice;
//       }
//     }
  
//     return updatedData;
//   }
  
//   const priceData = {
//     Apples: '23.4',
//     BANANAS: '48',
//     oRAngGEs: '48.7584',
//   };
  
//   const updatedPriceData = optimizer(priceData);
  
//   console.log(updatedPriceData);
  
  
// 5 задача 

// function durationBetweenDates(startDate = '01 Jan 1970', endDate = '01 Jan 1970', dimension = 'days') {
//     const unitsInMilliseconds = {
//       days: 24 * 60 * 60 * 1000,
//       hours: 60 * 60 * 1000,
//       minutes: 60 * 1000,
//       seconds: 1000,
//     };
  
//     const start = new Date(startDate);
//     const end = new Date(endDate);
//     const diff = Math.abs(end - start);
  
//     return `${Math.floor(diff / unitsInMilliseconds[dimension])} ${dimension}`;
//   }
  
//   console.log(durationBetweenDates('02 Aug 1985', '03 Aug 1985', 'seconds')); 
//   console.log(durationBetweenDates('31 Jan 2022', '03 Feb 2021', 'days')); 
  




