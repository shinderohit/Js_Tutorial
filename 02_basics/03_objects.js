// singlton
// object.create

// object literals

const mySym = Symbol('key1')


const jsUser = {
    name:"Rohit",
    "full name": "Rohit Shinde",
    [mySym]: "myKey1",
    age: 26,
    location : "Mumbai",
    email:"rohitshinde@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}


// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(jsUser.full name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "rohit@chatgpt.com"
// Object.freeze(jsUser)

jsUser.email = "rohit@microsoft.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greetingTwo());