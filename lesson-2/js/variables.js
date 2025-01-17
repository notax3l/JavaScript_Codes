
/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;
/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = 'Tanishq';
myAge = 19;	
let myJob = 'Student';
/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */




// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5;
let manufacturer = 'Toyota';




// Strings (use '' or "")
let typeCar= "2005"+manufacturer;
//use of backtick 
let typeCar1= `2005 ${manufacturer}`;
// Booleans
let iAmTired = true;

// Arrays
let myNameArray = ['Tanishq', 'Pratap', 'Singh'];
let myNumArray = [1, 2, 3, 4, 5];
let myMixedArray = ['Tanishq', 19, true,myNameArray];
// Objects
let myDog={
    name:"Battle",
    age:2,
    breed:"bulldog",
    size:"large"
}


// STEP 5: Typing (JavaScript is a loosely-typed language)
console.log(typeof myDog);
