import PropTypes from 'prop-types';

function Book({ title, author }) {
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
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book; <div />;
