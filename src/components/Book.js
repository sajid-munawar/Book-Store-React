import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/apiReducer';

function Book({ id, title, author }) {
  const progress = Math.floor(Math.random() * 101);
  const chapter = Math.floor(Math.random() * 10);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteBook(id));
  };
  return (
    <div className="BOOK_CONTAINER">
      <div>
        <span className="action">Action</span>
        <h2 className="Title">
          {title}
        </h2>
        <h4 className="author">
          {author}
        </h4>
        <div>
          {' '}
          <span className="c-edit">Comments</span>
          <button type="button" onClick={() => handleClick()} className="remove">Remove</button>
          <span className="c-edit">Edit</span>
        </div>
      </div>
      <div className="d-flex">
        <img src="/circle.png" alt="progress" />
        <div className="f-column">
          {' '}
          <span className="percentage">
            {progress}
            {' '}
            %
          </span>
          <span className="completed">Completed</span>
        </div>
      </div>
      <div className="f-column">
        <span className="completed">Current Chapter</span>
        <span>
          Chapter
          {' '}
          { chapter }
        </span>
        <button type="button" className="ADD-BOOK update-progress">Update Progress</button>
      </div>

    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book; <div />;
