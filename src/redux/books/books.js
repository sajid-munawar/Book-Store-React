import { useId } from 'react';
// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const bookList = [
  { title: 'Design Patterns', author: 'Erich Gamma', id: `${useId()}` },
  { title: 'Patterns of Enterprise Application Architecture', author: ' Martin Fowler', id: `${useId()}` },
  { title: 'Code Complete', author: 'Steve Mcconnell', id: `${useId()}` },
  { title: 'Enterprise Integration Patterns', author: 'Gregor Hohpe', id: `${useId()}` },
];
// Reducer
const booksReducer = (state = bookList, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
// Action creators
export const addBook = ({ title, author }) => ({
  type: ADD_BOOK,
  book: {
    title,
    author,
  },
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
