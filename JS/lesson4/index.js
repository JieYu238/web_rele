//--------this, not work with arrow function
// const person1 = {
//     name: "Bob",
//     favFood: "pizza",
//     sayHello: function(){console.log(`Hi, I am ${this.name}`)},
//     eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
// }
// person1.sayHello();
// person1.eat();
// console.log(this);




//------------constructor
// function Car(make, model, year, color){
//     this.make = make,
//     this.model = model,
//     this.year = year,
//     this.color = color,
//     this.drive = function(){console.log(`You drive the ${this.model}`)}
// }
// const car1 = new Car("Ford", "Mustang", 2024, "red");
// console.log(car1.make);
// const car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
// const car3 = new Car("Dodge", "Charger", 2026, "silver");
// car1.drive();




//----------class
// class Product{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }
//     displayProduct(){
//         console.log(`product: ${this.name}`);
//         console.log(`price: ${this.price.toFixed(2)}`);
//     }
//     calculateTotal(salesTax){
//         return this.price + (this.price * salesTax);
//     }
// }
// const salesTax = 0.05;
// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 22.99);
// const product3 = new Product("Underwear", 100.00);
// product1.displayProduct();
// product2.displayProduct();
// const total = product1.calculateTotal(salesTax);
// console.log(`Total price (with tax): ${total.toFixed(2)}`);



//------static = keyword that defines properties or methods that belong to a class itself rather than the objects created from that class (class owns anything static, not the objects)
// class MathUtil{
//     static PI = 3.14159;
//     static getDiameter(radius){
//         return radius * 2;
//     }
//     static getCircumference(radius){
//         return radius * 2 * (this.PI);
//     }
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }
// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(10));
// console.log(MathUtil.getCircumference(10));
// console.log(MathUtil.getArea(10));
// class User{
//     static userCount = 0;
//     constructor(username){
//         this.username = username;
//         User.userCount++;
//     }
//     static getUserCount(){
//         console.log(`There are ${User.userCount} users online `);
//     }
//     sayHello(){
//         console.log(`hello, my username is ${this.username}`);
//     }
// }
// const user1 = new User("Bob");
// console.log(User.userCount);
// user1.sayHello();
// User.getUserCount();
// const user2 = new User("Mary");
// const user3 = new User("Lily");
// console.log(User.userCount);
// User.getUserCount();



//---------inheritance
// class Animal{
//     alive = true;
//     eat(){
//         console.log(`This ${this.name} is eating`);
//     }
//     sleep(){
//         console.log(`This ${this.name} is sleeping`);
//     }
// }
// class Rabbit extends Animal{
//     name = "rabbit";
//     run(){
//         console.log(`This ${this.name} is running`);
//     }
// }
// class Fish extends Animal{
//     name = "fish";
//     swim(){
//         console.log(`This ${this.name} is swimming`);
//     }
// }
// class Hawk extends Animal{
//     name = "hawk";
//     fly(){
//         console.log(`This ${this.name} is flying`);
//     }
// }
// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();
// console.log(rabbit.alive);
// rabbit.eat();
// fish.sleep();
// hawk.eat();
// rabbit.run();
// fish.swim();
// hawk.fly();





//----------super keyword
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     move(speed){
//         console.log(`This ${this.name} moves at a speed of ${speed}mph`);
//     }
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//         super(name, age);
//         this.runSpeed = runSpeed;
//     }
//     run(){
//         console.log(`This ${this.name} can run`);
//         super.move(this.runSpeed);
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//         super(name, age);
//         this.swimSpeed = swimSpeed;
//     }
//     swim(){
//         console.log(`This ${this.name} can swim`);
//         super.move(this.runSpeed);
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//         super(name, age);
//         this.flySpeed = flySpeed;
//     }
//     fly(){
//         console.log(`This ${this.name} can fly`);
//         super.move(this.runSpeed);
//     }
// }
// const rabbit = new Rabbit("rabbit", 1, 25);
// const fish = new Fish("fish", 2, 12);
// const hawk = new Hawk("hawk", 3, 50);
// console.log(rabbit.name);
// console.log(rabbit.age);
// console.log(rabbit.runSpeed);
// rabbit.run();
// fish.swim();
// hawk.fly();





//----------getter, setter
// class Rectangle{
//     constructor(width, height){
//         this.width = width;
//         this.height = height;
//     }
//     set width(newWidth){
//         if(newWidth > 0){
//             this._width = newWidth;
//         }
//         else{
//             console.error("Width must be a possitive number")
//         }
//     }
//     set height(newHeight){
//         if(newHeight > 0){
//             this._height = newHeight;
//         }
//         else{
//             console.error("Width must be a possitive number")
//         }
//     }
//     get width(){
//         return `${this._width.toFixed(1)}cm`;
//     }
//     get height(){
//         return `${this._height.toFixed(1)}cm`;
//     }
//     get area(){
//         return (this._width * this._height).toFixed(1);
//     }
// }
// const rectangle = new Rectangle(4, 3);
// rectangle.width = 5;
// rectangle.height = 6;
// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }else{
//             console.error("First name must be a non-empty string");
//         }
//     }
//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }else{
//             console.error("First name must be a non-empty string");
//         }
//     }
//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }
//         else{
//             console.error("Age must be non-negative number");
//         }
//     }
//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get fullName(){
//         return this._firstName + " " + this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }
// const person = new Person(420, 69, "pizza");




//-----------destructuring
// //----swap value
// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log(a);
// console.log(b);
// //----swap 2 elements in an array
// const colors = ["red", "green", "blue", "black", "white"];
// [colors[0], colors[4]] = [colors[4], colors[0]];
// console.log(colors);
// //----assign array elements to variables
// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;
// console.log(firstColor);
// //----extract values from objects
// const person1 = {
//     firstName: "Bob",
//     lastName: "Li",
//     age: 30,
//     job: "Fry cook",
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Lily",
//     age: 39,
// }
// // const{firstName, lastName, age, job} = person1;
// // console.log(firstName);
// const{firstName, lastName, age, job = "unemployed"} = person2;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);
// //----destructure in function parameters
// function displayPerson({firstName, lastName, age, job = "unemployed"}){
//     console.log(`name: ${firstName}  ${lastName}`);
//     console.log(`age: ${age}`);
//     console.log(`job: ${job}`);
// }
// const person1 = {
//     firstName: "Bob",
//     lastName: "Li",
//     age: 30,
//     job: "Fry cook",
// }
// const person2 = {
//     firstName: "Mary",
//     lastName: "Lily",
//     age: 39,
// }
// displayPerson(person1);
// displayPerson(person2);



//----------nested objects
// const person = {
//     fullName: "Bob Li",
//     age: 30,
//     isStudent: true,
//     hobbies: ["karate", "jellyfishing", "cooking"],
//     address:{
//         street: "124 Conch St.",
//         city: "BK", 
//         country: "Int. Water"
//     }
// }
// console.log(person.fullName);
// console.log(person.hobbies[2]);
// console.log(person.address.country);
// for(const property in person.address){
//     console.log(person.address[property]);
// }
// class Person{
//     constructor(name, age, ...address){
//         this.name = name;
//         this.age = age;
//         this.address = new Address(...address);;
//     }
// }
// class Address{
//     constructor(street, city, country){
//         this.street = street;
//         this.city = city;
//         this.country = country;
//     }
// }
// const person1 = new Person("Bob", 30, "124 Conch St.", "Bikini Bottom", "Int. Waters");
// const person2 = new Person("Patrick", 36, "1 Conch St.", "Bikini B", "Waters");
// const person3 = new Person("Lily", 6, "1 C St.", "Biki B", "L Waters");
// console.log(person1.address.city);




//-------------array objects
// const fruits = [{name:"apple", color:"red", calories: 95}, 
//                 {name:"orange", color:"orange", calories: 90},
//                 {name:"banana", color:"yellow", calories: 105},
//                 {name:"pineapple", color:"yellow", calories: 89},
//                 {name:"coconut", color:"white", calories: 48}];
// console.log(fruits[2].name);
// fruits.push({name:"grapes", color:"purple", calories:88});
// console.log(fruits);
// fruits.pop();
// fruits.forEach(fruit => console.log(fruit.name));
// const fruitsNames = fruits.map(fruit => fruit.name);
// console.log(fruitsNames);
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// console.log(yellowFruits);
// const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit: max);
// console.log(maxFruit);



//--------------sort()
// let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];
// fruits.sort();
// console.log(fruits);
// let numbers = [1, 2, 3, 4, 5, 11,10, 22, 34];
// numbers.sort();
// console.log(numbers);
// let numbers = [1, 2, 3, 4, 5, 11,10, 22, 34];
// numbers.sort((a,b) => a - b);
// console.log(numbers);
// const people = [{name:"Bob", age:30, gpa:3.0}, {name:"Patrick", age:20, gpa:4.0}, {name:"Lily", age:46, gpa:3.8}, {name:"Mary", age:69, gpa:3.0}];
// // people.sort((a, b) => a.age - b.age);
// people.sort((a, b) => a.name.localeCompare(b.name));
// console.log(people);



//-----------shuffle the array: fisher-yates algorithm
// const cards = ['A', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
// shuffle(cards);
// console.log(cards);
// function shuffle(array){
//     for(let i = array.length -1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i + 1));
//         [array[i], array[random] ]= [array[random], array[i]];
//     }
// }



//-------------Date objects
//---------Date(year, month, day, hour, minute, second, ms);
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// const date = new Date(0);
// const date = new Date(17000000000000);
// const date = new Date();
// const year = date.getFullYear();
// const month = date.getMonth();
// const day = date.getDate();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const dayOfWeek = date.getDay();
// console.log(date);
// console.log(year);
// console.log(month);
// console.log(day);
// console.log(hour);
// console.log(minutes);
// console.log(dayOfWeek);
// date.setFullYear(2023);
// console.log(date);
// const date1 = new Date("2023-12-31");
// const date2 = new Date("2023-1-1");
// if(date2 > date1){
//     console.log("happy new year");
// }







//--------------closure = a function defined inside of another function, the inner function has access to the variables and scope of the outer function
// function outer(){
//     let message = "Hello";
//     function inner(){
//         console.log(message);
//     }  
//     inner();
// }
// outer();
// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         console.log(`Count increased to ${count}`);
//     }
//     function getCount(){
//         return count;
//     }
//     return {increment, getCount};
// }
// const counter = createCounter();
// counter.increment();
// counter.increment();
// counter.increment();
// console.log(`The current count is ${counter.getCount()}`);
// 




//------------setTimeout() allows you schedule the execution of a function after an amount of ms
//------------setTimeout(callback, delay)
//------------clearTimeout(timeoutId) can cancel a timeout before it triggers
// function sayHello(){
//     window.alert("Hello");
// }
// setTimeout(sayHello, 3000);
// setTimeout(function(){
//     window.alert("hello"), 3000
// })
// setTimeout(()=> window.alert("hello"), 3000);
// const timeoutId = setTimeout(()=> window.alert("hello"), 3000);
// clearTimeout(timeoutId);
// let timeoutId;
// function startTimer(){
//     timeoutId = setTimeout(() => window.alert("hello"), 3000);
//     console.log("STARTED");
// }
// function clearTimer(){
//     clearTimeout(timeoutId);
//     console.log("CLEARED");
// }




//---------------digital clock program
// function updateClock(){
//     const now = new Date();
//     let hours = now.getHours();
//     const meridiem = hours >= 12? "PM" :"AM";
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2,0);
//     const minutes = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
//     document.getElementById("clock").textContent = timeString;
// }
// updateClock();
// setInterval(updateClock, 1000);




//--------------stop watch
// const display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapseTime = 0;
// let isRunning = false;
// function start(){
//     if(!isRunning){
//         startTime = Date.now() - elapseTime;
//         timer = setInterval(update, 10);
//         isRunning = true;
//     }

// }
// function stop(){
//     if(isRunning){
//         clearInterval(timer);
//         elapseTime = Date.now() - startTime;
//         isRunning = false;
//     }
// }
// function reset(){
//     clearInterval(timer);
//     startTime = 0;
//     elapseTime = 0;
//     isRunning = false;
//     display.textContent = "00:00:00:00";
// }
// function update(){
//     const currentTime = Date.now();
//     elapseTime = currentTime - startTime;
//     let hours = Math.floor(elapseTime / (1000 * 60 * 60));
//     let minutes = Math.floor(elapseTime / (1000 * 60) % 60);
//     let seconds = Math.floor(elapseTime / 1000 % 60);
//     let milliseconds = Math.floor(elapseTime % 1000 / 10);
//     const formattedTime = [
//         String(hours).padStart(2, "0"),
//         String(minutes).padStart(2, "0"),
//         String(seconds).padStart(2, "0"),
//         String(milliseconds).padStart(2, "0"),
//     ].join(":");

//     display.textContent = formattedTime;
// }
class Stopwatch{
    constructor(displayElement){
        this.display = displayElement;
        this.timer = null;
        this.startTime = 0;
        this.elapseTime = 0;
        this.isRunning = false;
    }
    start = () => {
        if(!this.isRunning){
            this.startTime = Date.now() - this.elapseTime;
            this.timer = setInterval(this.update, 10);
            this.isRunning = true;
        }
    };
    stop = () => {
        if(this.isRunning){
            clearInterval(this.timer);
            this.elapseTime = Date.now() - this.startTime;
            this.isRunning = false;
        }
    };
    reset = () => {
        clearInterval(this.timer);
        this.startTime = 0;
        this.elapseTime = 0;
        this.isRunning = false;
        this.display.textContent = "00:00:00:00";
    };
    update = () =>{
        const currentTime = Date.now();
        this.elapseTime = currentTime - this.startTime;
        const hours = Math.floor(this.elapseTime/(1000*60*60));
        const minutes = Math.floor((this.elapseTime/(1000*60))%60);
        const seconds = Math.floor((this.elapseTime/1000)%60);
        const milliseconds = Math.floor((this.elapseTime%1000)/10);
        const formattedTime = [
            String(hours).padStart(2, "0"),
            String(minutes).padStart(2, "0"),
            String(seconds).padStart(2, "0"),
            String(milliseconds).padStart(2, "0"),
        ].join(":");
        this.display.textContent = formattedTime;
    };
}
const display = document.getElementById("display");
const stopwatch = new Stopwatch(display);
document.getElementById("startBtn").onclick = stopwatch.start;
document.getElementById("stopBtn").onclick = stopwatch.stop;
document.getElementById("resetBtn").onclick = stopwatch.reset;







