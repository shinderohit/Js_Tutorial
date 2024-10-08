// Primitive 7 Datatypes
//String, Number, Boolean, Null, Undefined, Symbol, BigInt

const num = 100;
const numValue = 100.3;
const isLoggeIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 24578961253258n

// Reference (Non Primitive)
//Array, Objects, Function

const heros = ["Ironman","thor","hulk"];
let myjob = {
    name: "rohit",
    age : 26
}

const myFunction = function (){
    console.log("Hello World");
}

// console.log(typeof heros)

//+++++++++++++++++++++++++++++++++

//Stack(Primitive), Heap (Non=Primitive)

let myYouTube = "RohitShinde"

let anyName = myYouTube
anyName = "chaiwithcode"

console.log(anyName)
console.log(myYouTube)

let userOne = {
    email: "user@gmail.com", 
    id: "user@ybl"
}

let userTwo = userOne

userTwo.email = "rohit@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)