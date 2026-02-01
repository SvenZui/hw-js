// 1 завдання
function f1(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}
console.log(f1(3, 5));
console.log(f1(7, 2));
console.log(f1(4, 4));

// 2 завдання
function f2(a) {
    var b = 1;
    for (var i = 1; i <= a; i = i + 1) {
        b = b * i;
    }
    return b;
}
console.log(f2(5));

// 3 завдання
function f3(a, b, c) {
    return a * 100 + b * 10 + c;
}
console.log(f3(1, 4, 9));

// 4 завдання
function f4(a, b) {
    if (b === undefined) b = a;
    return a * b;
}
console.log(f4(5, 3));
console.log(f4(4));

// 5 завдання
function f5(a) {
    var b = 0;
    for (var i = 1; i < a; i = i + 1) {
        if (a % i === 0) b = b + i;
    }
    if (b === a) return true;
    return false;
}
console.log(f5(6));
console.log(f5(28));
console.log(f5(10));

// 6 завдання
function f6(a, b) {
    var c = "";
    for (var i = a; i <= b; i = i + 1) {
        if (f5(i)) c = c + i + " ";
    }
    return c;
}
console.log(f6(1, 30));

// 7 завдання
function f7(a, b, c) {
    if (b === undefined) b = 0;
    if (c === undefined) c = 0;
    var d = b;
    var e = c;
    if (b < 10) d = "0" + b;
    if (c < 10) e = "0" + c;
    return a + ":" + d + ":" + e;
}
console.log(f7(5, 7, 9));
console.log(f7(3));

// 8 завдання
function f8(a, b, c) {
    if (b === undefined) b = 0;
    if (c === undefined) c = 0;
    return a * 3600 + b * 60 + c;
}
console.log(f8(1, 1, 1));

// 9 завдання
function f9(a) {
    var b = Math.floor(a / 3600);
    var c = Math.floor((a - b * 3600) / 60);
    var d = a - b * 3600 - c * 60;
    var e = c;
    var f = d;
    if (c < 10) e = "0" + c;
    if (d < 10) f = "0" + d;
    return b + ":" + e + ":" + f;
}
console.log(f9(3661));
