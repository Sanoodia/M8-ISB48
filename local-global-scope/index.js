"use strict";
// uni used on one variable , =
// binary used on two variables +, -, / ,*, ==, <=, >=, <, >, !==
// ternry conditional shortform of if else
// gates ||, && 
// let a: number = 30; //uni
// let b: number = 20; //uni
// let c: number = 20; //uni
// (a !== b) ? console.log("both are diff") : console.log("both are same")
//false    //true  --- false
//(false  &&  false)  ||  false
// false || false
//false
// if( ((a < b) &&  (a < c)) || (b !== c )){
//     console.log("a is smallest")
// }
//arrays
let users = ['ali']; //0
users.push('ahmed'); //1
users.push('khan'); //2
users.push('doe'); //3
users.push('john'); //4
users.push('john1'); //5
users.push('john2'); //6
// console.log(users[2])
// i = i+30  , i+=30
// i++ just for one addition
// for(let i=0; i < users.length; i++){
//     console.log(`hello ${users[i]}`) 
// }
//0,3,6
// for(let i=0; i < users.length; i+=3){
//     console.log(`hello ${users[i]}`) 
// }
// let indexOfA:number = users[6].indexOf('a')
// console.log(indexOfA)
// for(let i=0; i < users.length; i+=1){
//     if(users[i].indexOf('1') == -1){
//         console.log(`not exists hello ${users[i]}`)  
//     }else{
//         console.log(`hello world ${users[i]}`)  
//     }
// }
// for(let i=0; i < users.length; i+=1){
//    if(i == 3){
//     break;
//    }
//    else{
//     console.log(`hello world ${users[i]}`)
//    }
// }
let arr = [1, 2, 3, -1, 4, 5, 6, 8, 10, -2];
let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        newArr.push(arr[i]);
    }
}
console.log(newArr);
