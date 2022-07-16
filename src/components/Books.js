import { useState } from 'react';
import Book from './Book';
import Form from './form';
import Navbar from './Navbar';

function Books() {
  const bookList = useState([
    { title: 'Design Patterns', author: 'Erich Gamma' },
    { title: 'Patterns of Enterprise Application Architecture', author: ' Martin Fowler' },
    { title: 'Code Complete', author: 'Steve Mcconnell' },
    { title: 'Enterprise Integration Patterns', author: 'Gregor Hohpe' },
  ]);
  return (
    <div>
      <Navbar />
      {bookList[0].map((book) => (
        <Book
          key={book.title}
          title={book.title}
          author={book.author}
        />
      ))}
      <Form />
    </div>
  );
}

export default Books;
