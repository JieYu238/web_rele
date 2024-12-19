// let age = 25;
// let price = 10.99;

// console.log(age);
// console.log(price);
// console.log(`The price is $${price}`);
// console.log(typeof(price));
// console.log(typeof age);

// let firstName = "Jie";
// console.log(typeof firstName);

// let online = true;
// console.log(`Jie is online: ${online}`);

// let fullName = `Jie Yu`;
// let age = 30;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

//operator precedence:
//(), exponents **, * / %, + -


//accept user input
//window prompt
//html textbox

// let username = window.prompt("What's your user name?");
// console.log(username);

// let username;
// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `hello ${username}`;
// }

//type conversion
// let age = window.prompt("How old are you?");
// age = Number(age);
// age+=1;
// console.log(age);

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";
// let x = "0";
// let y = "0";
// let z = "0";
// let x = "";
// let y = "";
// let z = "";
// let x = "";
// let y = "";
// let z = "";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//const
// const PI = 3.14159;
// let radius;
// let circumference;
// radius = window.prompt(`Enter the radius of a circle`);
// radius = Number(radius);


// document.getElementById("mySubmit").onclick = function(){
//     radius = document.getElementById("myText").value;
//     radius = Number(radius);
//     circumference = 2* PI * radius;
//     document.getElementById("myH3").textContent = circumference + "cm";
// }

// console.log(circumference);


// COUNTER PROGRAM
// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;
// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }



//Math-built-in object that provides a collection of properties and methods
//Math.PI
//Math.round(x)
//Math.floor(x)
//Math.ceil(x)
//Math.trunc(x)
//Math.pow(x,y)
//Math.sqrt(x)
//Math.log(x)
//Math.sin(x)
//Math.cos(x)
//Math.tan(x)
//Math.abs(x)
//Math.sign(x)
//Math.max(x, y, z)
//Math.min(x, y, z)



//RANDOM NUMBER GENERATOR
// let randomNum = Math.random();
// let randomNum = Math.random() * 6;
// let randomNum = Math.floor(Math.random() * 6);
// let randomNum = Math.floor(Math.random() * 6) + 1;
// const min = 50;
// const max = 100;
// // let randomNum = Math.floor(Math.random() * max) + min;
// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myBtn = document.getElementById("myBtn");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const MIN = 1;
const MAX = 6;
let randomNum1;
let randomNum2;
let randomNum3;
myBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * MAX) + MIN;
    randomNum2 = Math.floor(Math.random() * MAX) + MIN;
    randomNum3 = Math.floor(Math.random() * MAX) + MIN;

    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

}

