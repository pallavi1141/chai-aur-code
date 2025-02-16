//$$$$$$$$$$$$$$$$$$$$$$$$$$$$.... video 20....$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

function calculateCartPrice (...num1){
    return num1
  }
  // console.log(calculateCartPrice(200, 300, 500))
  
  
  
  function calculation(val1, val2, ...num2){
  
    return num2
   }
  // console.log(calculation(500, 600, 700, 800))
  
  
  
  
  
  // How to used object in the function
  const user = {
  
    username:"hitesh",
    price: 199
  }
  
  
  function handleObject(anyObject){
      console.log(`username is ${anyObject.username} and price is${anyObject.price}`)
  
  }
  
  // handleObject(user)
  
  //direct pass object in the function
  handleObject({
    username: "sam",
    price:499
  
  })


  
  
  
  //How to used array in the function
  const myNewArray =[200, 400, 800, 600]
  
  function returnSecondValue(getArray){
    return getArray[1]
  
  }
  
  // console.log(returnSecondValue(myNewArray))
  // direct pass the array in the function
  console.log(returnSecondValue([200, 400, 800, 600]))


  let Array = ["sam", "sang", "game", "plane"]

  function gameValue (obtainArray){
    return obtainArray

  }
  console.log(gameValue(Array))
  
  
  