"use strict";

function filterUnique(array) {
    return Array.from(new Set(array));
  }
  
  const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];
  
  console.log(filterUnique(userNames)); 
  