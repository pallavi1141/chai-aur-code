//########################################datatypes#summary#######################################//

//primitive datatype
//7 types: string, number, BooLearn, null, undefined, symbol, BigInt

//Examples
const score = 100;
const scoreValue = 100.45;

const isLoggedIn = false; //BooLearn
const outsideTemp = null; //nul means empty not a  0 value
let userEmail; //undefined

const id = Symbol("123");
const anotherId = Symbol("123");
// console.log(id === anotherId);

const bigNumber = 5780923477746236523n; //BigInt







//Reference (non primitive)datatype
// Array, objects, functions

// Examples of Array
const greatMan = ["shaktiman", "naagraj", "doga"];

// Example of objects
let myObj = {
  name: "ram",
  age: 20,
  score: 70,
};

// Example of functions
const myFunction = function () {
  // console.log("hello world");
}






//identify the primitive datatypes
console.log(typeof undefined, typeof age, typeof null, typeof "" );
console.log(typeof "");//string
console.log(typeof age);//number
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof bigNumber); //BigInt
console.log(typeof isLoggedIn);//BooLearn
console.log(typeof id); //symbol


//identify the non primitive datatypes
// console.log(typeof myFunction);//function
// console.log(typeof greatMan);//object
// console.log(typeof myObj);//object
