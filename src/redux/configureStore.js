import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import apiReducer from './books/apiReducer';

const rootReducer = combineReducers({
  book: apiReducer,
  status: checkStatusReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
