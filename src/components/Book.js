import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/apiReducer';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="BOOK_CONTAINER">
      <h2 className="Title">
        {title}
      </h2>
      <h4 className="author">
        {author}
      </h4>
      <button type="button" onClick={() => handleClick()} className="remove">Remove</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book; <div />;
