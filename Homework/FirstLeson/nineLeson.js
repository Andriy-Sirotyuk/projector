"use strict";

const userNames = ['Петро', 'Емма', 'Петро', 'Емма', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена', 'Емма'];

function filterUnique(array) {
    const newUserNames = [...userNames];

    const newSet = new Set(newUserNames);

    return [...newSet];
}

console.log(filterUnique(userNames)); 
