//###############################################...Dates & Times....#########################################

let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate);

//first method to declare Date
// let myCreatedDate = new Date(2025, 0, 28);
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

//second method to Declare date with time
// let myNewDate = new Date(2025, 3, 28, 7, 15);
// console.log(myNewDate.toLocaleString());

let myFirstDate = new Date("2025-02-14");
// console.log(myFirstDate.toDateString())
// console.log(myFirstDate.toLocaleString());

// let myFirstDate = new Date("04-13-2025");
// console.log(myFirstDate.toDateString())
// console.log(myFirstDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myFirstDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getDate() + 1)
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear())
// console.log(newDate.getDay())

newDate.toLocaleString("default", {
  weekday: "long",
});
