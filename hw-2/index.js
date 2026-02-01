// 1 завдання
// let start = parseInt(prompt("Початкове число:"));
// let count = parseInt(prompt("Скільки чисел додати:"));

// let sum = 0;

// for (let i = 0; i < count; i++) {
//   sum += start + i;
// }

// alert("Сума: " + sum);


// 2 завдання
// let a = parseInt(prompt("Введи перше число:"))
// let b = parseInt(prompt("Введи друге число:"))

// while (b !== 0) {
//   let c = b;
//   b = a % b;
//   a = c;
// }

// alert("НСД дорівнює:" +a)

// 3 завдання
// let a = parseInt(prompt("Введіть число:"))
// if (a <= 0) {
//     console.log("Введіть додатнє число:")
// }
// else {
//     for (let i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             console.log(i)
//         }
//     }
// }

// 4 завдання
// let a = Math.abs(parseInt(prompt("Введіть число:")));
// let count = 0;

// if (a === 0) {
//     count = 1;
// } else {
//     for (let i = 0; a > 0; i++) {
//         a = Math.floor(a/10)
//         count = i + 1;
//     }
// }

// console.log(count);

// 5 завдання
// let a = 0;
// let b = 0;
// let c = 0;
// let d = 0;
// let e = 0;
// let num;

// for (let i = 0; i < 10; i++) {
//     num = parseInt(prompt("Введи число:"));

//     if (num > 0) {
//         a = a + 1;
//     } else if (num < 0) {
//         b = b + 1;
//     } else {
//         c = c + 1;
//     }

//     if (num % 2 == 0) {
//         d = d + 1;
//     } else {
//         e = e + 1;
//     }
// }

// console.log("Додатні: " + a);
// console.log("Від'ємні: " + b);
// console.log("Нулі: " + c);
// console.log("Парні: " + d);
// console.log("Непарні: " + e);

// 6 завдання
// let again = true;
// let a;
// let b;
// let op;
// let result;

// while (again == true) {
//     a = parseFloat(prompt("Введи перше число:"));
//     b = parseFloat(prompt("Введи друге число:"));
//     op = prompt("Введи знак (+, -, *, /):");

//     if (op == "+") {
//         result = a + b;
//     } else if (op == "-") {
//         result = a - b;
//     } else if (op == "*") {
//         result = a * b;
//     } else if (op == "/") {
//         if (b == 0) {
//             result = "Помилка: ділення на нуль";
//         } else {
//             result = a / b;
//         }
//     } else {
//         result = "Невідома операція";
//     }

//     alert("Результат: " + result);

//     let answer = prompt("Хочеш ще один приклад? так/ні");
//     if (answer != "так") {
//         again = false;
//     }
// }

// 7 завдання
// let numStr = prompt("Введи число:");
// let b = parseInt(prompt("На скільки цифр змістити?"));
// let res = "";
// let length = numStr.length;

// while (b >= length) {
//     b -= length;
// }

// for (let i = b; i < length; i++) {
//     res += numStr[i];
// }

// for (let i = 0; i < b; i++) {
//     res += numStr[i];
// }

// console.log("Результат зсуву: " + res);

// 8 завдання
// let days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П’ятниця", "Субота", "Неділя"];
// let i = 0;
// let answer = "так"; 

// while (answer === "так") {
//     alert(days[i]);
//     answer = prompt("Бажаєте побачити наступний день? Введіть 'так' або 'ні'");
//     i = (i + 1) % days.length;
// }

// 9 завдання
// for (let i = 2; i <= 9; i++) {
//     console.log("Таблиця множення для " + i + ":");
    
//     console.log(i + " x 1 = " + (i * 1));
//     console.log(i + " x 2 = " + (i * 2));
//     console.log(i + " x 3 = " + (i * 3));
//     console.log(i + " x 4 = " + (i * 4));
//     console.log(i + " x 5 = " + (i * 5));
//     console.log(i + " x 6 = " + (i * 6));
//     console.log(i + " x 7 = " + (i * 7));
//     console.log(i + " x 8 = " + (i * 8));
//     console.log(i + " x 9 = " + (i * 9));
//     console.log(i + " x 10 = " + (i * 10));
    
//     console.log("");
// }



