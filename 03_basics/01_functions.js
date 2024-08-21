
function sayMyName(){
    console.log("R");
    console.log("o");
    console.log("h");
    console.log("i");
    console.log("t");
}
// sayMyName();

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2 
    // console.log("Rohit");
    // return result;
    return number1 + number2;
}

const result = addTwoNumber(4, 5)

// console.log("Result: ", result);

function loginUserMsg(username = "Shinde"){
    // if(username === undefined){ OR
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMsg("Rohit"))
// console.log(loginUserMsg("Rohit"))

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500,700));

const user = {
    username: "Rohit",
    prices: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject({
    username: "Sam",
    price: 199
})

const myNewArray = [200,400,100,900]

function returnSecondValue(getArray){
    return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,900]));
