// Actions
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const bookList = [
  { title: 'Design Patterns', author: 'Erich Gamma', id: '12' },
  { title: 'Patterns of Enterprise Application Architecture', author: ' Martin Fowler', id: '13' },
  { title: 'Code Complete', author: 'Steve Mcconnell', id: '14' },
  { title: 'Enterprise Integration Patterns', author: 'Gregor Hohpe', id: '15' },
];
// Reducer
// eslint-disable-next-line default-param-last
const booksReducer = (state = bookList, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          title: action.title,
          author: action.author,
          id: action.id,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
// Action creators
export const addBook = (book) => ({
  type: ADD_BOOK,
  ...book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default booksReducer;
