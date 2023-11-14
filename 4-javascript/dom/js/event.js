

const btn = document.querySelector("#btn");
// console.dir(btn);

const btnHandler = () => {
    console.log("I'm run");
}


// btn.onclick = run

btn.addEventListener('click',btnHandler)