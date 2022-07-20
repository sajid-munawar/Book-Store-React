import { useSelector } from 'react-redux';
import Book from './Book';
import Navbar from './Navbar';
import Form from './form';

function Books() {
  const books = useSelector((state) => state.book);
  const booksUi = books.map((book) => (
    <Book
      key={book.title}
      title={book.title}
      author={book.author}
      id={book.id}
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
