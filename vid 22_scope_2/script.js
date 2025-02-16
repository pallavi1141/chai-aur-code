
//##########################....scopes...###########################


function one() {
  const username = "sam";
  // console.log(username)

  function two() {
    const website = "youtube";
    // console.log(username);
    // console.log(website);

  }
  // console.log(website)
  two();
}
// console.log(username)

one();


if(true){
  const username = "sam"
  // console.log(username)
      if(username === "sam"){
        const website = "youtube"
        // console.log(username + website)

  }
  // console.log(username)//its defined here
}
// console.log(website)// its not defined






// console.log (addOne(5))    // we can access the before initialization
//simple function initialization
function addOne (num){
  return num + 1
}
// console.log (addOne(5))





console.log(addTwo(6)) // we can't access 'addTwo' before initialization because function hold in the variable
//function hold in the variable
const addTwo = function(num){
  return num + 2
}
// console.log(addTwo(6))
