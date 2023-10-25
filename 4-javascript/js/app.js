console.log("App JS");

// const myName = "hein htet zan";
// let age = 29;
// console.log(`My name is ${myName} and ${age} years old.`);

// let x = 5;
// console.log(x);

// particular task

// function triangle() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   return "triangle function";
//   console.log("I'm here");
// }

// console.log(triangle());

// triangle()
// triangle()
// triangle()
// triangle()
// triangle()

// function run(x = 0, y = 0) {
//     // console.log(x);
//     // console.log(y);
//   return x + y;
// }

// console.log(run(5,10));
// console.log(run(10,20));
// console.log(run(5,5));
// console.log(run());

const records = [];
let recordIndex = 0;
// store

function roomArea(width, breadth) {
  const result = width * breadth + " Sqft";
  records[recordIndex++] = {
    width: width + "ft",
    breadth: breadth + "ft",
    result,
  };
  return result;
}

// console.log(roomArea(18, 60));
// console.log(roomArea(17, 70));
// console.log(roomArea(17, 50));
// console.log(roomArea(25, 50));

// console.table(records);

// usd (exchange rate) to mmk
let usd = 2100;
let sgd = 1534;
let eur = 2210;

function fromUsdToMmk(amount = 0) {
  return amount * usd + " mmk";
}

function fromSgdToMmk(amount = 0) {
  return amount * sgd + " mmk";
}

function fromEurToMmk(amount = 0) {
  return amount * eur + " mmk";
}

// console.log(fromUsdToMmk(300));
// console.log(fromSgdToMmk(250));
// console.log(fromEurToMmk(450));
// console.log(fromEurToMmk());

// 500000 mmk to usd ?

function fromMmkToUsd(amount = 0) {
  return amount / usd + " USD";
}

function fromMmkToSgd(amount = 0) {
  return amount / sgd + " SGD";
}

function fromMmkToEur(amount = 0) {
  return amount / eur + " EUR";
}

// console.log(fromMmkToUsd(500000));
// console.log(fromMmkToSgd(500000));
// console.log(fromMmkToEur(500000));

// let apple = 500;
// let orange = 700;
// let total = 0;

// function buyApple(quantity = 0) {
//   const cost = apple * quantity;
//   total += cost;
//   return `Apple * ${quantity} = ${cost} mmk`;
// }

// function buyOrange(quantity = 0) {
//   const cost = orange * quantity;
//   total += cost;
//   return `Orange * ${quantity} = ${cost} mmk`;
// }

// function costTotal() {
//     return `Cost Total = ${total}`;
// }

function calcTax(totalAmount, percentage = 5) {
  return (totalAmount * percentage) / 100;
}

// function tax(percentage = 5){
//     return `Tax = ${ calcTax(total,percentage) } mmk`;
// }

// function netTotal(){
//     return `Net Total = ${calcTax(total) + total} mmk`;
// }

// console.log(buyApple(4));
// console.log(buyOrange(3));
// console.log(costTotal());
// console.log(tax());
// console.log(netTotal());

// JavaScript Array

// const shop = ["apple", "orange", "mango"];
// console.log(typeof shop);
// console.log(shop);

// shop[0] = "banana"
// shop[3] = "lime"
// shop[4] = "lemon"

// console.log(shop[0]); // access element
// console.log(shop[1]);
// console.log(shop[2]);
// console.log(shop[4]);

// console.log(shop);

// const arr = [];
// // arr = 10;

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";
// arr[3] = "d";

// arr[7] = "e"

// console.log(arr);
// console.log(arr.length);

// const y = [];
// y = 10

// const mySelf = ["hein htet zan",28,"hlaing","developer",false]

const mySelf = {
  name: "hein htet zan",
  age: 29,
  township: "hlaing",
  job: "developer",
  relationshipStatus: false,
};

// console.log(mySelf);
// console.log(mySelf.name);
// console.log(mySelf.age);

// console.log(
//   `My name is ${mySelf.name} and ${mySelf.age} years old ${mySelf.job} from ${mySelf.township}`
// );

// mySelf.name = "Ko Htet";
// mySelf.netWorth = ["bahan home","hledan condo","MMS IT"]

// console.log(mySelf.name);
// console.log(mySelf);

// const obj = {};

// obj.a = "x";
// obj.b = "y";
// obj.c = "z"

// console.log(obj);

// console.log( []);
// console.log( {});

// const name = "mg mg";
// let age = 15;
// let township = "kyauk myaung";
// let pocketMoney = 200;
// let orangePrice = 50;

// // pocketMoney = pocketMoney - orangePrice;
// pocketMoney -= orangePrice

// console.log(pocketMoney);

// let bag = ["mm book","eng book","bio book"]
// let canMgMgFriSmoke = true;
// let canMgMgSmoke = false;

// // const info = {
// //   name : "mg mg",
// //   age : 15,
// //   township : "kyauk myaung",
// //   pocketMoney : 200,
// //   isHeSmoke : false
// // }

// // console.log(info);

// const mgMgInfo = {
//   name ,
//   age,
//   township,
//   pocketMoney,
//   isHeSmoke : canMgMgFriSmoke
// }

// const kyawInfo = {
//   name : "kyaw kyaw",
//   age : 18,
//   township : "hlaing",
//   pocketMoney : 1500,
//   isHeSmoke : true
// }

// const suInfo = {
//   name : "su su",
//   age : 17,
//   township : "sanchaung",
//   pocketMoney : 2000,
//   isHeSmoke : true
// }

// console.log(mgMgInfo,suInfo,kyawInfo);

// const students = [mgMgInfo,kyawInfo,suInfo];
// console.log(students);
// console.table(students);

const rates = {
  usd: 2100,
  sgd: 1530,
  eur: 2210,
};

// 200usd to ?mmk
// 450sgd to ?mmk
// 15eur to ?mmk

function toMmk(amount, currency) {
  const exchangeRate = rates[currency];
  const result = amount * exchangeRate;
  return result + " mmk";
}

// console.log(toMmk(200,'usd'));
// console.log(toMmk(450,'sgd'));
// console.log(toMmk(15,'eur'));

// 500000 mmk to ? usd
// 700000 mmk to ? sgd
// 30000 mmk to ? eur

function toCurrency(mmkAmount, currency) {
  const exchangeRate = rates[currency];
  const result = mmkAmount / exchangeRate;
  // return result + " " + currency;
  return `${result} ${currency}`;
}

// console.log(toCurrency(500000,'usd'));
// console.log(toCurrency(700000,'sgd'));
// console.log(toCurrency(30000,'eur'));

// 500 usd to ? sgd
// 100000 mmk to ? eur
// 30 eur to ? sgd
// 100 sgd to ? eur
// any currency to any currency
// record keeping

// const fruits = [
//   {
//     id : 1,
//     name : "apple",
//     price : 500
//   }
// ]

// const fruits = {
//   apple: 500,
//   orange: 700,
//   mango: 1000,
//   banana: 200,
// };

// const transitions = [];
// let transitionIndex = 0;
// let total = 0;

// // cost = item price * quantity
// function buy(item, quantity) {
//   const price = fruits[item];
//   const cost = price * quantity;
//   total += cost;
//   transitions[transitionIndex++] = {
//     item,
//     price,
//     quantity,
//     cost,
//   };
//   return cost;
// }

// console.log(buy("apple",5));
// console.log(buy("mango",2));
// console.log(buy("banana",2));
// console.log(buy("orange",3));

// console.table(transitions);
// console.log("total ", total);
// console.log("tax ", calcTax(total));
// console.log("Net Total ", calcTax(total) + total);

const obj = {
  // properties (information)
  a: "aaa",
  b: "bbb",
  c: "ccc",

  // method (behavior)
  // es 5 and early
  d: function () {
    return "this is d";
  },
  // es6 and above
  e() {
    return "this is e";
  },
};

// console.log(obj);
// console.log(obj.a);
// console.log(obj.b);
// console.log(obj.d());
// console.log(obj.e());

const myObj = {
  //properties
  name: "hein htet zan",
  age: 29,
  township: "hlaing",
  job: "developer",

  // methods
  teach() {
    return `${this.name} can teach web development`;
  },
  eat() {
    return `${this.name} can eat everything`;
  },
};

// // property access
// console.log(myObj.name);
// console.log(myObj.age);
// console.log(myObj.job);

// // property overwrite
// myObj.name = "lee min ho"
// console.log(myObj);

// // method invoke
// console.log(myObj.teach());
// console.log(myObj.eat());

// function run(x,y){
//   return x + y;
// }

// const run = function(x,y){
//   return x + y;
// }

// console.log(run(3,5))

// (function(){
//   console.log("I'm IIFE");
// })()

// console.log(
//   ` something ${(function () {
//     console.log("IIFE");
//     return "IIFE";
//   })()} `
// );

// function run() {
//   let x = 5;
//   console.log(x);
// }

// run()

// let x = 5;
// {
//   console.log(x);
// }

// console.log(x);

// function run(){
//   console.log(x);
// }

// run()

// function run() {}

// console.log(x());

// const x = 5;
// console.log(x);

// console.log(y());

// function y(){
//   return "Y"
// }

// console.log(z());

// const z = function(){
//   return "z";
// }

// 5 triangle

// for( let i = 1 ; i <= 5 ; i++){
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
// }

// 1 to 10
// 1,3,5,7,9

// for(let i = 1;i<=10;i++){
//   console.log(i);
// }

// for(let i=1;i<=10;i+=2){
//   console.log(i);
// }

//1 to 100
// 10,20,30,40,...,100

// onetime before {}
// condition {}
// every time after {}

// 1 to 5

// for (
//   let i = (function () {
//     console.log("st 1");
//     return 1;
//   })();
//   (function () {
//     let c = i <= 5;
//     console.log(c, "st 2");
//     return c;
//   })();
//   (function () {
//     console.log("st 3");
//     return i++;
//   })()
// ) {
//   console.log(i,"code block");
// }

// for(let i=10;i<=100;i+=10){
//   console.log(i);
// }

// stop at 5 (break)
// skip at 5 (continue)

// for(let i=1;i<=10;i++){
//   // console.log("code block",i);

//   // if(i === 5) {
//   //   break;
//   // }

//   if(i == 5){
//     continue
//   }

//   console.log("code block",i);

// }

const fruits = ["apple", "banana", "mango", "lime", "lemon", "orange"];
console.log(fruits);

const chars = {
  a : "char a",
  b : "char b",
  c : "char c",
  d : "char d"
}

console.log(chars);

for( let key in chars){
  console.log(key,chars[key]);
}

// for(let i=0;i<fruits.length;i++){
//   console.log(i, fruits[i]);
// }

// console.log(i);

// for(let fruit of fruits){
//   console.log(fruit);
// }

// for (let key in fruits) {
//   console.log(key,fruits[key]);
// }
