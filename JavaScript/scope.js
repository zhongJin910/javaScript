// scope (作用域)

// scopeOne
var scopeOne = "scopeOne";
function scopeOneFn() {
  console.log(scopeOne, "scopeOne"); // Success
}
scopeOneFn();
console.log(scopeOne, "scopeOne"); // Success

// scopeTwo
function scopeTwoFn() {
  scopeTwo = "scopeTwo";
  console.log(scopeTwo, "scopeTwo"); // Success
}
scopeTwoFn();
console.log(scopeTwo, "scopeTwo"); // Success

// scopeThree
function scopeThreeFn() {
  var scopeThree = "scopeThree";
  console.log(scopeThree, "scopeThree"); // Success
}
scopeThreeFn();
console.log(scopeThree, "scopeThree"); // Error (carName is not define)
