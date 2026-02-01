// 1
let age = parseFloat(prompt("Введіть ваш вік:"));
if (age >= 0 && age < 12) {
  alert("Дитина");
} else if (age < 18) {
  alert("Підліток");
} else if (age < 60) {
  alert("Дорослий");
} else {
  alert("Пенсіонер");
}

// 2
let num = prompt("Введіть число від 0 до 9:");
let symbol;
if (num === "1") {
  symbol = "!";
} else if (num === "2") {
  symbol = "@";
} else if (num === "3") {
  symbol = "#";
} else if (num === "4") {
  symbol = "$";
} else if (num === "5") {
  symbol = "%";
} else if (num === "6") {
  symbol = "^";
} else if (num === "7") {
  symbol = "&";
} else if (num === "8") {
  symbol = "*";
} else if (num === "9") {
  symbol = "(";
} else if (num === "0") {
  symbol = ")";
}
alert(symbol);

// 3
let number = prompt("Введіть тризначне число:");
let a = number[0];
let b = number[1];
let c = number[2];
if (a === b || a === c || b === c) {
  alert("Є однакові цифри");
} else {
  alert("Однакових цифр немає");
}

// 4
let year = parseFloat(prompt("Введіть рік:"));
if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  alert("Високосний рік");
} else {
  alert("Не високосний рік");
}

// 5
let fiveNum = prompt("Введіть п’ятизначне число:");
let rev = fiveNum.split("").reverse().join("");
if (fiveNum === rev) {
  alert("Це паліндром");
} else {
  alert("Це не паліндром");
}

// 6
let usd = parseFloat(prompt("Введіть суму в USD:"));
let currency = prompt("Виберіть валюту: EUR, UAN або AZN");
let result;
if (currency === "EUR") {
  result = usd * 0.92;
} else if (currency === "UAN") {
  result = usd * 38;
} else if (currency === "AZN") {
  result = usd * 1.7;
}
alert(result);

// 7
let sum = parseFloat(prompt("Введіть суму покупки:"));
let discount = 0;
if (sum >= 500) {
  discount = 0.07;
} else if (sum >= 300) {
  discount = 0.05;
} else if (sum >= 200) {
  discount = 0.03;
}
let total = sum - sum * discount;
alert("До сплати: " + total);
