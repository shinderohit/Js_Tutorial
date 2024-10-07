const name = "rohit"
const repoConst = 50 

//console.log(name + repoCount + ' value');

//console.log(`Hello my name is ${name} and my repo name count id ${50}`);

const gameName = new String("Rohit-Sh-com")

// console.log(gameName[5]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("h"));

const newString = gameName.substring(4,7);
// console.log(newString);

const anotherString = gameName.slice(-8, 4)
// console.log(anotherString);

const newStringOne = "  Rohit  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://rohit.com/rohit%20shinde"
console.log(url.replace('%20','-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));