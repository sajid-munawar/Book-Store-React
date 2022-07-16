import { useState } from 'react';
import Book from './Book';
import Form from './form';
import Navbar from './Navbar';

function Books() {
  const bookList = useState([{ title: '', author: '' }]);
  return (
    <div>
      <Navbar />
      {bookList.forEach((book) => (<Book title={book.title} author={book.author} />))}
      <Form />
    </div>
  );
}

export default Books;
