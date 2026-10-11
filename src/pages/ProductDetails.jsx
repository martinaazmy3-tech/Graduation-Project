
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProduct } from '../services/api';
import { useCart } from '../context/CartContext';



function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      const data = await getProduct(id);
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return <div className="text-center">Product not found</div>;
  }

  return (
    <div className="row g-4">
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <div className="text-center">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>
      </div>

      <div className="col-12 col-md-6">
        <h2 className="mb-3">{product.title}</h2>

        <p className="fs-4" style={{ color: '#b76e79' }}>
          ${product.price}
        </p>

        <p className="badge bg-secondary mb-3">
          {product.category}
        </p>

        <p className="mb-4">{product.description}</p>

        <button
        className="btn text-white mb-3"
        style={{ backgroundColor: '#b76e79' }}
        onClick={() => addToCart(product)}
      >
        🛒 Add to Cart
      </button>

        <div className="d-grid gap-2">
          <Link to="/products" className="btn btn-outline-secondary">
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
