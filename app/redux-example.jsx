var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '" target="_blank">View Your Location</a>'
  }
  console.log(state);
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Wungjae'))

store.dispatch(actions.addHobby('running'))

store.dispatch(actions.addMovie('Avengers', 'Action'))

store.dispatch(actions.changeName('Emily'))

store.dispatch(actions.addHobby('swimming'))

store.dispatch(actions.addMovie('Lucky for you', 'Thats what I like'))

store.dispatch(actions.removeHobby(2))

store.dispatch(actions.removeMovie(2))
