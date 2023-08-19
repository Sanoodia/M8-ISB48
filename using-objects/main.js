import inquirer from 'inquirer';
// let student1 = {
//     name: 'ali ali',
//     className: '1',
//     age: 10,
//     section: 'morning'
// }
// let student2 = {
//     name: 'John jhon',
//     className: '2',
//     age: 8,
//     section: 'evening'
// }
// console.log(student2)
// console.log(student1)
// {studentName : 'asssa'}
// const userName: string = 'aaaa'
//////////////////////////////
// const student1: Student
//   = await inquirer.prompt([
//     {
//         type: 'string',
//         name: 'studentName',
//         message: 'Write your name?'
//     },
//     {
//         type: 'string',
//         name: 'className',
//         message: 'Write your class name?'
//     },
//     {
//         type: 'number',
//         name: 'age',
//         message: 'Write your age?'
//     },
//     {
//         type: 'string',
//         name: 'session',
//         message: 'Write your section?'
//     }
// ])
// console.log(student1)
// const student2: Student
//   = await inquirer.prompt([
//     {
//         type: 'string',
//         name: 'studentName',
//         message: 'Write your name?'
//     },
//     {
//         type: 'string',
//         name: 'className',
//         message: 'Write your class name?'
//     },
//     {
//         type: 'number',
//         name: 'age',
//         message: 'Write your age?'
//     },
//     {
//         type: 'string',
//         name: 'session',
//         message: 'Write your section?'
//     }
// ])
// console.log(student2)
////////////////////////////////
const car1 = await inquirer.prompt([
    {
        type: 'string',
        name: 'name',
        message: 'Write car name ======'
    },
    {
        type: 'number',
        name: 'modal',
        message: 'Write year modal ==== '
    },
    {
        type: 'string',
        name: 'color',
        message: 'Write color ==== '
    },
    {
        type: 'number',
        name: 'price',
        message: 'Write price ==== '
    }
]);
console.log(car1);
