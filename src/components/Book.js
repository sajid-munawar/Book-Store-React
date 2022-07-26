import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/apiReducer';

function Book({ id, title, author }) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Title :
        {' '}
        {title}
      </h2>
      <h4>
        Author :
        {' '}
        {author}
        {' '}
      </h4>
      <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book; <div />;
