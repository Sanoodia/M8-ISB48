"use strict";
//operator 
//uni operator ...asssign value to variable
//binary operator  valid for two operand
//ternary operator valid for three operand
// let num1:number = 0;
// let num2: number = 30;
// let userName = 'eeeee';
// const tellMeType= (variable: any) => {
//     return typeof variable // 'number'
// }
// if(tellMeType(userName) == 'string'){
//     console.log('you are validated')
// }else{
//     console.log('please enter user name in alphabets')
// }
let num1 = 10;
let num2 = 20;
const sum = (a, b) => {
    return a + b;
};
const showResult = () => {
    if (result > 100) {
        console.log('pass');
    }
    else {
        console.log('fail');
    }
};
let result = sum(num1, num2);
showResult();
