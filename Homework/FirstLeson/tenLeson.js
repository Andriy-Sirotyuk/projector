"use strict"
 
const movies = [
	{
		movieName: 'The Thing',
		releaseYear: 1982,
		directedBy: 'Carpenter',
		runningTimeInMinutes: 109,
	},
	{
		movieName: 'Aliens',
		releaseYear: 1986,
		directedBy: 'Cameron',
		runningTimeInMinutes: 137,
	},
	{
		movieName: 'Men in Black',
		releaseYear: 1997,
		directedBy: 'Sonnenfeld',
		runningTimeInMinutes: 98,
	},
	{
		movieName: 'Predator',
		releaseYear: 1987,
		directedBy: 'McTiernan',
		runningTimeInMinutes: 107,
	},
];

// console.log(movies.sort(byProperty('releaseYear', '>'))); 
// // виведе масив фільмів посортованих по року випуску, від старішого до новішого
// console.log(movies.sort(byProperty('runningTimeInMinutes', '<'))); 
// виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty('movieName', '>'))); 
// виведе масив фільмів посортованих по назві, в алфавітному порядку

// 1 task

function byProperty(property, direction) {
    return function (a, b) {
      if (direction === '>') {
        return a[property] - b[property];
      } else {
        return b[property] - a[property];
      }
    };
  }
  
const sortedMovies = movies.sort(byProperty('releaseYear', '>'));
console.log(sortedMovies);  

const sortTimeInMinutes = movies.sort(byProperty('runningTimeInMinutes', '<'));
console.log(sortTimeInMinutes);

const sortMovieName = movies.sort(byProperty('movieName', '>'));
console.log(sortMovieName);


// 2 task
  
  
function someFunction(a, b) {
    return a + b;
  }
  
  function slower(func, seconds) {
    return function (...args) {
      setTimeout(() => {
        const result = func(...args);
        console.log(`Function result: ${result}`);
      }, seconds * 1000);
    };
  }
  
  let slowedSomeFunction = slower(someFunction, 5);
  
  slowedSomeFunction(2, 3); 
  
  
  