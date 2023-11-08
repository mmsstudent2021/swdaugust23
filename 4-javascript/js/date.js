// console.dir(Date.now())

// const date = new Date();
// console.dir(date)

// console.log(date.toDateString())
// console.log(date.toTimeString());


// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// jan 1 1970 -> millisecond
// console.log(date.getTime());
// console.log(Date.now());


// const date = new Date("1994-7-22");
// const date = new Date(1994,6,22);
// const date = new Date(2050,8,15);
// console.log(date);
// console.log(date.toDateString());
// console.log(date.toTimeString());

// console.log(date.getFullYear());
// console.log(date.getMonth());

const date = new Date();

// next 300 hr ?
// date.setHours(date.getHours() + 300)

// next 4 month
// date.setMonth(date.getMonth() + 4)

// 50/2 = 25 day
date.setDate(date.getDate() + 25)

console.log(date);



