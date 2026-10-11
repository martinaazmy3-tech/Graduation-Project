import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../services/api';
import { useCart } from '../context/CartContext';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const { addToCart } = useCart();

    useEffect(() => {
        async function loadProducts() {
            try {
                let data = await getProducts();
                setProducts(data);
            } catch (error) {
                setError('Something went wrong while loading products.');
            } finally {
                setLoading(false);
            }
        }

        loadProducts();
    }, []);

    if (loading) {
        return <h3 className="text-center my-5">Loading products...</h3>;
    }

    if (error) {
        return <p className="text-center text-danger my-5">{error}</p>;
    }

    return (
        <section className="my-5">
            <h1 className="section-title text-center mb-4">
                Our Products
            </h1>

            {products.length === 0 ? (
                <p className="text-center">No products found.</p>
            ) : (
                <div className="row g-4">
                    {products.map((product) => (
                        <div className="col-sm-6 col-lg-4" key={product.id}>
                            <div className="card product-card h-100">
                                <img
                                    src={product.image}
                                    className="card-img-top product-image"
                                    alt={product.title}
                                />

                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">
                                        {product.title}
                                    </h5>

                                    <p className="product-price">
                                        ${product.price.toFixed(2)}
                                    </p>

                                   
<div className="d-flex gap-2 mt-auto">
    <Link
        to={`/products/${product.id}`}
        className="btn btn-outline-main flex-fill"
    >
        View Details
    </Link>

    <button
        className="btn btn-main flex-fill"
        onClick={() => addToCart(product)}
    >
        Add to Cart
    </button>
</div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}