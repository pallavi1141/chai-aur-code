//************************************************memory************************************** */

//2 types memory : stack memory, Heap memory
// stack (primitive), Heap (non-primitive)reference




//primitive datatype.stack memory used in primitive datatypes. in which variables obtain copy value not a original value from the other variable value . like that this example (myYoutubeName)variable value is ("hiteshchoudharydotCom")and (anotherName)variable occurs same value because (anotherName)variable value is myYoutubeName and this variable value is"hiteshchoudharydotCom". so both variable occur same value.while when we have change the value of   (anotherName) variable ("chaiAurCode"). then this variable occur this value not a old copy value and ( myYoutubeName)variable occur ("hiteshchoudharydotCom") . so second variable occur copy value not a original value of first variable.


//primitive datatypes
let myYoutubeName = "hiteshchoudharydotCom"

let anotherName = myYoutubeName
let differentName = myYoutubeName
anotherName = "chaiAurCode"
differentName = "copyCode"
console.log(myYoutubeName);
console.log(anotherName );
console.log(differentName);








//object this is non-primitive datatype. Heap memory used in (non-primitive)datatypes. in which obtain original value (reference). userOne occur reference from (email: "user@google.)com",(// upi: "user@ybl") but when we have changed userTwo.email="hitesh@gmail.com" then userOne also give reference from (.email="hitesh@gmail.com").in which variables occur original value /reference.

//non-primitive datatype
let userOne = {
    email: "user@google.com",
    // upi: "user@ybl"
}


let userTwo = userOne
userTwo.email="hitesh@gmail.com"
console.log(userOne.email )
console.log(userTwo.email )
