//*************************************... This & arrow function........************************

const user = {
  userName: "sam",
  price: 999,

  welcomeMessage: function (name) {
    console.log(`${this.userName}, welcome to website`);
    // console.log(this) // this tell about the current context
  },
};
// user.welcomeMessage()
// user.userName = "sang"
// user.welcomeMessage()
// console.log(this)  // print {}






//"this" it's work within  object not work simply function

// function chai (){
//     let userName = "hitesh"
    // console.log(this.userName)
// console.log(this)
// }
// chai()





// const chai = function(){
//     let userName = "hitesh"
    // console.log(this.userName)
//      console.log(this)

// }
// chai()



//it's a arrow function in which only "this" give a {} don't access the any value that means "this" work within object while within arrow function  but don't access the variable value like that username
const code = () => {
    let userName = "hitesh"
    // console.log(this.userName)
    // console.log(this) // print {}

}
code()



// arrow function
// basic syntax of arrow function 
// () => {}

    const addOne = (num1, num2) => {
        return num1 + num2
    }
    // console.log(addTwo(3,2))


    const addTwo = (num1, num2) => num1 + num2  //don't need return here
    // console.log(addTwo(5,2))


    const addThree = (num1, num2) => (num1 + num2)  //don't need return here
    // console.log(addThree(3,2))

    
    // return object 
    const addFour = (num1, num2) => ({userName: "calc"})
     console.log(addFour())



     
     const myArr =[2, 3, 6, 9]

     myArr.forEach(function(){})
     myArr.forEach(() => {})
     myArr.forEach(() => ())