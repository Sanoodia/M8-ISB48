// import {add, divide, minus, multiply, calculation} from './helperFunction.js';
import { calculation } from './helperFunction.js';
import chalk from 'chalk';
import promptSync from 'prompt-sync';
const prompt = promptSync();
let num1 = prompt('type number 1  ');
num1 = parseInt(num1);
let num2 = prompt('type number 2  ');
num2 = parseInt(num2);
let operator = prompt('type operator  ');
// let result  = add(num1, num2);
// console.log(`sum is: ${result}`);
// let division = divide(num1, num2);
// console.log(`division is : ${division}`);
// let multiplication = multiply(num1, num2);
// console.log(`multiply is: ${multiplication}`);
// let substract = minus(num1, num2);
// console.log(`substract is: ${substract}`);
let result = calculation(num1, num2, operator);
console.log(chalk.red(`Answer is: ${result}`));
