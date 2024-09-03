// if
const isUserloggedIn = true

// if (2==2) {
    
// }

// if (2 === "2") {
//     console.log("executed");
// }

// <, >, <=, >=, ==, !=, ===

const temperature = 41

// if (temperature === 41) {
//     console.log("less than 50");
// }
// console.log("greater than 50")

// if (temperature === 51) {
//     console.log("less than 50");
// }else{
//     console.log("greater than 50")
// }
// console.log("executed");

// const score = 200

// if (score > 100) {
//     let power = "fly"    
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than");
// }else if (balance < 750){
//     console.log("less than 750")
// }else if (balance < 900){
//     console.log("less than 750")
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged In");
}