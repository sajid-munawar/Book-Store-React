import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import checkStatusReducer from './categories/categories';

const rootReducer = combineReducers({
  books: booksReducer,
  status: checkStatusReducer,
});

const store = configureStore(rootReducer);

export default store;
