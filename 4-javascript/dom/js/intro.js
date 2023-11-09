// const area = (w,b) => {
//     return w * b;
// }

// const name = window.prompt("what is your name ?")
// window.alert("My name is "+name)

// console.log(window);

// const width = window.prompt("Your room width in ft")
// const breadth = window.prompt("Your room breadth in ft")
// window.alert(`Your room area is ${area(width,breadth)} sqft`)

// const result = window.confirm("Are U ready to go to school ?")
// console.log(result ? "I'm ready" : "not yet");

// window.print()

console.log(document);

// selectors

const heading = document.getElementById("heading");
const para = document.getElementById("para");
const googleLink = document.getElementById("googleLink");
const listGroup = document.getElementById("listGroup");
const input = document.getElementById("input");
const btn = document.getElementById("btn");

// console.log(input.value);

// console.log(heading);
// console.log(heading.innerText);

const addList = (text) => {
    listGroup.innerHTML += `<li>${input.value}</li>`
    input.value = null
}

function run() {
  heading.innerText = input.value;
  input.value = null
}

// console.log(heading.innerHTML);

// console.log(para);
// console.log(para.innerText);
// para.innerText = "hello my para"
// console.log(para.innerHTML);

// console.log(googleLink);
// googleLink.innerText = "My Google"

// console.log(listGroup);
// console.log(listGroup.innerText);
// console.log(listGroup.innerHTML);

// listGroup.innerHTML = "<li>one</li><li>two</li>"

// console.log(input);
// console.log(btn);

// const obj = {
//     a : "aaa",
//     b : "bbb"
// }

// obj.a = "xxx"

// console.log(obj.a);
