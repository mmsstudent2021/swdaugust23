// const btn = document.querySelector("#btn");
// // console.dir(btn);

// const btnHandler = () => {
//     console.log("I'm run");
// }

// btn.onclick = run

// btn.addEventListener('click',btnHandler)

// const heading = document.querySelector("#heading");

// heading.addEventListener('click',() => {
//     console.log("U click");
// })

// heading.addEventListener('mouseenter',() => {
//     console.log("mouse enter");
// })

// heading.addEventListener('mouseout',() => {
//     console.log("mouse out");
// })

// heading.addEventListener('mousemove',() => {
//     console.log("mouse move");
// })

// const input = document.querySelector("#input");

// input.addEventListener("focus",() => {
//     console.log("input focus");
// })

// input.addEventListener("blur",() => {
//     console.log("input blur");
// })

// input.addEventListener("change",() => {
//     console.log(input.files[0]);
// })

// input.addEventListener("keydown",() => {
//     console.log("input keydown");
// })

// input.addEventListener("keyup",() => {
//     console.log("input keyup");
// })

// const nation = document.querySelector("#nation");

// nation.addEventListener("change",() => {
//     console.log(nation.value);
// })

const output = document.querySelector("#output");
const textInput = document.querySelector("#textInput");
const colorInput = document.querySelector("#colorInput");
const fontSizeRange = document.querySelector("#fontSizeRange");
const fontSelect = document.querySelector("#fontSelect");
const controller = document.querySelector("#controller");

controller.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(textInput.value);
  console.log(colorInput.value);
  console.log(fontSizeRange.value);
  console.log(fontSelect.value);
});

// document.addEventListener("click",(event) => {
//     console.log(event.target);
// })

// document.addEventListener("mousemove",(event) => {
//     console.clear();
//     console.log(event);
// })

// window.addEventListener("load", () => {
//   console.log("all finish");
// });

// console.log("two");
// console.log("three");

// window.addEventListener("scroll",(event) => {
//     console.log("U scroll");
//     console.log(event);
// })

// document.querySelector("#link").addEventListener("click", (event) => {
//     console.log("U click link");
//     event.preventDefault()
// });

textInput.addEventListener("keyup",(event) => {
    console.log(event.target.value);
    // output.innerText = textInput.value;
})

// colorInput.addEventListener("change",() => {
//     output.style.color = colorInput.value
// })

// fontSizeRange.addEventListener("change",() => {
//     output.style.fontSize = fontSizeRange.value + "px"
// })

// fontSelect.addEventListener("change",() => {
//     output.style.fontFamily = fontSelect.value;
// })
