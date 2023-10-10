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

function roomArea(width, breadth) {
  return width * breadth + " Sqft";
}

// console.log(roomArea(18, 60));
// console.log(roomArea(17, 70));
// console.log(roomArea(17, 50));

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

let apple = 500;
let orange = 700;
let total = 0;

function buyApple(quantity = 0) {
  const cost = apple * quantity;
  total += cost;
  return `Apple * ${quantity} = ${cost} mmk`;
}

function buyOrange(quantity = 0) {
  const cost = orange * quantity;
  total += cost;
  return `Orange * ${quantity} = ${cost} mmk`;
}

function costTotal() {
    return `Cost Total = ${total}`;
}

function calcTax(totalAmount,percentage=5){
    return totalAmount * percentage / 100;
}

function tax(percentage = 5){
    return `Tax = ${ calcTax(total,percentage) } mmk`;
}

function netTotal(){
    return `Net Total = ${calcTax(total) + total} mmk`;
}

console.log(buyApple(4));
console.log(buyOrange(3));
console.log(costTotal());
console.log(tax());
console.log(netTotal());
