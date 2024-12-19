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
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) +1;
        values.push(value);
        images.push(`<img src="dice_images/dice${value}.png" alt="Dice ${value}">`);
    }
    diceResult.textContent = `dice: ${values.join(`, `)}`;
    diceImages.innerHTML = images.join(``);
}