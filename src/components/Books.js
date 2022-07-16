import Book from './Book';
import Form from './form';
import Navbar from './Navbar';

function Books() {
  const title = 'Smarter way to learn React';
  const author = 'Chun-li';
  return (
    <div>
      <Navbar />
      <Book title={title} author={author} />
      <Form />
    </div>
  );
}

export default Books;
