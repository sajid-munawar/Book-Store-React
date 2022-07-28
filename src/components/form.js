import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/apiReducer';

const uid = () => Date.now().toString(36) + Math.random().toString(36).substr(2);
function Form() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    const values = {
      title: e.target.title.value,
      author: e.target.author.value,
      item_id: uid(),
      category: 'Fiction',

    };
    e.preventDefault();
    dispatch(addBook({ ...values }));
    e.target.reset();
  };
  return (
    <div className="form-container">
      <h1 className="add-Title">ADD NEW BOOK</h1>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" className="addBookTitle" />
        <input type="text" name="author" placeholder="Author" className="add-author" />
        <button type="submit" className="ADD-BOOK">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
