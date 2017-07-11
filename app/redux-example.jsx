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

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Wungjae'
});


console.log('Name should be Wungjae', store.getState());
