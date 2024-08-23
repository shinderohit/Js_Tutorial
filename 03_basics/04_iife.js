// Immediately Invoked Function Expression

(function chai(){
    // named IIFE
    console.log(`DB1 Connnected`)
})();

( () => {
    console.log(`DB2 Connnected`)
} )();

( (name) => {
    console.log(`DB3 Connnected ${name}`)
} )('Rohit');


