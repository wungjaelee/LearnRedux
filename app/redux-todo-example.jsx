var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []
};

var reducer = (state = stateDefault, action) => {
  switch (action.type) {
    case 'CHANGE_SEARCHTEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

var store = redux.createStore(reducer);

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'nicenice'
});
console.log('searchText should be "nicenice"', store.getState());
