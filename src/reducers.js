// src/reducers.js
import { combineReducers } from "redux";
import authorsReducer from "./features/authors/authorsSlice";
import booksReducer from "./features/books/booksSlice";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer,
});

export default rootReducer;




import { createStore } from "redux";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);