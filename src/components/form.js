import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const values = {
      title: e.target.title.value,
      author: e.target.author.value,
      id: uid(),

    };
    e.preventDefault();
    dispatch(addBook({ ...values }));
    e.target.reset();
  };
  return (
    <div>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="author" placeholder="Author" />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
