// var c = 30

let a = 300

if (true){
    let a = 10 
    const b = 20 
    // console.log("Inner",a);
}

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Rohit"

    function two(){
        const website = "youtube"
        console.log(username)
    }
    // console.log(website);

    two()
    
}
// one()

if (true) {
    const username = "rohit"
    if (username === "rohit") {
        const website = "youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// +++++++++++++++++++ interesting ++++++++++++++++++++++++++++

console.log(addone(5));

function addone(num){
    return num + 1;
}

addTwo(5)

const addTwo = function(num){
    return num + 2
}
