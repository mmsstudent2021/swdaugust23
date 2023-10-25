// let x = 5;
// let y = 10;

// console.log(x);

// x = 7;

// console.log(x);

// const x = [];
// const y = {};

// const z = x;

// console.log(z);

// x[0] = "a";
// x[1] = "b";

// console.log(z);

// console.log(object);

// let x = 5;
// let y = 5;

// console.log(x == y);

// let a = [];
// let b = [];
// console.log(a == b);

// const a = 5;
// const b = "5";

// console.log(a == b);
// console.log(a === b);

// console.log(a + b)

// let pocketMoney = 15000;

// pocketMoney > 5000 ? console.log("watch movie") : console.log("go to school");

// let e;

// console.log("abc" ? true : false);
// console.log("" ? true : false);
// console.log("   " ? true : false);
// console.log(null ? true : false);
// console.log(undefined ? true : false);
// console.log([] ? true : false);
// console.log({} ? true : false);
// console.log(e ? true : false);
// console.log(0 ? true : false);
// console.log("0" ? true : false);

// function run(){
//     console.log("hello");
// }

// run()
// run()
// run()

//if else

// if(false){
//     console.log("I'm true");
// }
// else {
//     console.log("I'm false");
// }

// const wakeUpTime = 8;

// if(wakeUpTime >= 8 ){
//     console.log("ကြိန်လုံးနဲ့ လာပါပြီ ...");
// }else{
//     console.log("အေးဆေးပဲ");
// }

// const pocketMoney = 1000;
// const busFee = 300;

// if(pocketMoney >= busFee * 2){
//     console.log("Go to school with bus");
// }else{
//     console.log("Go to school by walk");
// }

// const classStartTime = 10;
// const currentTime = 11;

// if(currentTime > classStartTime) {
//     console.log("teaching start");
// }else{
//     console.log("waiting students");
// }

// const mark = 90;

// if(mark >= 80){
//     console.log("distinction");
// }else if(mark >= 40){
//     console.log("passed");
// }else if(mark < 40){
//     console.log("fail");
// }

function result(mark) {
  if (mark >= 80) {
    return "distinction";
  } else if (mark >= 40) {
    return "passed";
  } else if (mark < 40) {
    return "fail";
  }
}

// console.log(result(50));
// console.log(result(30));
// console.log(result(70));
// console.log(result(85));

// function requestPocketMoney(amount, busFee = 300) {
//   if (amount > busFee * 2) {
//     return "It is enough to go to school with Bus";
//   }
//   return "by walk";
// }

// console.log(requestPocketMoney(500));
// console.log(requestPocketMoney(1500));

// function canIPassed(examMark, viperMark) {
//   if (examMark >= 60 && viperMark >= 60) {
//     return "U can join our University";
//   }
//   return "U can't join";
// }

// console.log(canIPassed(75,30));
// console.log(canIPassed(75,60));
// console.log(canIPassed(67,76));

// function canIVote(nrcType, age) {
//   if (nrcType === "N" && age >= 18) {
//     return "U can vote";
//   }
//   return "U can't vote";
// }

// console.log(canIVote("N",3));
// console.log(canIVote("N",13));
// console.log(canIVote("N",25));
// console.log(canIVote("M",25));
// console.log(canIVote("F",25));

function bus(no){
    if(no === 65 || no === 20){
        return "U will reach MMS IT Kyauk Myaung"
    }
    return "U will not reach"
}

// console.log(bus(65));
// console.log(bus(55));
// console.log(bus(20));
// console.log(bus(30));

// console.log(!!!true);