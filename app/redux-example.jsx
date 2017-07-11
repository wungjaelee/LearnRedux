var redux = require('redux');

console.log('Starting redux example');

// Pure function
// 1. same output for same input
// 2. no global variables
// 3. synchronous

// Name reducer and action genreators
// ----------------

var nextHobbyId = 1;
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  };
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  };
};

// Hobbies reducer and action genreators
// ----------------
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  };
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  };
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  };
};

// Movies reducer and action genreators
// ----------------
var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          movieTitle: action.movieTitle,
          movieGenre: action.movieGenre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;
  };
};

var addMovie = (movieTitle, movieGenre) => {
  return {
    type: 'ADD_MOVIE',
    movieTitle,
    movieGenre
  };
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  };
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log(state);
});
// unsubscribe();

var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(changeName('Wungjae'))

store.dispatch(addHobby('running'))

store.dispatch(addMovie('Avengers', 'Action'))

store.dispatch(changeName('Emily'))

store.dispatch(addHobby('swimming'))

store.dispatch(addMovie('Lucky for you', 'Thats what I like'))

store.dispatch(removeHobby(2))

store.dispatch(removeMovie(2))
