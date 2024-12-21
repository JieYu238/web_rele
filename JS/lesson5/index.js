//-------------ES6 Module = an external file that contains reusable code that can be imported into other JavaScript files.---------variables, classes, functions....
// import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';
// console.log(PI);
// const circumference = getCircumference(10);
// const area =getArea(10);
// const volume = getVolume(10);
// console.log(`${circumference.toFixed(2)}cm`);
// console.log(`${area.toFixed(2)}cm`);
// console.log(`${volume.toFixed(2)}cm`);





//--------------synchronous (line by line)
// --------------asynchronous (concurrently without waiting)
// function func1(callback){
//     setTimeout(() => {console.log("Task 1");callback();}, 3000);  
// }
// function func2(){
//     console.log("Task 2");
//     console.log("Task 3");
//     console.log("Task 4");
// }
// func1(func2);




//---------------Error = an object is to represent a problem that occurs Occur often with user input or establishing a connection
//---------try{}
//---------catch{}
//---------finally{}
// try{
//     console.log(x);
//     //network errors
//     //promise rejection;
//     //security errors
// }
// catch(error){
//     console.error(error);
// }
// finally{
//     //close files
//     //close connections
//     //release resources
//     console.log("This always executes");
// }
// console.log("Hello");
// console.log("You have reached the end!");
// try{
//     const dividend = Number(window.prompt("ENTER A dividend: "));
//     const divisor = Number(window.prompt("ENTER A divisor: "));
//     if(divisor == 0){
//         throw new Error("You can't divided by zero");
//     }
//     if(isNaN(dividend) || isNaN(divisor)){
//         throw new Error("Value must be a  number");
//     }
//     const result = dividend / divisor;
//     console.log(result);
// }
// catch(error){
//     console.error(error);
// }
// console.log("You have reached the end");





//--------------calculator program
// const display = document.getElementById("display");
// function appendToDisplay(input){
//     display.value += input;
// }
// function clearDisplay(){
//     display.value = "";
// }
// function calculate(){
//     try{
//         //eval() built-in calculator
//         display.value = eval(display.value);
//     }
//     catch(error){
//         display.value = "ERROR";
//     }

// }
// const display = document.getElementById("display");
// function appendToDisplay(input){
//     display.value += input;
// }
// function clearDisplay(){
//     display.value = "";
// }
// function calculate(){
//     try{
//        let expression = display.value;
//        expression = expression.replace(/(\d+)%/g,"($1/100)");
//        const isValid = /^[\d+\-*/().%]*$/.test(expression);
//        if(isValid){
//         display.value = new Function(`return ${expression}`)().toFixed(2);
//        }else{
//         display.value = "ERROR";
//        }
//     }
//     catch(error){
//         display.value = "ERROR";
//     }
// }







//--------------DOM = document object model
// const username = "Jie";
// const welcomeMsg = document.getElementById("myH1");
// welcomeMsg.textContent += username === ""? `Guest` : username;




//--------------element selector
//--------document.getElementById()         //element or null
//--------document.getElementsClassName()   //html collection, can use Array to cast this to array: Array.fruits.forEach(......) 
//--------document.getElementsByTagName()   //html collection
//--------document.querySelector()          //element or null
//--------document.querySelectorAll()       //nodelist




//---------DOM Navigation
// const element = document.getElementById("fruits");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "yellow";
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const firstChild = ulElement.firstElementChild;
//     firstChild.style.backgroundColor = "yellow";
// })
// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor =  "yellow";
// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//     const lastChild = ulElement.lastElementChild;
//     lastChild.style.backgroundColor = "green";
// })
// const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "orange";
// const element = document.getElementById("orange");
// const previousSibling = element.previousElementSibling;
// previousSibling.style.backgroundColor = "red";
// const element =  document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "red"; 
// const element = document.getElementById("fruits");
// const children = element.children;
// Array.from(children).forEach(child => child.style.backgroundColor = "orange");




//
// const newH1 = document.createElement("h1");
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
// // document.body.append(newH1);
// // document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// // document.getElementById("box1").prepend(newH1);
// // const box2 = document.getElementById("box2");
// // document.body.insertBefore(newH1,box2);
// // const boxes = document.querySelectorAll(".box");
// // // document.body.insertBefore(newElement, currentElement);
// // document.body.insertBefore(newH1, boxes[2]);
// // document.body.removeChild(newH1);
// document.getElementById("box1").removeChild(newH1);
// const newListItem = document.createElement("li");
// newListItem.textContent = "coconut";
// newListItem.style.backgroundColor = "green";
// // document.getElementById("apple").append(newListItem);
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[2]);
// document.getElementById("fruits").removeChild(newListItem);



//eventListener = events: click, mouseover, mouseout
//              .addEventListener(event, callback);
const myBox = document.getElementById("myBox");
const myBtn = document.getElementById("myBtn");
myBtn.addEventListener("click", event => {
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😶";
});
myBtn.addEventListener("mouseover",event => {
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 🥲";
})
myBtn.addEventListener("mouseout", event => {
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "click Me 😁";
})