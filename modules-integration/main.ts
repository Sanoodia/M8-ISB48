// import {add, divide, minus, multiply, calculation} from './helperFunction.js';
import { calculation, promptUserName} from './helperFunction.js';
import chalk from 'chalk';
import promptSync from 'prompt-sync';
import inquirer from 'inquirer';

const prompt = promptSync();



// const user = await inquirer.prompt([
//     {
//     type: 'string',
//     name: 'firstName',
//     message: 'Write your firstName:'
//     },
//     {
//         type: 'input',
//         name: 'lastName',
//         message: 'Write your lastName:'
//     }
// ])

// console.log(user.firstName)
// console.log(user['firstName'])

// console.log(user.lastName)

// let num1: any = prompt('type number 1  ');
// num1 = parseInt(num1);

// let num2: any = prompt('type number 2  ');
// num2 = parseInt(num2);

// let operator: any = prompt('type operator  ');
// let result  = add(num1, num2);
// console.log(`sum is: ${result}`);


// let division = divide(num1, num2);
// console.log(`division is : ${division}`);

// let multiplication = multiply(num1, num2);
// console.log(`multiply is: ${multiplication}`);

// let substract = minus(num1, num2);
// console.log(`substract is: ${substract}`);

// let result  = calculation(num1, num2, operator)

// console.log(chalk.red(`Answer is: ${result}`));


// let result = await promptUserName()

// let answer:string[] = ['4','5','8']
// let a: string = result.Question1
// if(a === '4'){
//     console.log('correct');
// }