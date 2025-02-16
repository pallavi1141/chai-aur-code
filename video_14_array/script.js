//**********************************************..... Array.....***************************************** */
//Array syntax
const myArray = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj", "guddu", "sanju", "sameer"];
const myArr2 = new Array(1, 2, 3, 4, 5);
// console.log(myArray[1]);
// console.log(myHeros[4]);
// console.log(myArr2[3]);





//Array methods

// myArray.push(5);
// myArray.push(6);
// myArray.pop(); //print  (pop remove the last value)
// myArray.unshift(7)// print (add a value 7 in the starting)
// myArray.shift ()  //print (remove 7 and zero)
// console.log(myArray); //print 0, 1, 2, 3, 4, 5, 6



// console.log(myArray.includes(7)) //print (false)
// console.log(myArray.includes(6)) //print (true)
// console.log(myArray.indexOf(6)) //print (6) because 6 exit
// console.log(myArray.indexOf(8)) //print (-1) because 8 no exit

const newArr = myArray.join();
// console.log(myArray) //print [1, 2, 3, 4, 5 ] as a Array
// console.log(newArr)  // print  0, 1, 2, 3, 4, 5  as a String
// console.log(typeof newArr)
// console.log(typeof myArray)





//slice, splice

// console.log("A", myArray); //print A[0, 1, 2, 3, 4, 5]
// console.log("B", myArray); //print B[0, 1, 2, 3, 4, 5]
// console.log("c", myArray);

const myn1 = myArray.slice(1, 5);
// console.log(myn1); // print [1, 2]

const myn2 = myArray.splice(1,3);
console.log("d", myArray);
console.log(myn2); // print [1, 2, 3]
