'use strict';
// let js = "Amazing";
// if(js == 'Amazing')
//     console.log('Amazing')
// else
//     console.log(`Its not amazing.....its ${js}`)
// js = prompt(`Enter JS`);
// switch(js){
//     case 'Amazing' : console.log(`Its Amazing`);
//     break;
//     case `Awesome` : console.log('Its Awesome');
//     break;
//     default : console.log(`Its neither Awsome nor Amazing its ${js}`);
// }

// const calcAge  = function(){
//     return (2021 - 1999);
// }

// function calcAge(){
//     return 2021 - 1999;
// }

// let age = calcAge(1999);
// console.log(age);
// console.log(calcAge);

// const age = [15,19,21];
// console.log(age);
// age[3] = 25;
// console.log(age);
// age[5] = 27;
// console.log(age);
// console.log(typeof age[1]);

// const obj = {
//     firstName: 'Shubham',
//     secondName: 'Tyagi',
//     job: 'unemplyoed',
//     talent: 'Bharpur'
// }

// console.log(obj['secondName']);

// Coding Challenge 3

// const john = {
//     fullName: 'john Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function(){
//         this.BMI = this.mass/this.height ** 2;
//     }
// }

// const mac = {
//     fullName: 'Mac Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function(){
//         this.BMI = this.mass/this.height ** 2;
//     }
// }

// john.calcBMI();
// mac.calcBMI();
// if(john.BMI >= mac.BMI)
//     console.log(`john's BMI(${john.BMI}) is greater then mac's BMI(${mac.BMI})`);
// else
// console.log(`mac's BMI(${mac.BMI}) is greater then john's BMI(${john.BMI})`);

// Coding Challenge 4

// let bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// console.log(bill);
// let tip = [];
// let total = [];
// let sum = 0;
// for(let i = 0;i<10;i++){
//     if(bill >150 && bill<300)
//         tip[i] = bill[i] * 0.15;
//     else
//         tip[i] = bill[i] * 0.20;
//     total[i] = bill[i] + tip[i];
//     sum += total[i];
// }
// console.log(tip);
// console.log(total);
// console.log(`Average  = ${sum/10}`);

// coding challenge arrays
function printArrays(arr) {
  let str = '';
  j;
  for (let i = 0; i < arr.length; i++) {
    str = str + `\n ...${arr[i]} in ${i + 1} days `;
  }
  console.log(str);
}

let arr = [17, 21, 23];
printArrays(arr);
