//***********************************javascript variables************************************/

const accountId = 4580;
let accountEmail = "pallavi@gmail.com";
var accountPassword = "12345";
accountCity = "jaipur";
let accountState;

// prefer not to use var
// because of issue in block scope and functional scope
// accountId = 45 not allowed we don't changed the const variable.
console.log(accountId);

accountEmail = "pallavirajput@gmail.com";
accountCity = "punjab";
accountPassword = "390"; // This is allowed we can changed the this variable.
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
