//-----------eventListener
//           events: keydown, keyup
// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown",event =>{
//     myBox.textContent = "🥲";
//     myBox.style.backgroundColor = "tomato";
// });
// document.addEventListener("keyup",event =>{
//     myBox.textContent = "😶";
//     myBox.style.backgroundColor = "blue";
// });
// const moveAmount = 10;
// let x = 0;
// let y = 0;
// document.addEventListener("keydown", event => {
//     if(event.key.startsWith("Arrow")){
//         event.preventDefault();
//         switch(event.key){
//             case "ArrowUp":
//                 y -= moveAmount;
//                 break;
//             case "ArrowDown":
//                 y += moveAmount;
//                 break;
//             case "ArrowLeft":
//                 x -= moveAmount;
//                 break;
//             case "ArrowRight":
//                 x += moveAmount;
//                 break;
//         }
//         myBox.style.top = `${y}px`;
//         myBox.style.left = `${x}px`;
//     }
// })



//visibility and display
// const myBtn = document.getElementById("myBtn");
// const myImg = document.getElementById("myImg");
// myBtn.addEventListener("click",event => {
//     if(myImg.style.visibility === "hidden"){
//         myImg.style.visibility = "visible";
//         myBtn.textContent = "Hide";
//     }else{
//         myImg.style.visibility = "hidden";
//         myBtn.textContent = "show";
//     }
   
// })




//------------------NodeList = similar to an array, but no (map, filter, reduce)
// let buttons = document.querySelectorAll(".myBtn");
// console.log(buttons);
// buttons.forEach(button => {
//     button.style.backgroundColor = "green";
//     button.textContent += "😶";
// })
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         event.target.style.backgroundColor = "tomato";   
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.style.backgroundColor = " hsl(240, 100%, 50%)";
//     })
// })
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.style.backgroundColor = " hsl(240, 100%, 66%)";
//     })
// })
// const newButton = document.createElement("button");
// newButton.textContent = "Button 5";
// newButton.classList = "myBtn";
// document.body.appendChild(newButton);
// console.log(buttons);//NodeList won't update to automatically reflect changes
// buttons = document.querySelectorAll(".myBtn");//use it again, the NodeList updat
// buttons.forEach(button => {
//     button.addEventListener("click",event => {
//         event.target.remove();
//         // console.log(buttons);
//         buttons = document.querySelectorAll(".myBtn");
//         console.log(buttons);
//     })
// })



//----------------classList = element property in JS used to interact with an element's list of classes (CSS classes). Allows you to make reusable classes for many elements across your webpage.
//          add()
//          remove()
//          toggle(Remove if present, add if not)
//          replace(oldClass, newClass)
//          contains()
// const myH1 = document.getElementById("myH1");
// const myBtn = document.getElementById("myBtn");
// myBtn.classList.add("enabled");
// myBtn.classList.remove("enabled");
// myBtn.classList.add("hover");
// myBtn.addEventListener("mouseover", event => {
//     event.target.classList.add("hover");
// })
// myBtn.addEventListener("mouseout", event => {
//     event.target.classList.remove("hover");
// })
// myBtn.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
// })
// myBtn.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
// })
// myH1.classList.add("enabled");
// myBtn.classList.add("enabled");
// myBtn.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😶";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }  
// })
// myH1.addEventListener("click", event => {
//     if(event.target.classList.contains("disabled")){
//         event.target.textContent += "😶";
//     }else{
//         event.target.classList.replace("enabled", "disabled");
//     }  
// })
// let buttons = document.querySelectorAll(".myBtns");
// buttons.forEach(button => {
//     button.classList.add("enabled");
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseover", event => {
//         event.target.classList.toggle("hover");
//     })
// });
// buttons.forEach(button => {
//     button.addEventListener("mouseout", event => {
//         event.target.classList.toggle("hover");
//     })
// });
// buttons.forEach(button => {
//     button.addEventListener("click", event => {
//         if(event.target.classList.contains("disabled")){
//             event.target.textContent += "😶";
//         }else{
//             event.target.classList.replace("enabled", "disabled");
//         }
//     })
// })





//----------rock paper scissors
// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const ComputerScoreDisplay = document.getElementById("ComputerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;
// function playGame(playerChoice){
//     const computerChoice = choices[Math.floor(Math.random()*3)];
//     console.log(computerChoice);
//     let result = "";
//     if(playerChoice === computerChoice){
//         result  = "IT'S A TIE!";
//     }else{
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoice === "scissors")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                 result = (computerChoice === "rock")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "scissors":
//                 result = (computerChoice === "paper")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//     }
//     playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//     computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//     resultDisplay.textContent = result;
//     resultDisplay.classList.remove("greenText", "redText");
//     switch(result){
//         case "YOU WIN!":
//             resultDisplay.classList.add("greenText");
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//             break;
//         case "YOU LOSE!":
//             resultDisplay.classList.add("redText");
//             computerScore++;
//             ComputerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }


// const choices = ["rock", "paper", "scissors"];
// const playerChoiceDisplay = document.getElementById("playerChoiceDisplay");
// const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// let playerScore = 0;
// let computerScore = 0;
// function playGame(playerChoice){
//     playerChoiceDisplay.style.display = "block";
//     computerChoiceDisplay.style.display = "block";

//     const computerChoice = choices[Math.floor(Math.random()*3)];
//     let result = "";
//     if(playerChoice ===  computerChoice){
//         result = "IT'S A TIE!";
//     }else{
//         switch(playerChoice){
//             case "rock":
//                 result = (computerChoice === "scissors")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "paper":
//                 result = (computerChoice === "rock")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//             case "scissors":
//                 result = (computerChoice === "paper")? "YOU WIN!" : "YOU LOSE!";
//                 break;
//         }
//     }
//     playerChoiceDisplay.textContent = `Player choice: ${playerChoice}`;
//     computerChoiceDisplay.textContent = `Computer choice: ${computerChoice}`;
//     resultDisplay.textContent = result;
//     resultDisplay.classList.remove("greenText", "redText");
//     switch(result){
//         case "YOU WIN!":
//             resultDisplay.classList.add("greenText");
//             playerScore++;
//             playerScoreDisplay.textContent = playerScore;
//             break;
//         case "YOU LOSE!":
//             resultDisplay.classList.add("redText");
//             computerScore++;
//             computerScoreDisplay.textContent = computerScore;
//             break;
//     }
// }




//---------------image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
document.addEventListener("DOMContentLoaded",initializeSlider);
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
    
    // console.log(intervalId);
}
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
