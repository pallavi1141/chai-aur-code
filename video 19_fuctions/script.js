//#######################################....functions...###########################################

function sayMYName() {
  console.log("p");
  console.log("a");
  console.log("l");
  console.log("l");
  console.log("a");
  console.log("v");
  console.log("i");
}
// sayMYName()   // call the function





function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

// addTwoNumbers(6, 4);
// addTwoNumbers(6, "4");
// addTwoNumbers(6, null);
// addTwoNumbers(6, "a");




function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  console.log(number1 + number2); // print 10
  return result;
  console.log("pallavi"); // don't execute after the return value
}

//   let result = addTwoNumbers(6, 4)
//   console.log("Result:", result) // print  (Result: 10)







function addOtherNumbers(number3, number4) {
  return number3 + number4;
}

let result = addOtherNumbers(4, 4);
// console.log("Result:", result); // print  (Result: 8)






function LoginUserMessage(username) {
  return `${username} just Logged in`
}


// console.log(LoginUserMessage("pallavi"))
// console.log(LoginUserMessage("")) //print (just logged in)
// console.log(LoginUserMessage())  //print (undefined just logged in)




function signName(Name = "sam"){

    if(Name === undefined ){
        
        console.log("please enter your number")
        


    }
    return `${Name} just sign in`
        

}

console.log(signName("sunder"))