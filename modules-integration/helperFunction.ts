// add
// export const add = (number1:number, number2: number): number => {
//     let result = number1 + number2;
//     return result;
// }


// // minu
// export const minus = (number1:number, number2: number) => {
//     let result = number1 - number2;
//     return result;
// }

// // divide
// export const divide = (number1:number, number2: number) => {
//     let result = number1 / number2;
//     return result;
// }

// // multiply

// export const multiply = (number1:number, number2: number) => {
//     let result = number1 * number2;
//     return result;
// }
// +-/*
export const calculation = (num1:number, num2: number, operator:string): any =>{
   let result:any = 0;
//    if(operator == "+"  || operator == "add" || operator == "plus" || operator == "sum"){
//         result = num1 + num2;
//    }else if(operator == "-" || operator == "minus"){
//         result = num1 - num2;
//    }else if(operator == "*" || operator == "multiply"){
//     result = num1 * num2;
//    }else if(operator == "/" || operator == "divide"){
//     result = num1 / num2;
//    }else{
//      result = 'error'; 
//    }

   switch(operator){ 
        case "+":
        case "add":
        case "plus":
        case "sum":
            result = num1 + num2;
            break;
        case "-":
        case "minus":
            result = num1 - num2;
            break;
        case "*":
        case "multiply":
            result = num1 * num2;
            break;
        case "/":
        case "divide":
            result = num1 / num2;
            break;
        default:
            result = 'error'; 
            break;
   }

   return result
}