// ТЕОРІЯ
// alert("Hello World!")
// function add(a=2,b=3){
//     // body
//     return a+b
// }
// console.log(add(2,4));

// let name = prompt("Enter your name:");
// function print(a){
//     return console.log(a)
// }

// print("dsd "+ name);

// const add=function(a,b){
//     console.log(a+b);
// }

// add(2,3)

// ПЕРЕВІРКА НА ПАРНІСТЬ
// const even = function(x){
//     if(x%2===0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(even(4))
// console.log(even(5))


//УПРОЩЕНА ВЕРСІЯ
// const even = function(x){
//     return x%2==0
// }

// console.log(even(4))
// console.log(even(5))


// => === function ------- заміна функції
const even = x=> x%2===0;
// console.log(even(4));
// console.log(even(5));

function filterArr(arr,callBack){
    let filterArray=[];
    for(const el of arr){
        if(callBack(el)){
            filterArray.push(el);
        }
    }
    return filterArray;
}

let arr=[1,2,3,4,5,6,7,8,9,0,32,2]
filterArr(arr,even);
console.log(filterArr(arr,even));
