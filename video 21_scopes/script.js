//*****************************************....scopes....*************************************** */
//global scope
// let a = 10;
// const b = 20;
// var c = 30;


// var c = 300
let a = 400

//block scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30;
  console.log("INNER: ", a)
  
 
}

console.log(a);
// console.log(b);
// console.log(c);

