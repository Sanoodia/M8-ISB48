"use strict";
// Modeling Online Store Entities You're building a TypeScript application for an online store. Define the following types and interfaces:
Object.defineProperty(exports, "__esModule", { value: true });
let user1Product = [
    {
        id: 1234,
        name: 'chips',
        price: 100,
        category: "food"
    },
    {
        id: 1234,
        name: "beans",
        price: 200,
        category: "food"
    },
    {
        id: 1234,
        name: "juice",
        price: 300,
        category: "food"
    }
];
let user2Product = [
    {
        id: 1234,
        name: 'rice',
        price: 100,
        category: "food"
    },
    {
        id: 1234,
        name: "oil",
        price: 200,
        category: "food"
    },
    {
        id: 1234,
        name: "tea",
        price: 300,
        category: "food"
    },
    {
        id: 1234,
        name: "soup",
        price: 300,
        category: "toiletries"
    }
];
let user1Cart = { products: user1Product };
let user2Cart = { products: user2Product };
let user1Info = {
    id: 123,
    name: "John",
    email: "my.mail@com"
};
let user2Info = {
    id: 234,
    name: "ali",
    email: "my.mail@com"
};
let orders = [
    {
        customer: user1Info,
        cart: user1Cart
    },
    {
        customer: user2Info,
        cart: user2Cart
    }
];
// const calculateAllPrices = (userCart: Cart ) =>{
//     // userCart = { products: productArry}
//     let allProduct = userCart.products
//     let totalPrice = 0;
//     for(let i=0; i<allProduct.length; i++){
//        console.log(allProduct[i]) 
//        totalPrice = totalPrice + allProduct[i].price //600
//     }
//     return totalPrice;
// }
// let totalPrice = calculateAllPrices(mycart)
// console.log(totalPrice)
const makeBillForEachUser = (orders) => {
    for (let orderIndex = 0; orderIndex < orders.length; orderIndex++) {
        let customer = orders[orderIndex].customer;
        let userCart = orders[orderIndex].cart;
        let products = userCart.products; // orders[orderIndex].cart.products
        console.log(products);
        let totalPrice = 0;
        for (let i = 0; i < products.length; i++) {
            totalPrice = products[i].price + totalPrice;
        }
        console.log(`${customer.name} your total bill is = ${totalPrice}`);
    }
};
makeBillForEachUser(orders);
