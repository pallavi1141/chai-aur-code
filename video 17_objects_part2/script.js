// *****************************.....singleton object....*************************************

// const tinderUser = new object ()// singleton object
const tinderUser = {}; //non singleton object

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = "false";

// console.log(tinderUser.id);
// console.log(object.keys(tinderUser));
// console.log(object.value(tinderUser));
// console.log(object.entries(tinderUser));
// console.log(tinderUser.hasOwnproperty("isLoggedIn"));
console.log(tinderUser.name)

// const regularUser = {
//   email: "some@gmail.com",
//   fullName: {
//     username: {
//       firstName: "pallavi",
//       lastName: "rajput",
//     },
//   },
// };

// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.username.firstName);
// console.log(regularUser.fullName.username.lastName);

//merge/combine the value
// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// const obj3 = { 5: "e", 6: "f" };

// const obj4 = { obj1, obj2 };// not recommended
// const obj4 = object.assign({}, obj1, obj2, obj3);
// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);


// const users = [
//   {
//     id: 1,
//     email: "h@gmail.com",
//   },
//   {
//     id: 2,
//     email: "p@gmail.com",
//   },
//   {
//     id: 3,
//     email: "g@gmail.com",
//   },
// ];

// users[3].id;









//video 18.... de-structure

// const course = {
//   courseName: "js in hindi",
//   price: "999",
//   courseInstructor: "sheri"
  
// };

//accessed

// console.log(course.courseName)
// const {courseName:Name}=course
// console.log(Name)

// console.log(course.courseInstructor)
// const {courseInstructor:instructor} = course
// console.log(instructor);


// console.log(course.price)
// const {price:money}= course
// console.log(money)

//jSON API(keys and value both in the string) As a object format
{
  // "name": "Ruhi",
  // "courseName":"js in hindi",
  // "price":"free"

}

//array format

// [
//   {},
//   {},
//   {},
// ]