//DOM: Document Object Model
// console.log("Hello DOM!");
//Three like model
//Document>window>........

//DOM Manipulation
//1. Select: selecting by ID, selecting by class,
//selecting by tag
///Query Selector
//Tag:
let heading = document.getElementsByTagName("h1");


let secondH1 = document.getElementById("secondH1");

// let className = document.getElementsByClassName("thirdH1");

let querySelcetor = document.querySelector(".thirdH1");

//tagName, innerText, innerHTML, innerContent
secondH1.innerText = "I am changed Text";

querySelcetor.innerText = "I am changed third H1";



