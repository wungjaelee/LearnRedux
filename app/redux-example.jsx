var redux = require('redux');

console.log('Starting redux example');

// Pure function
// 1. same output for same input
// 2. no global variables
// 3. synchronous

var reducer = (state = {name: 'anonymous'}, action) => {
  return state;
}
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);
