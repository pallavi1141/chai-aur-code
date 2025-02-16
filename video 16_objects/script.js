//###############################..... objects.....#######################################3

//symbol declare
const mySym = Symbol("key1");

//objects literal
const JsUser = {
  name: "pallavi",
  "full name": "pallavi rajput",
  [mySym]: "Key3",// array bract always contain symbol key
  age: 20,
  location: "jaipur",
  email: "pallavi@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "tuesday"],
};




//excess
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(typeof JsUser["email"]);
// console.log(JsUser.age);
// console.log(typeof JsUser["age"])
// console.log(JsUser["full name"]);
// console.log(typeof JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof JsUser["isLoggedIn"]);
// console.log(typeof JsUser["lastLoginDays"]);




//function declare
JsUser.greeting = function () {
  console.log("hello js user");
};
// (JsUser.greeting); //print (function) because we don't call the function here
// JsUser.greeting() // print (hello js user)




JsUser.greetingTwo = function () {
  console.log(`Hello js user, ${this.location}`);
  console.log(`Hello what is your email: ${this.email}`);
};
// (JsUser.greetingTwo()); 



JsUser.greetingThree = function(num1, num2, name){
  return num1 + num2 + name
  }
// console.log(JsUser.greetingThree(4, 6, "sam"))








//changed the value and freeze them
JsUser.email = "pallavi@google.com";
console.log(JsUser.email)
// object.freeze(JsUser.email)
JsUser.email = "pallavi@microsoft.com";
// console.log(JsUser.email)

JsUser.age = 19;
// object.freeze(JsUser)
JsUser.age = 22
console.log(JsUser.age)
