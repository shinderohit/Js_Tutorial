// for loop
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best")
    }
    // console.log(element);
    
}
// console.log(element);


for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} & inner loop ${i}`);
        // console.log(i + "X" + j + "=" + i*j);
        
    }
}

let myArray = ["flsh", "batman", "superman"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break & continue

// for (let i = 1; i <= 20; i++) {

//     if (i == 5) {
//         console.log(`Detected 5`)
//         break;
//     }
//     console.log(`value of i ${i}`);
    
// }

for (let i = 1; i <= 20; i++) {

    if (i == 5) {
        console.log(`Detected 5`)
        continue;
    }
    console.log(`value of i ${i}`);
    
}