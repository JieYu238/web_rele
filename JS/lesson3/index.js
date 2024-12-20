//IF STATEMENT
// let age = 25;
// if(age >= 18){
//     console.log(`You are old enough to enter the site`);
// }else{
//     console.log(`You must be 18+ to enter the site`);
// }
// let isStudent = false;
// if(isStudent){
//     console.log("You are a student!");
// }else{
//     console.log("You are not a student!");
// }
// const myText = document.getElementById("myText");
// const mySubmit=document.getElementById("mySubmit");
// const resultElement=document.getElementById
// ("resultElement");
// let age = 0;
// mySubmit.onclick = function(){
//     age = Number(myText.value);
//     if(age > 100){
//         resultElement.textContent="You are too old to enter this site";
//     }else if(age == 0){
//         resultElement.textContent = "You were just born";
//     }else if(age >= 18){
//         resultElement.textContent = "You are old enough to enter this site";
//     }else if(age < 0){
//         resultElement.textContent = "Your age can't be below 0";
//     }else{
//         resultElement.textContent = "You must be 18+ to enter this site";
//     }
// }


//.checked
// const myCheckBox=document.getElementById("myCheckBox");
// const visaBtn=document.getElementById("visaBtn");
// const masterCardBtn=document.getElementById("masterCardBtn");
// const payPalBtn=document.getElementById("payPalBtn");
// const mySubmit=document.getElementById("mySubmit");
// const subResult=document.getElementById("subResult");
// const paymentResult=document.getElementById("paymentResult");

// mySubmit.onclick=function(){
//     if(myCheckBox.checked){
//         subResult.textContent=`You are subscribed`;
//     }
//     else{
//         subResult.textContent=`You are not subscribed`;

//     }
//     if(visaBtn.checked){
//         paymentResult.textContent=`You are paying with Visa`;
//     }
//     else if(masterCardBtn.checked){
//         paymentResult.textContent=`You are paying with masterCard`;
//     }
//     else if(payPalBtn.checked){
//         paymentResult.textContent=`You are paying with paypal`;
//     }
//     else{
//         paymentResult.textContent=`You must select a payment type`;
//     }
// }



//ternary operator = condition ? codeIfTrue : codeIfFalse
// let age = 21;
// let message = age >=18 ? "You are an adult"  : "You are a minor";



//switch statement
// let day = 1;
// switch(day){
//     case 1:
//         console.log("It's Monday");
//         break;
//     case 2:
//         console.log("It's Tuesday");
//         break;
//     case 3:
//         console.log("It's Wednesday");
//         break;
//     case 4:
//         console.log("It's Thursday");
//         break;
//     case 5:
//         console.log("It's Friday");
//         break;
//     case 6:
//         console.log("It's Saturday");
//         break;
//     case 7:
//         console.log("It's Sunday");
//         break;
//     default:
//         console.log(`${day} is not a day`);
// }



//string methods
// let userName = "BroCode ";
// console.log(userName.charAt(0));
// console.log(userName.indexOf("r"));
// console.log(userName.lastIndexOf("C"));
// console.log(userName.length);
// console.log(userName.trim());
// console.log(userName.toLowerCase());
// console.log(userName.startsWith("user: "));
// console.log(userName.startsWith("Bro"));
// console.log(userName.endsWith(" "));
// console.log(userName.includes("o"));
// console.log(userName.replaceAll("o", "/"));
// console.log(userName.padStart(14, "0"));



//string slicing = string.slice(start, end)
// const fullName = "JieBroCode Yu"
// // let firstName = fullName.slice(0, 3);
// // let lastName = fullName.slice(4, 6);
// // let firstChar = fullName.slice(0, 1);
// // let lastChar = fullName.slice(-1);
// // console.log(firstName);
// // console.log(lastName);
// // console.log(firstChar);
// // console.log(lastChar);
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ")+1)
// console.log(firstName);
// console.log(lastName);



//method chaining
// let userName=window.prompt("Enter your username: ");
// //---------no method chaining
// // userName = userName.trim();
// // let letter = userName.charAt(0);
// // letter = letter.toUpperCase();
// // let extraChars = userName.slice(1);
// // extraChars = extraChars.toLowerCase();
// // userName = letter + extraChars;
// // console.log(userName);
// //---------method chaining
// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();
// console.log(userName);



//logical operator = && || !
// const temp = 20;
// if(temp >15 && temp < 30){
//     console.log("The weather is good");
// }else{
//     console.log("The weather is bad");
// }




//= == === != !==
// const PI = 3.14;
// if(PI == "3.14"){
//     console.log("That is Pi");
// }else{
//     console.log("That is not Pi");
// }




//while loop
// let userName = " ";
// while(userName === "" || userName === null){
//     userName = window.prompt(`Enter your name`);
// }
// console.log(`hello ${userName}`);


//for loop
// for(let i = 2; i <= 10; i+=2){
//     console.log(i);
// }
// for(let i = 1; i <= 20; i++){
//     if(i % 2 == 0){
//         continue;
//     }else if(i == 13){
//         break;
//     }
//     else{
//         console.log(i);
//     } 
// }




//Number guessing game
// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// let attempts = 0;
// let guess;
// let running = true;
// while(running){
//     guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
//     // console.log(typeof guess, guess);
//     if(isNaN(guess)){
//         window.alert("please enter a valid number");
//     }else if(guess < minNum || guess > maxNum){
//         window.alert(`please enter a number between ${minNum} - ${maxNum}`);
//     }else{
//         attempts++;
//         if(guess < answer){
//             window.alert("too low! try again");
//         }else if(guess > answer){
//             window.alert("too high! try again");
//         }else{
//             window.alert(`correct! the answer is ${answer}, it took you ${attempts} attempts`);
//             running = false;
//         }
//     }  
// }



//function = section of reusable code
// let userName = window.prompt(`Enter your name`);
// function greeting(){
//     console.log(`hello, ${userName}`);
// }
// greeting();




//variable scope = where a variable is recognized and accessible (local VS global)
// function2();
// function function1(){
//     let x = 1;
//     console.log(x);
// }
// function function2(){
//     // let x = 2;
//     console.log(x);
// }



//temperature conversion
// const textBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit")
// const toCelsius = document.getElementById("toCelsius")
// const result = document.getElementById("result")
// let temp;
// function convert(){
//     temp = Number(textBox.value);
//     if(toFahrenheit.checked){
//         // result.textContent = "You selected to Fahrenheit";
//         temp = temp * 9 / 5 + 32;
//         result.textContent = temp + "°F";
//     }else if(toCelsius.checked){
//         // result.textContent = "You selected to =Celsius";    
//         temp = (temp - 32) * (5 / 9);
//         result.textContent = temp + "°C"
//     }else{
//         result.textContent = "Select a unit";
//     }
// }




//array
// let fruits = ["apple", "banana", "orange"];
// fruits.push("pineapple");
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(fruits);
// console.log(numOfFruits);
// for(let fruit of fruits){
//     console.log(fruits[i]);
// }
// fruits.sort();
// fruits.sort().reverse();



//spread operator = ... 
// let numbers = [1,2,3,4,5];
// let maximum = Math.max(...numbers);
// let minmum = Math.min(...numbers);
// console.log(numbers);
// console.log(maximum);
// let username = "Bro Code";
// let letters = [...username].join("-");
// console.log(letters);
// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["carrots", "potato", "tomato"]
// let foods = [...fruits, ...vegetables, "eggs", "milk"];
// console.log(foods);


//rest parameters = (...rest)
// function openFridge(...foods){
//      console.log(foods);
// }
// function getFood(...foods){
//     return foods;
// }
// const food1 = "pizza";
// const food2 = "hamburger";
// const food3 = "noodles";
// const food4 = "sushi";
// openFridge(food1, food2, food3, food4);
// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);


//dice roller
// function rollDice(){
//     const numOfDice = document.getElementById("numOfDice").value;
//     const diceResult = document.getElementById("diceResult");
//     const diceImages = document.getElementById("diceImages");
//     const values = [];
//     const images = [];
//     for(let i = 0; i < numOfDice; i++){
//         const value = Math.floor(Math.random() * 6) +1;
//         values.push(value);
//         images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
//     }
//     diceResult.textContent = `dice: ${values.join(`, `)}`;
//     diceImages.innerHTML = images.join(``);
// }




//RANDOM PASSWORD GENERATOR
// function  generatePassword(length, includeLowercase,includeUppercase, includeNumbers, includeSymbols){
//     const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     const numberChars= "0123456789";
//     const symbolChars = "!@#$%^&*()_+=|?><:;~";
//     let allowedChars = "";
//     let password = "";
//     allowedChars += includeLowercase?lowercaseChars:"";
//     allowedChars += includeUppercase?uppercaseChars:"";
//     allowedChars += includeNumbers?numberChars:"";
//     allowedChars += includeSymbols?symbolChars:"";
//     if(length <= 0){
//         return `(password length must be at least 1)`;
//     }
//     if(allowedChars.length === 0){
//         return `(At least 1 set of character needs to be selected)`;
//     }
//     for(let i = 0; i < length; i++){
//         const randomIndex = Math.floor(Math.random() * allowedChars.length);
//         password += allowedChars[randomIndex];
//     }
//     return password;
// }
// const passwordLength = 12;
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;

// passwordResult.textContent = generatePassword(passwordLength, includeLowercase,includeUppercase, includeNumbers, includeSymbols);
// const passwordResult = document.getElementById("passwordResult");
// const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
// const uppercaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const numberChars= "0123456789";
// const symbolChars = "!@#$%^&*()_+=|?><:;~";
// let totalChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;
// document.getElementById("generatePassword").onclick = function(){
//     passwordResult.textContent = "";
//     let password = "";
//     const numOfPassword = document.getElementById("numOfPassword").value;
//     for(let i = 0; i < numOfPassword; i++){
//         let randomIndex = Math.floor(Math.random()*totalChars.length);
//         password += totalChars[randomIndex];
//     }
//     passwordResult.textContent = `password: ${password}`;
// }


//call back = a function that is passed as an argument to another function
// // used to :
// // reading a File
// // network requests
// // interacting with databases
// sum(displayPage, 1, 5);
// function sum(callback, x, y){
//     let result = x + y;
//     callback(result);
// }
// function displayResult(result){
//     console.log(result);
// }
// function displayPage(result){
//     document.getElementById("myH1").textContent = result;
// }



//forEach()
//array.forEach(callback)
// let numbers = [1, 2, 3, 4, 5];
// numbers.forEach(display);
// numbers.forEach(double);
// function double(element, index, array){
//     array[index] = element * 2;
// }
// function display(element){
//     console.log(element);
// }
// let fruits = ["apple", "orange", "banana", "coconut"];
// fruits.forEach(capitalize);
// fruits.forEach(display);
// function upperCase(element, index, array){
//     array[index] = element.toUpperCase();
// }
// function capitalize(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);
// }
// function display(element){
//     console.log(element);
// }



//.map() = accepts a callback and applies that function to each element of an array, then return a new array
// const numbers = [1, 2, 3, 4, 5];
// const squares = numbers.map(square);
// console.log(squares);
// function square(element){
//     return Math.pow(element, 2);
// }
// const students = ["Bob", "Mary", "Lily", "Mario"];
// const studentUpper = students.map(upperCase);
// console.log(studentUpper);
// function upperCase(element){
//     return element.toUpperCase();
// }
// const dates=["2024-1-30", "2025-2-30", "2026-3-30"];
// const formattedDates = dates.map(formatDates);
// console.log(formattedDates);
// function formatDates(element){
//     const parts = element.split("-");
//     return `${parts[1]}/${parts[2]}/${parts[0]}`;
// }



//.filter() = creates a new array by filtering out elements
// let numbers = [1, 2, 3, 4, 5, 6, 7];
// let evenNums = numbers.filter(isEven);
// console.log(evenNums);
// function isEven(element){
//     return element % 2 === 0;
// }
// const ages = [16, 17, 18, 19, 20, 60];
// const adults = ages.filter(isAdult);
// console.log(adults);
// function isAdult(element){
//     return element >= 18;
// }




//.reduce() = reduce the elements of an array to a single value
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce();
// console.log(`$${total}`)
// function sum(previous, next){
//     return previous + next;
// }
// const grades = [78, 56, 98, 77, 97, 77];
// const maximum = grades.reduce(getMax);
// console.log(maximum);
// function getMax(accumulator, element){
//     return Math.max(accumulator, element);
// }



//-------function declaration
// function hello(){
//     console.log("hello");
// }
// hello();
// ------function expressions
// const greeting = function(){
//     console.log("hello~hello");
// }
// //setTimeout(callback, 3000);
// // setTimeout(greeting, 3000);
// setTimeout(function(){
//     console.log("Goodbye")
// }, 3000);
// const numbers = [1, 2, 3, 4, 5, 6, 7];
// const squares = numbers.map(function(element){
//     return Math.pow(element, 2);
// })
// console.log(squares);





//--------function expression used in 
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners




//--------arrow functions
    // a concise way to write function expressions good for simple functions that you use only once (parameter) => some code
// const hello = function(){
//     console.log("hello");
// }
// hello();
// const goodbye = (name) => console.log(`Goodbye, ${name}`);
// goodbye("Bro");
// const numbers = [1,2,3,4,5,6];
// const squares = numbers.map((element) => Math.pow(element, 2));
// console.log(squares);



//----------object
    //object = {key:value, function()};
const person1 = {
    firstName:"Bob", 
    lastName:"Mario",
    age: 30,
    isEmployed: true,
    sayHello:function(){console.log("Hi! I am Bob!")},
    eat:function(){console.log("I am eating pizza")},
};
const person2 = {
    firstName:"Mary", 
    lastName:"Li",
    age: 10,
    isEmployed: false,
    sayHello:function(){console.log("Hi! I am Mary!")},
    eat:() => console.log("I am eating noodles"),
};
console.log(person1.age);
person1.sayHello();
person2.eat();