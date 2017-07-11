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

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log("searchText is " + state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('currentState', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'nicenice'
});
console.log('searchText should be "nicenice"', store.getState());
store.dispatch({
  type: 'CHANGE_SEARCHTEXT',
  searchText: 'learn Redux'
});
