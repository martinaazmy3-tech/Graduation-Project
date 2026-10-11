
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light sticky-top"
      style={{ backgroundColor: '#f8e5e9' }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
          style={{ color: '#b76e79' }}
        >
          <img
            src="/images/dokkana-logo.png"
            alt="Dokkana Logo"
            style={{
              width: '90px',
              height: '90px',
              objectFit: 'contain'
            }}
          />
          <span>Dokkana</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/shipping-returns">
                Delivery & Returns
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>

            <li className="nav-item ms-lg-2">
              <Link
                className="btn text-white position-relative mt-2 mt-lg-0"
                to="/cart"
                style={{ backgroundColor: '#b76e79' }}
                aria-label={`Shopping cart, ${cartCount} items`}
              >
                🛒 Cart
                <span className="badge bg-light ms-2" style={{ color: '#b76e79' }}>
                  {cartCount}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
