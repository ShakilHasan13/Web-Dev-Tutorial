//variable
//var const let
//Comment , Syntax, Statement


// let saltBiskit = "Tip";
// const dryCake = "Mr Cookie";
// saltBiskit = "ABC";
//input , output

// //input
// prompt("Enter your name: ");
// //output =>document.write(), console.log()
// document.write("Hello, I'm learning JS");
// console.log("Hi, I'm learning JS");

// let userName = prompt("Enter your name");
// document.write("Hi " + userName);
/*data types (number, string, boolean, null,
    undefined, symbol)*/
//string=alphabets,
//boolean= true/false
//number=digit
//operators: +, -, *, /, % , =, >, <, <=, >=, &&, ||, !
/*let num1 = 3;
let num2 = 4;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 % num2);*/
//asignment operator
// let myName="Shakil";

// // num1=num1+num2;

// // num1+=num2;

// // num1=num1-num2;
// // num1-=num2;

// //comparison operator

// let a = 4 > 5;
// console.log(a);

// let abc = 3 == 3;
// console.log(abc);

// //locial operator:
// // if , if else, else if statement
// let number = prompt("Enter your number");
// if (number >= 80) {
//     console.log("You got A+");
// } else {
//     console.log("You don't get A+");
// }

// let userAge = prompt("Enter your age: ");

// if (userAge >= 18 && userAge <= 100) {
//     console.log("You are eligible for voting");
// } else if (userAge <= 0 || userAge >= 100) {
//     console.log("Wrong input");
// } else {
//     console.log("You are baby");
// }

//Write a program that takes a number as an input and shows if the number is greater than 10
// let userInput = prompt("Enter a number");

// if (userInput > 10) {
//     console.log("It's greater than 10");
// } else if (userInput == 10) {
//     console.log("It's 10");
// } else {
//     console.log("It's less than 10");
// }

//Write a program that takes a number as input and check if a number is positive or not.
// let number = prompt("Enter a number");
// if (number > 0) {
//     console.log("It's a positive number");
// } else if (number == 0) {
//     console.log("It's 0");
// } else {
//     console.log("It's a negative number");
// }

//loops
//three types: for , while, do-while
// for (let i = 1; i <= 100; i++) { //i++ means i=i+1
//     console.log(i + " I like her");
// }

//Write a program which can count 1 to 100
// for (let j = 1; j <= 100; j++) {
//     console.log(j);
// }
//Function


//  function myNewFunction(){

//  }

// let myFunction = () => {
//     console.log("I like her");
//     console.log("I am sleeping now");
//     console.log("I am doing JS");
//     console.log("I was studing here");
// }

// myFunction();

// let ourFunction= ()=>{
// console.log("Hello There!")
// }

// ourFunction();



//Write a program which can evaluate if a number is even or odd.
// let myNum = prompt("Enter any number: ");
// if (myNum % 2 == 0) {
//     console.log("Its an even number");
// } else {
//     console.log("It's an odd number");
// }

//Funtions: Parameter, Argument

//write a program which can add two numbers.
// let sum=0;
// let ourFunction= (a, b)=>{
//  sum=a+b;
// }

// ourFunction(2, 3);

//Arrays and Objects

//arrays: collection of data
// let myName= "Shakil";

// let myArray = ["Shakil", "Hasan", "HSTU"];
// //accessing arrays
// //indexing=positioning
// // console.log(myArray[2]);
// myArray.push("Dinajpur");
// myArray.push("Bangladesh");
// myArray.pop();
// console.log(myArray);

//Objects
// let user= {
//     name: "Shakil",
//     age: 193
// }

//Write a program that takes a number as an input and
// //shows if the number is greater than 10
// let userInput = prompt("Enter any number: ");
// if (userInput > 10) {
//     console.log(userInput + " is greater than 10");
// } else {
//     console.log(userInput + " is not greater than 10");
// }

//Write a program that takes a number as input and check if a
// number is positive or not.
// let number = prompt("Enter a number");
// if (number > 0) {
//     console.log(number + " is a positive number");
// } else if (number == 0) {
//     console.log(number + " is a neutral number");
// } else {
//     console.log(number + " is a negative number");
// }

//Write a program that can take a number as input and
//shows if it is even or odd.
// let userNum = prompt("Enter a number");
// if (userNum % 2 == 0) {
//     console.log(userNum + " is an even number");
// } else {
//     console.log(userNum + " is an odd number");
// }

//Print the even numbers from 1 to 50
// for (let i = 1; i <= 50; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }

// }

//Write a program that can
// calculate the sum of two numbers given by the user.
// let num1 = prompt("Enter first number");
// let num2 = prompt("Enter Second Number");
// let sum = num1 + num2;

// console.log("The sum of the two number is: " + sum);

//Array:
// let myArray = ["Shakil", "Hasan"];
// myArray.shift();
// // console.log(myArray);
// myArray.unshift("HSTU");
// console.log(myArray);

//Arrays: Detailed:
// let uniNum = ["DU", "RU", "JU", "HSTU"];
//Methods: Method is a type of function.
//push, pop, shift, unshift, splice, slice, map, filter, reduce
// uniNum.push("NSU", "BRAC", "NU");
// uniNum.pop();
// uniNum.shift();
// uniNum.unshift("EWU", "AIUB");
// console.log(uniNum);

//Object:
//key-value pair

// let myObj = {
//     name: "Shakil",
//     age: 104,
//     id: 1023
// }
// console.log(myObj);

// let student1 = {
//     name: "Ratul",
//     id: 1020,
//     Phone: 10293
// }
// let student2 = {
//     name: "Fahin",
//     id: 1021,
//     Phone: 10293
// }
// console.log(student2.id);
//Git: version controlling tool
//Version control: version 1.0, version 1.4

//variable:
// let myVariable;
// myVariable = "Shakil";
// let myVariable2;
// myVariable2 = "Hasan";

// //Data types:
// let myAge = 10;
// //toUpperCase, toLowerCase, toString
// // myName.toUpperCase();
// let myString = myAge.toString();
// //mutable, immutable
// console.log(myString);

//Write a program which can take the name of the user
//and can create an user ID. 
// let userName = prompt("Enter your name");
// console.log("Your User ID is: @" + userName.toLowerCase() + userName.length);

//Objects:
// let student = {
//     name: "Shakil"
// }
// console.log(student.name)


//Function:arguments,parameter
// let myName=()=> {
//     console.log("My Name is Md. Shakil Hasan");
// }

// myName();
//Add two number using function

// let addNum = (num1, num2, num3, num4, num5) => {
//     addNum = num1 + num2;
//     console.log(addNum);
// }
// addNum(2, 4, 2, 4, 1);

//return: returns value
// function sum(a, b){
//     s=a+b;
//     // console.log("before return");
//     return s;

// }
// sum(1000, 305920);

//Arrays: forEach Loop
// for(let i=1; i<=10; i++){

// }
//Callback function: Callback function is a function that passes
//inside another function as a parameter. 
// let myArr= [1,2,4,5];

// myArr.forEach(function printVal(val){
//     console.log(val);
// })
// let myArr = ["dhaka", "sylhet"];

// // myArr.forEach(val)=>{
// //     console.log(val.toUpperCase());
// // }
// myArr.forEach((val) => {
//     console.log(val.toUpperCase());
// })

//For a given array of numbers, print the square of
//each value using forEah loop
// let myNumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNumArray.forEach((num) => {
//     console.log(num ** 3);
// })


//Map Method:
// let myNumArray = [1, 2, 3];

// myNumArray.map((num) => {
//     console.log(num * num);
// })

//Filter method
let arr = [2, 3, 4, 5];

let evenNum = arr.filter((number) => {
    return number % 2 == 0;
})
console.log(evenNum);


