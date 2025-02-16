const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = [" flash", "batman", "superman"];

//merging Arrays
marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[2]);
// console.log(marvel_heros.includes("Thor"))

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


let ArrOne = [1, 2, 3, 4]
let ArrTwo = [5, 6, 7, 8]

// ArrOne.push(ArrTwo)
// console.log(ArrOne);
// console.log(ArrOne.concat(ArrTwo))

let newArr = [...ArrOne, ...ArrTwo]
// console.log(newArr)


//spared the value and form a simply one array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array)




//from and of property used in the form a Array
// console.log(Array.isArray("pallavi"));//print false
// console.log(Array.from("pallavi")); //form a array from a string
// console.log(Array.from({ name: "pallavi" }));


console.log(Array.isArray("code"));
console.log(Array.from("coding"));//form an array from a string


let score1 = 100
let score2 = 100
let score3 = 100

// console.log(Array.of(score1, score2, score3))





