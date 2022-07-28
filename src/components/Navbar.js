import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-container">
      <div className="navbar">
        <h1 className="Bookstore-CMS">Bookstore CMS</h1>
        <nav>
          <Link to="/" className="BOOKS">Books</Link>
          <Link to="/categories" className="CATEGORIES">Categories</Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
