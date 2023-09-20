"use strict"

//2. Напишіть функцію detonatorTimer(delay) використовуючи вкладений setTimeout 
// function detonatorTimer(delay) {
//     let currentDelay = delay;
  
//     function countDown() {
//       if (currentDelay > 0) {
//         console.log(currentDelay);
//         currentDelay--;
//         setTimeout(countDown, 1000);
//       } else {
//         console.log('BOOM!');
//       }
//     }
  
//     countDown();
//   }
  
//   detonatorTimer(3);
  
  
// //1. Напишіть функцію detonatorTimer(delay) використовуючи setInterval 
//   function detonatorTimer(delay) {
//     let currentDelay = delay;
  
//     const intervalId = setInterval(() => {
//       if (currentDelay > 0) {
//         console.log(currentDelay);
//         currentDelay--;
//       } else {
//         clearInterval(intervalId);
//         console.log('BOOM!');
//       }
//     }, 1000);
//   }
  
//   detonatorTimer(3);


  let me = {
	name: 'Andrii',
	residency: 'Lviv',
	gender: 'male',
	age: 19,
	hobby: 'football',
	defaultMood: 'focused',
	currentMood: 'sleepy',

        introduce() {
            console.log(`My name is ${this.name} and I am ${this.age} years old`);
        },
        prognose() {
            console.log(`I live in ${this.residency} and play ${this.hobby} here`);
        },
        describeMyMood(){
            console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
        }
    }


    me.introduce();
    me.prognose();
    me.describeMyMood();


let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.describeMyMood.bind(me);


setTimeout(securedSelfIntroduce, 1000); // виведе коректний результат
setTimeout(securedSelfPrognose, 2000); // виведе коректний результат
setTimeout(securedSelfDescribeMyMood, 3000); // 