console.log("JS OOP");

// class vs object
// classes - template of obj
// Human - name, dob, gender
// st1 - name : mgmg, bod : 1995, gender : male

// console.log({});
// this

// const obj = {
//     a : "aaa",
//     b:"bbb",
//     c : "ccc",
//     x(){
//         return this.a;
//     }
// }

class Person {
  //   name;
  //   dob;
  //   gender;

  constructor(inputName, inputDob, inputGender) {
    // data initialize
    this.name = inputName;
    this.dob = inputDob;
    this.gender = inputGender;
    this.namePrefix = this.gender === "male" ? "Mg" : "Ma";
    this.age = 2023 - this.dob;
  }

  intro() {
    // my name is hein htet zan and i was born in 1994
    return `My name is ${this.namePrefix} ${this.name} and I was born in ${this.dob}`;
  }

  eat() {
    return "Person can eat";
  }

  sleep() {
    return "Person can sleep";
  }
}

class Student extends Person {
  constructor(inputName, inputDob, inputGender, inputMajor, inputSubject) {
    super(inputName, inputDob, inputGender);
    this.major = inputMajor;
    this.subjects = inputSubject;
  }
}

// const st1 = new Student("Zaw Zaw", 1996, "male", "web", ["html", "css", "js"]);
// console.log(st1);

// const st2 = new Student("Mya Mya", 2000, "female", "android", [
//   "java",
//   "kotlin",
// ]);

class Monitor extends Student {
  constructor(
    inputName,
    inputDob,
    inputGender,
    inputMajor,
    inputSubject,
    roomNo
  ) {
    super(inputName, inputDob, inputGender, inputMajor, inputSubject);
    this.roomNo = roomNo;
  }
}

const m1 = new Monitor("Aung Aung", "1999-3-20", "male", "web", [], "SWDAUG23");
// console.log(m1);

// const p1 = new Person("Kyaw Kyaw", "1995", "male");
// console.log(p1);
// console.log(p1.intro());

// const p2 = new Person("Su Su", "2000", "female");
// console.log(p2);
// console.log(p2.intro());

// const p3 = new Person("Shin Shin", "1999", "female");
// console.log(p3.intro());

// class => obj (instantiate) instance ဆောက်
// method

// console.log(Person.eat());

// const p1 = new Person;

// p1.name = "kyaw kyaw"
// p1.dob = "1995-8-10";
// p1.gender = "male"
// console.log(p1);
// console.log(p1.eat());
// console.log(p1.sleep());

// const p2 = new Person;
// p2.name = "su su"
// p2.dob = "2000-2-15"
// p2.gender = "female"
// console.log(p2);

// console.log(Person);

// 00P - access modifier

// console.log(m1.name);

// class Sample {
//   a = "aaa";
//   #x = "xxx";

//   b(){
//     return "b method"
//   }

//   #y(){
//     return "y method"
//   }
// }

// const sample = new Sample;
// console.log(sample);
// console.log(sample.a);
// console.log(sample.#x);
// console.log(sample.b());
// console.log(sample.#y());

class BankAccount {
  #balance = 0;
  #transition = [];
  #transitionIndex = 0;

  // getter, setter

  checkTransition() {
    return this.#transition;
  }

  checkBalance() {
    return this.#balance;
  }

  deposit(amount) {
    this.#transition[this.#transitionIndex++] = `U deposit ${amount}`;
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.#balance) {
      this.#transition[this.#transitionIndex++] = `U withdraw ${amount}`;
      return (this.#balance -= amount);
    }
    this.#transition[this.#transitionIndex++] = `Not enough amount`;
    return "Not enough amount";
  }

  constructor(owner, phone) {
    this.owner = owner;
    this.phone = phone;
    this.accountNumber = this.owner + this.phone;
  }
}

const myBankAccount = new BankAccount("HHZ", "09123234");
// console.log(myBankAccount);

myBankAccount.deposit(1000);
myBankAccount.deposit(500);
myBankAccount.withdraw(30);

myBankAccount.deposit(2500);

myBankAccount.withdraw(500);
myBankAccount.withdraw(50000);

// console.log(myBankAccount.checkBalance());
// console.table(myBankAccount.checkTransition());

class A {
  #x = "xxx";
  y = "yyy";
}

class B extends A {
  z() {
    return this.y;
  }
}

const b = new B();
// console.log(b.z());

class C {
  static a = "aaa";

  b = "bbb";

  static x() {
    return "x method";
  }

  y() {
    return "y method";
  }
}


console.dir(C);

console.log(C.a);
console.log(C.x());


// const c = new C;
// console.log(c);
// console.log(c.a);
// console.log(c.x());
