// Credits & Source: http://www.newthinktank.com/2015/09/learn-javascript-one-video/ from https://www.youtube.com/watch?v=fju9ii8YsGs

// ---------- ARRAYS ----------
// Arrays have variable sizes and can contain multiple types in JS
var tomSmith = ["Tom Smith", "123 Main", 120.50];
 
// Access first array item
document.write("1st State : ", tomSmith[0], "<br />");
 
// Add an item
tomSmith[3] = "tsmith@aol.com";
 
// Overwrite index 2 and fit everything else after index 2 without
// overwriting (Put 0 for second parameter to not overwrite)
tomSmith.splice(2, 1, "Pittsburgh", "PA");
 
// Delete the 4th index item
tomSmith.splice(4,1);
 
// Convert an array into a string (Also use toString())
document.write("Array : ", tomSmith.valueOf(), "<br />");
 
// Convert an array into a string with separator
document.write("Array : ", tomSmith.join(", "), "<br />");
 
// Delete an index
delete tomSmith[3];

// Sort an array (reverse() for reverse sort)
// Works for sorting strings
tomSmith.sort();

// Sort numbers
var numbers = [4,3,9,1,20,43];
 
// Descending sort return y - x
numbers.sort(function(x,y){ return x - y });

document.write("Num Array : ", numbers.toString(), "<br />");
 
// Combine arrays
var combinedArray = array1.concat(array2);
 
// Remove the last item
tomSmith.pop();
 
// Add items to the end
tomSmith.push("555-1212", "US");
 
// Deletes the first item - Returns popped element of array
tomSmith.shift();
 
// Adds item to the first index - Returns length of array
tomSmith.unshift("Tom Smith");
 
for (var i = 0; i < tomSmith.length; i++) {
  document.write(tomSmith[i], "<br />");
}
 
// ---------- FUNCTIONS ----------
// Functions provide code reuse and eliminate repetitive code
 
// Define a function that checks if a value is in an array
function inArray(arrayToCheck, value){
  for(i = 0; i < arrayToCheck.length; i++){
    if(arrayToCheck[i] === value){
      return true;
    }
  }
  return false;
}
 
var randArray = [1,2,3,4,5];
 
document.write("In Array : ", inArray(randArray, 4), "<br />");
 
// Local variables defined in functions can't be accessed outside of
// the function
 
function times2(num){
  var var2 = 2;
  return num * var2;
}
 
// Causes Error : document.write("Val of var2 : ", var2, "<br />");
 
// Pass a function as a parameter
function times3(num){
  return num * 3;
}
 
function multiply(func, num){
  var x = func;
  return x(num);
}
 
document.write("3 * 15 = ", multiply(times3, 15), "<br />");
 
// Define a function expression
// We can assign functions to variables, store them in arrays,
// pass them into other functions and return them from functions
var triple = function(num){
  return num * 3;
};
 
document.write("3 * 45 = ", multiply(triple, 45), "<br />");
 
// Receive variable number of arguments
function getSum(){
  // this 
  // arguments[0]
  // arguments[1]
  var sum = 0;
  for(i = 2; i < arguments.length-2; i++){
    sum += arguments[i];
  }
  return sum;
}
 
document.write("Sum : ", getSum(1,2,3,4,5), "<br />");
 
// Return a variable number of values
function times2(theArray){
 
  var newArray = [];
  for(i = 0; i < theArray.length; i++){
    newArray.push(theArray[i] * 2);
  }
  return newArray;
}
 
document.write("Array Doubled : ", times2(1,2,3,4,5).toString(), "<br />");
 
// Recursive Function
function factorial(num){
  if(num <= 1){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
 
document.write("Factorial of 4 : ", factorial(4), "<br />");
 
// 1st: num = 4 * factorial(3) = 4 * 6 = 24
// 2nd: num = 3 * factorial(2) = 3 * 2 = 6
// 3rd: num = 2 * factorial(1) = 2 * 1 = 2
 
