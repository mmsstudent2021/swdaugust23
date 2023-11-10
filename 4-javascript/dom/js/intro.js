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

// console.log(document);

// selectors

const heading = document.getElementById("heading");
const para = document.getElementById("para");
const googleLink = document.getElementById("googleLink");
const listGroup = document.getElementById("listGroup");
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const poeImg = document.getElementById("poeImg");
// const lis = document.getElementsByTagName("li");
// const lis = document.querySelectorAll("li");

// console.log(lis);

// console.log(lis[0].innerText);
// console.log(lis[1].innerText);
// console.log(lis[2].innerText);

// console.dir(heading.className);
// console.dir(heading.classList);
// heading.classList.add("a","b","c")
// heading.classList.remove("x","z")
// heading.classList.replace("y","b")
// console.log(heading.classList.contains("x"));
// console.log(heading.classList.contains("y"));
// console.log(heading.classList.contains("a"));

// heading.classList.toggle("a")
// heading.classList.toggle("a")
// heading.classList.toggle("a")
// heading.classList.toggle("a")

// console.log(heading.style);
// console.log(heading.style.color);
// console.log(heading.style.textAlign);
// console.log(heading.style.backgroundColor);
// console.log(heading.style.padding);

// heading.style.color = "pink"
// heading.style.textAlign = "right"

// console.log(heading.style);

// heading.style.color = "red"
// heading.style.backgroundColor = "black"
// heading.style.textAlign = "center"
// heading.style.padding = "10px"
// heading.style.border = "10px dotted blue"

// text-align : center
// textAlign = "center"

// console.dir(poeImg);
// poeImg.src = "./images/poe-mamhe-thar-2.jpg";

const imgZoomIn = () => {
  poeImg.height -= 10;
}

const imgZoomOut = () => {
  poeImg.height += 10;
}

// console.dir(poeImg.src);
// poeImg.height += 100
// poeImg.height += 100
// poeImg.height += 100
// console.dir(poeImg.height);
// console.log(poeImg.getAttribute("src"));
// poeImg.setAttribute("src", "./images/poe-mamhe-thar-2.jpg")

// console.log(input.value);

// console.dir( heading);
// console.log(heading.innerText);

// const addList = (text) => {
//     listGroup.innerHTML += `<li>${input.value}</li>`
//     input.value = null
// }

// function run() {
//   heading.innerText = input.value;
//   input.value = null
// }

// console.log(heading.innerHTML);

// console.log(para);
// console.log(para.innerText);
// para.innerText = "hello my para"
// console.log(para.innerHTML);

// googleLink.href = "https://mms-it.com"

// console.dir(googleLink.href);
// console.dir(googleLink);
// googleLink.innerText = "My Google"

// console.dir(listGroup);
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
