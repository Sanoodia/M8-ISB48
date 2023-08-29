// {name: string, age: number}  anonymus object

// type MyObject = {name: string, age: number} // alias object

// interface MyObject {name: string, age: number} // interface


// let name: string = 'sanoodia';
// let age: number = 23;

// let myObject = {
//     name: 'sanoodia',
//     age: 23
// }



// anonymus Object

// let a: {name:string, age:number} = {name: 'sanoodia', age: 23}
// let b: {name:string, age:number} =  {name: 'ali', age: 12}

// let c: {name: string, age: number, gender: string} =  {name: 'ali', age: 12, gender: "M"}

// let d = {name: 'ali', gender: "M"}
// let e = {name: 'ali', age: "12"}

// const show = (obj: {name:string, age:number}) => { //anonymus object ==== requirement all [keys and type] must in incomming objects
//     console.log(obj)
// }

// show(a);
// show(b);
// show(c);
// show(d) not acceptable bcz missing age
// show(e) not acceptable bcz of string

//------------------------------------------------------



type LessObject = {name: string, age: number} // alias object
type MoreObject = {name: string, age: number, gender: string} //alis object

// exact and exact + max
// exact num keys and type + extra acceptable

const showTypeObject = (obj: LessObject) => { //anonymus object ==== requirement all [keys and type] must in incomming objects
    console.log(obj)
}

// let a: {name:string, age:number} = {name: 'sanoodia', age: 23}
// let b2: {names: string, age: number, gender: string} =  {names: 'ali', age: 12, gender: 'M'}

let Obj1:LessObject  = {name: 'sanoodia', age: 23}
let Obj2:LessObject  = {name: 'ali', age: 23}
let Obj3:LessObject  = {name: 'john', age: 23} // fresh obj

let obj4: MoreObject = {name: 'noa', age: 14, gender: 'M'} //fresh obj

// showTypeObject(Obj1)
// showTypeObject(Obj2)
// showTypeObject(Obj3)
// showTypeObject(obj4)
// 2 = 3
// More = More


Obj3 = obj4 // exact or exact + max acceptable   stail
// {name: 'noa', age: 14, gender: 'M'}
console.log(Obj3)


Obj3 = {name: 'asas', age : 34} 
// {name: 'noa', age: 14, gender: 'M'} MoreObject   =      {name: 'john', age: 23} LessObject
// obj4 = Obj3 gender is missing not acceptable




// obj4 = Obj3  // not exact 


// Rules

// fresh                                       strail
// exact num keys and type                     exact num keys and type + extra acceptable

showTypeObject(obj4)