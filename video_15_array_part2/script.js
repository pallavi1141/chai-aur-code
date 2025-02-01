const marvel_heros = ["Ironman", "Thor", "Spiderman"];
const dc_heros = [" flash", "batman", "superman"];

marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// console.log(marvel_heros[3]);

const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);

//spared the value and form a simply one array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array)


//from and of property makes a array
// console.log(Array.isArray("pallavi"));//print false
console.log(Array.from("pallavi")); //form a array from a string
// console.log(Array.from({ name: "pallavi" }));

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1, score2, score3))