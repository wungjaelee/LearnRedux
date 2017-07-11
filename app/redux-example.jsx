var redux = require('redux');

console.log('Starting redux example');

// Pure function
// 1. same output for same input
// 2. no global variables
// 3. synchronous

var reducer = (state = {name: 'anonymous'}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Wungjae'
});


store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});


console.log('Name should be Wungjae', store.getState());
