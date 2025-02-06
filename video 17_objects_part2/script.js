// *****************************.....singleton object....*************************************

// const tinderUser = new object ()// singleton object
const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser);
// console.log(object.keys(tinderUser));
// console.log(object.value(tinderUser));
// console.log(object.entries(tinderUser));
// console.log(tinderUser.hasOwnproperty("isLoggedIn"));

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    username: {
      firstname: "pallavi",
      lastname: "rajput",
    },
  },
};

// console.log(regularUser.email);
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.firstname);
// console.log(regularUser.fullname.username.lastname);

//merge/combine the value
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = { obj1, obj2 };// not recommended
// const obj4 = object.assign({}, obj1, obj2, obj3);
const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 2,
    email: "p@gmail.com",
  },
  {
    id: 3,
    email: "g@gmail.com",
  },
];

users[3].id;




//video 18.... de-structure

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "sheri"
  
};

//accessed
course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor);


//jSON API(keys and value both in the string) As a object format
{
  "name": "Ruhi",
  "courseName":"js in hindi",
  "price":"free"

}

//array format

[
  {},
  {},
  {},
]