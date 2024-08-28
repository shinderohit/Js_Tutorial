const myNumber = [1,2,3,4,5,6,7,8,9,10]

// const sumNum = myNumber.reduce(
//     function (num1, num2) {
//         console.log(`num1: ${num1} & num2: ${num2}`);
//         return num1 + num2
//     }, 0)

const sumNum = myNumber.reduce((num1, num2) => num1+num2,0)
// console.log(sumNum);

const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "mobile dev course",
        price: 3999
    },
    {
        itemName: "data science course",
        price: 4999
    },
    {
        itemName: "python course",
        price: 5999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price,0)

console.log(priceToPay);
