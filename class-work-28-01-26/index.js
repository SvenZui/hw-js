// 1 завдання
// const number = function(a,b){
//     if (a<b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(number(10,3));

// const number = (a,b) => a<b ? a:b; ---- упрощена версія
// console.log(number(10,3));

// 2 завдання
// function d(a,b){
//     return a**b;
// }

// const d = (a,b) => a**b;
// let a = Number(prompt("Введіть число"));
// let b = Number(prompt("Введіть ступінь"));

// console.log(d(a,b));

// 3 завдання
// function c(a,b,c){
//     switch(c){
//         case '+':
//             return a+b;
//         case '-':
//             return a-b;
//         case '*':
//             return a*b
//         case '/':
//             return a/b;

//         default: return "помилка";
//     }
// }

// console.log(c(2,2,"+"));

// 5 завдання
// function a(a){
//     for(let i =1; i<10;i++){
//         console.log(a + " * "+i +' = '+a*i);
//     }
//     console.log("-----------------------------------------------------------")
// }
// for(i=1; i<10;i++){
//     a(i)
// }


// 9 завдання
// function p(a,b, bool) {
//     switch (bool) {
//         case true:
//             for (let i = a; i <= b; i++) {
//                 if (i % 2 === 0) {
//                     console.log(i)
//                 }
//             }
//             break;
//         case false:
//             for (let i = a; i <= b; i++) {
//                 if (i % 2 != 0) {
//                     console.log(i)
//                 }
//             }
//         break;
//     }
// }

// p(5,10,true)

let bigyear = function(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
 
 
let nextDate = function(day, month, year) {
  let days;
 
  if (month === 2) {
    days = bigyear(year) ? 29 : 28;
  } else if (month === 4 || month === 6 || month === 9 || month === 11) {
    days = 30;
  } else {
    days = 31;
  }
 
  if (day < days) {
    day++;
  } else {
    day = 1;
    if (month < 12) {
      month++;
    } else {
      month = 1;
      year++;
    }
  }
 
  return `${day}.${month}.${year}`;
}
 
console.log(nextDate(30, 10, 2000));
console.log(nextDate(31, 12, 2023));
console.log(nextDate(28, 2, 2023));  
console.log(nextDate(28, 2, 2024));