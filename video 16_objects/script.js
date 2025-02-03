//###############################..... objects.....#######################################3

//symbol declare
const mySym = Symbol("key1");

//objects literal
const JsUser = {
  name: "pallavi",
  "full name": "pallavi rajput",
  [mySym]: "Key1",
  age: 20,
  location: "jaipur",
  email: "pallavi@gmail.com",
  isLoggedIn: true,
  lastLoginDays: ["monday", "tuesday"],
};

//function declare
JsUser.greeting = function () {
  console.log("hello js user");
};
// console.log(JsUser.greeting); //print (function)
// console.log(JsUser.greeting()); // print (hello js user)




JsUser.greetingTwo = function () {
  console.log(`hello js user, ${this.name}`);
};
console.log(JsUser.greetingTwo()); 





//excess
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);

//changed the value and freeze them
JsUser.email = "pallavi@google.com";
// console.log(JsUser)
// object.freeze(JsUser)
JsUser.email = "pallavi@microsoft.com";
// console.log(JsUser)

JsUser.age = 19;
// object.freeze(JsUser)
// JsUser.age = 22
// console.log(JsUser)
