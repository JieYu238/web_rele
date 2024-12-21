//---------------callback hell
// function task1(callback){
//     setTimeout(() => {
//         console.log("Task 1 complete");
//         callback();
//     }, 2000);  
// }
// function task2(callback){
//     setTimeout(() => {
//         console.log("Task 2 complete");
//         callback();
//     },1000);  
// }
// function task3(callback){
//     setTimeout(() => {
//         console.log("Task 3 complete");
//         callback();
//     },1500); 
    
// }
// function task4(callback){
//     setTimeout(() => {
//         console.log("Task 4 complete");
//         callback();
//     },3000); 
// }
// task1(()=>{
//     task2(()=>{
//         task3(()=>{
//             task4(()=> console.log("all tasks completed"));
//         })
//     })
// })




//---------------Promise object
//              PENDING -> RESOLVED OR REJECTED
// function walkDog(){
    
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve("YOU WALK THE DOG 🐕");
//             }else{
//                 reject("You did not walk the dog!");
//             }
            
//         }, 1500);
//     });
// }
// function cleanKitChen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }else{
//                 reject("You did not clean the kitchen");
//             }
            
//         }, 2500);
//     });
// }
// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const trashTakeOut = true;
//             if(trashTakeOut){
//                 resolve("You take out the trash 🚮");
//             }else{
//                 reject("You didn't take out the trash");
//             }
            
//         }, 500);
//     });
// }
// // walkDog(()=>{
// //     cleanKitChen(()=>{
// //         takeOutTrash(()=>console.log("YOu finished all the chores!"));
// //     });
// // });
// walkDog().then(value => {console.log(value);return cleanKitChen()})
//         .then(value => {console.log(value);return takeOutTrash()})
//         .then(value => {console.log(value);console.log("You finished all chores!")})
//         .catch(error => console.error(error));






//-----------------Async/Await
// function walkDog(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             const dogWalked = false;
//             if(dogWalked){
//                 resolve("YOU WALK THE DOG 🐕");
//             }else{
//                 reject("You did not walk the dog!");
//             }
            
//         }, 1500);
//     });
// }
// function cleanKitChen(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const kitchenCleaned = true;
//             if(kitchenCleaned){
//                 resolve("You clean the kitchen 🧹");
//             }else{
//                 reject("You did not clean the kitchen");
//             }
            
//         }, 2500);
//     });
// }
// function takeOutTrash(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             const trashTakeOut = true;
//             if(trashTakeOut){
//                 resolve("You take out the trash 🚮");
//             }else{
//                 reject("You didn't take out the trash");
//             }
            
//         }, 500);
//     });
// }
// // walkDog(()=>{
// //     cleanKitChen(()=>{
// //         takeOutTrash(()=>console.log("YOu finished all the chores!"));
// //     });
// // });
// // walkDog().then(value => {console.log(value);return cleanKitChen()})
// //         .then(value => {console.log(value);return takeOutTrash()})
// //         .then(value => {console.log(value);console.log("You finished all chores!")})
// //         .catch(error => console.error(error));
// async function doChores(){
//     try{
//         const walkDogResult = await walkDog();
//         console.log(walkDogResult);
//         const cleanKitChenResult = await cleanKitChen();
//         console.log(cleanKitChenResult);
//         const takeOutTrashResult = await takeOutTrash();
//         console.log(takeOutTrashResult);
//         console.log("You finished all the chores!");
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// doChores();




//------------------JSON = JS object Notation, data-interchange format
//          JSON files {key: value} OR [value1, value2, value3]
//           JSON.stringify() = converts a JS object to a JSON string
//           JSON.parse() = converts a JSON string to a JS object
// const names = ["Bob", "Patrick", "Lily", "Mary"];
// const person = {
//     "name":"Bob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["fishing","cooking", "karate"]
// };
// const people = [
//     {
//         "name":"Bob",
//         "age":30,
//         "isEmployed":true
//     },
//     {
//         "name":"Patrick",
//         "age":33,
//         "isEmployed":true
//     },
//     {
//         "name":"Lily",
//         "age":38,
//         "isEmployed":true
//     },
//     {
//         "name":"Mary",
//         "age":30,
//         "isEmployed":false
//     }

// ];
// const jsonNames = `["Bob", "Patrick", "Lily", "Mary"]`;
// const jsonPerson = `{
//     "name":"Bob",
//     "age":30,
//     "isEmployed":true,
//     "hobbies":["fishing","cooking", "karate"]
// }`;
// const jsonPeople = `[
//     {
//         "name":"Bob",
//         "age":30,
//         "isEmployed":true
//     },
//     {
//         "name":"Patrick",
//         "age":33,
//         "isEmployed":true
//     },
//     {
//         "name":"Lily",
//         "age":38,
//         "isEmployed":true
//     },
//     {
//         "name":"Mary",
//         "age":30,
//         "isEmployed":false
//     }

// ]`;
// const jsonString = JSON.stringify(person);
// console.log(names);
// console.log(jsonString);
// const parsedData = JSON.parse(jsonPerson);
// console.log(parsedData);

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))
//     .catch(error => console.log(error));





//-----------------fetch (JSON style data, images, files)
//                  fetch(url, {options})
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Could not fetch resource")
//         }
//         return response.json();})
//     .then(data => console.log(data.name))
//     .catch(error => console.error(error));
// fetchData();
// async function fetchData(){
//     try{

//         const pokemonName=document.getElementById("pokemonName").value.toLowerCase();
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
//         if(!response.ok){
//             throw new Error("COULD NOT FETCH RESOURCE");
//         }else{
//             const data = await response.json();
//             const pokemonSprite = data.sprites.front_default;
//             const imgElement = document.getElementById("pokemonSprite");
//             imgElement.src = pokemonSprite;
//             imgElement.style.display = "block";
//         }
//     }
//     catch(error){
//         console.error(error);
//     }
// }






//weather app
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "57aea1a3ba6b6409101689c9cfce48c2";
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;
    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("Please enter a city");
    }
});
async function getWeatherData(city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    console.log(response);
    if(!response.ok){
        throw new Error("Could not fetch weather data");
    }
    return await response.json();
};
function displayWeatherInfo(data){
    const {name:city, 
           main:{ temp, humidity}, 
           weather:[{description, id}]} = data;
    card.textContent = "";
    card.style.display = "flex";
    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("p");
    cityDisplay.textContent = city;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
    humidityDisplay.textContent = `Humidity:${humidity}%`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay");
    tempDisplay.classList.add("tempDisplay");
    humidityDisplay.classList.add("humidityDisplay");
    descDisplay.classList.add("descDisplay");
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}
function getWeatherEmoji(weatherId){
    switch(true){
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌧️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌦️";
        case (weatherId >= 600 && weatherId <700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800 ):
            return "☀️";
        case (weatherId >= 800 && weatherId < 810):
            return "⛅";
        default:
            return "❓";
    }
}
function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}