"use strict"

/*
function iterativeOddSumTo(number) {
    let sum = 0;
    for (let i = 1; i <= number; i += 2){
        sum += i;
    }

    return sum ;
    }

    console.log(iterativeOddSumTo(1))
    console.log(iterativeOddSumTo(9))
    console.log(iterativeOddSumTo(10))
*/


      
function recursiveOddSumTo(number) {
    if (number === 1) {
      return 1;
    }
  
    return number % 2 === 1 ? number + recursiveOddSumTo(number - 2) : recursiveOddSumTo(number - 1);
  }
  
  console.log(recursiveOddSumTo(1));  // 1
  console.log(recursiveOddSumTo(9));  // 25
  console.log(recursiveOddSumTo(10)); // 25
  
