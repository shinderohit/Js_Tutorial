const user = {
    username: "Rohit",
    price: 999,
    welcomeMsg: function(){
        // console.log(`${this.username} , welcome to website`);  
        // console.log(this);
    } 
}

// user.welcomeMsg()
// user.username="Sam"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "Shinde"
//     console.log(this.username)
// }


// const chai = function(){
//     let username = "Rohit"
//     console.log(this.username); 
// }

// const chai = () => {
//     let username = "Rohit"
//     console.log(this); 
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username:"Rohit"})


console.log(addTwo(5,8));

const myArray = [2,3,5,6,8]

myArray.forEach()