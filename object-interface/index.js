// {name: string, age: number}  anonymus object
// exact and exact + max
const showTypeObject = (obj) => {
    console.log(obj);
};
// let a: {name:string, age:number} = {name: 'sanoodia', age: 23}
// let b2: {names: string, age: number, gender: string} =  {names: 'ali', age: 12, gender: 'M'}
let Obj1 = { name: 'sanoodia', age: 23 };
let Obj2 = { name: 'ali', age: 23 };
let Obj3 = { name: 'john', age: 23 };
let obj4 = { name: 'noa', age: 14, gender: 'M' };
// showTypeObject(Obj1)
// showTypeObject(Obj2)
// showTypeObject(Obj3)
// showTypeObject(obj4)
// 2 = 3
// More = More
Obj3 = obj4; // exact or exact + max
console.log(Obj3);
export {};
// obj4 = Obj3  // not exact 
