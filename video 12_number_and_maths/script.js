//####################################################...Number...and...maths...################################

// const score = 400;
// console.log(score);

const balance = new Number(150);
// console.log(balance);

// console.log(balance.toString()); //print 150
// console.log(balance.toString().length); //print 3
// console.log(balance.toFixed(3)); //print 150.000

// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(2)); //print 1.2e+2
// console.log(otherNumber.toPrecision(3)); //print 124
// console.log(otherNumber.toPrecision(4)); //print 123.9
// console.log(otherNumber.toPrecision(5)); //print 123.90

const hundreds = 1000000;
// console.log(hundreds.toLocaleString());// print 1,00,00,00
// console.log(hundreds.toLocaleString('en-In'));// print 10,00,000
// console.log(hundreds.toString().length)//print 7


//++++++++++++++++++++++++++++++++++..Maths..++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-9)); //print 9 (.abs )property  convert negative value into positive value.
// console.log(Math.abs(9)); //positive value will be same print 9
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.3));
// console.log(Math.max(4, 8, 8, 4, 1, 0));
// console.log(Math.min(4, 8, 8, 4, 1, 0));


// console.log(Math.random()); //it  gives value range 0 to 1
// console.log((Math.random()* 10) + 1); //+ avoids the 0 value and value gives the above the zero.

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1))
console.log(Math.floor(Math.random() * (max - min + 1)))//if we are excess with (math.floor) then gives a single value 
console.log(Math.floor(Math.random() * (max - min + 1)) + min)// if we are add (min) then gives a value around it min value . which give above (const min = 10)

