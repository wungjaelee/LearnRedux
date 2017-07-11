var redux = require('redux');

console.log('Starting redux example');

// Pure function
// 1. same output for same input
// 2. no global variables used
// 3. synchronous
function add (a, b) {
  return a + b;
}

var a = 3;
function add (b) {
  return a + b;
}

var result;
function add (a, b) {
  result = a + b;
  return result;
}

function add (a, b) {
  return a + b + new Date().getSeconds();
}

function changeProp(obj) {
  return {
    ...obj,
    name: 'Jen'
  }
}

var startingValue = {
  name: "Andrew",
  age: 25
}

var res = changeProp(startingValue);
console.log(startingValue)
console.log(res);
