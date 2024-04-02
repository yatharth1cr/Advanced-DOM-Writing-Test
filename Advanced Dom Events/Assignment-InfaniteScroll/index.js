// alert("The Content of the Dom is loaded");
let main = document.querySelector("section");
window.addEventListener("scroll", randomQuoteGenerator);
function randomQuoteGenerator() {
  let createDiv = document.createElement("div");
  let createH2 = document.createElement("h2");
  let createP = document.createElement("p");
  let randomIndex = Math.floor(Math.random() * quotes.length);
  const text = quotes[randomIndex].quoteText;
  const author = quotes[randomIndex].quoteAuthor;
  createH2.innerText = text;
  createP.innerText = author;
  createDiv.append(createH2, createP);
  main.append(createDiv);
}
