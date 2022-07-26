import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllBooks } from '../redux/books/apiReducer';
import Book from './Book';
import Navbar from './Navbar';
import Form from './form';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBooks());
  }, []);

  const books = useSelector((state) => state.book);
  const booksUi = books.map((book) => (
    <Book
      key={book.item_id}
      title={book.title}
      author={book.author}
      id={book.item_id}
    />
  ));
  return (
    <div>
      <Navbar />
      {booksUi}
      <Form />
    </div>
  );
}

export default Books;
