
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="bg-dark d-flex justify-content-around">
      <h1 className="text-warning">Store Management App</h1>
      <div className='mt-2'>
        <Link className="btn btn-light me-5" to="/add">
          Add Product
        </Link>
        <Link className="btn btn-light" to="/view">
          View Product
        </Link>
      </div>
    </nav>
  );
}

export default Header;
