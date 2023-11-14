const createH1 = document.createElement("h1");
createH1.innerText = "Min Ga Lar Par";
createH1.classList.add("text-blue-600", "text-3xl");

const createPara = document.createElement("p");
createPara.innerText = "san kyi tar par byar .";
createPara.classList.add("text-blue-300");

const link = document.createElement("a");
link.innerText = "Google";
link.href = "https://google.com";
link.target = "_blank";

// const img = document.createElement("img");
// img.src = "./images/love.gif";
// img.height = 50

const img = new Image(100, 100);
img.src = "./images/love.gif";

const ul = document.createElement("ul");

const createLi = (text) => {
  const li = document.createElement("li");
  li.innerText = text;
  return li;
};

ul.prepend(createLi("apple"))
ul.prepend(createLi("orange"))
ul.prepend(createLi("mango"))

// const li1 = document.createElement("li");
// li1.innerText = "hello"

// const li2 = document.createElement("li");
// li2.innerText = "apple"

// ul.append(li1);
// ul.append(li2);

// console.log(ul);

// console.log(createH1);
// document.body.append(createH1);
// document.body.append(createPara);
// document.body.append(ul);
// document.body.append(link)
// document.body.append(img)


// const textNode = document.createTextNode("haha 😃");

// document.body.append(textNode)

const frg = document.createDocumentFragment();

// frg.append(createH1)
// frg.append(createPara)
// frg.append(ul)

// console.log(frg);

// document.body.append(frg)


document.body.append(ul)
ul.before(createH1)
ul.after(createPara)