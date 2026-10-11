
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { storeInfo } from '../config/store';

function Cart() {
    const {
        cart,
        totalPrice,
        removeFromCart,
        updateQuantity,
        clearCart
    } = useCart();

    const [showForm, setShowForm] = useState(false);

    const [customer, setCustomer] = useState({
        fullName: '',
        phone: '',
        governorate: '',
        city: '',
        notes: ''
    });

    function handleChange(e) {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        });
    }

    function submitOrder(e) {
        e.preventDefault();

        let message = `New Order from Dokkana

Customer Name: ${customer.fullName}
Phone Number: ${customer.phone}

Governorate: ${customer.governorate}
Markaz: ${customer.city}
Delivery Notes: ${customer.notes || 'No notes'}

Products:
${cart.map((item) =>
    `${item.title} - Quantity: ${item.quantity} - Price: $${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

Products Total: $${totalPrice.toFixed(2)}
Shipping: To be confirmed according to the address
Final Total: To be confirmed after shipping fees`;

        let whatsappNumber = storeInfo.phone.replace(/\D/g, '');

        if (whatsappNumber.startsWith('0')) {
            whatsappNumber = '20' + whatsappNumber.slice(1);
        }

        let whatsappLink =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(whatsappLink, '_blank');
    }

    return (
        <div className="my-5">
            <h2 className="text-center mb-4 section-title">
                My Shopping Cart 🛒
            </h2>

            {cart.length === 0 ? (
                <div
                    className="text-center p-5 rounded"
                    style={{ backgroundColor: '#f8e5e9' }}
                >
                    <h4>Your cart is empty</h4>
                    <p>Start shopping and add your favorite products.</p>

                    <Link to="/products" className="btn btn-main">
                        Shop Now
                    </Link>
                </div>
            ) : (
                <>
                    {cart.map((item) => (
                        <div className="card cart-item mb-3" key={item.id}>
                            <div className="row align-items-center g-3">
                                <div className="col-4 col-md-2 text-center">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="cart-image"
                                    />
                                </div>

                                <div className="col-8 col-md-4">
                                    <h6>{item.title}</h6>

                                    <p className="product-price">
                                        ${item.price.toFixed(2)}
                                    </p>
                                </div>

                                <div className="col-6 col-md-3">
                                    <label className="form-label">
                                        Quantity
                                    </label>

                                    <input
                                        type="number"
                                        min="1"
                                        className="form-control quantity-input"
                                        value={item.quantity}
                                        onChange={(e) =>
                                            updateQuantity(
                                                item.id,
                                                Number(e.target.value)
                                            )
                                        }
                                    />
                                </div>

                                <div className="col-6 col-md-3 text-end">
                                    <p className="fw-bold">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>

                                    <button
                                        className="btn btn-outline-danger btn-sm"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="checkout-card mt-4">
                        <h3>Order Summary</h3>

                        <p>
                            Products Total:
                            <strong> ${totalPrice.toFixed(2)}</strong>
                        </p>

                        <p>
                            Shipping Fees:
                            <strong> Calculated according to your address</strong>
                        </p>

                        <hr />

                        <p className="text-muted">
                            The final total will be confirmed after calculating
                            the delivery fees.
                        </p>

                        <div className="d-flex flex-wrap gap-2">
                            <Link
                                to="/products"
                                className="btn btn-outline-main"
                            >
                                Continue Shopping
                            </Link>

                            <button
                                className="btn btn-outline-danger"
                                onClick={clearCart}
                            >
                                Clear Cart
                            </button>

                            <button
                                className="btn btn-main"
                                onClick={() => setShowForm(!showForm)}
                            >
                                {showForm
                                    ? 'Close Form'
                                    : 'Proceed to Checkout'}
                            </button>
                        </div>
                    </div>

                    {showForm && (
                        <div className="checkout-card mt-4">
                            <h3 className="mb-4">Delivery Information</h3>

                            <form onSubmit={submitOrder}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label className="form-label">
                                            Full Name
                                        </label>

                                        <input
                                            type="text"
                                            name="fullName"
                                            className="form-control"
                                            value={customer.fullName}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">
                                            Phone Number
                                        </label>

                                        <input
                                            type="tel"
                                            name="phone"
                                            className="form-control"
                                            value={customer.phone}
                                            onChange={handleChange}
                                            placeholder="01xxxxxxxxx"
                                            pattern="01[0-9]{9}"
                                            title="Enter an Egyptian mobile number starting with 01"
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">
                                            Governorate
                                        </label>

                                        <input
                                            type="text"
                                            name="governorate"
                                            className="form-control"
                                            value={customer.governorate}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <label className="form-label">
                                            Markaz
                                        </label>

                                        <input
                                            type="text"
                                            name="city"
                                            className="form-control"
                                            value={customer.city}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="col-12">
                                        <label className="form-label">
                                            Delivery Notes
                                        </label>

                                        <textarea
                                            name="notes"
                                            className="form-control"
                                            rows="3"
                                            value={customer.notes}
                                            onChange={handleChange}
                                            placeholder="Any notes about delivery..."
                                        />
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <h4>Review Your Order</h4>

                                    {cart.map((item) => (
                                        <p key={item.id}>
                                            {item.title} × {item.quantity}
                                            {' — '}
                                            ${(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    ))}

                                    <h5>
                                        Products Total: ${totalPrice.toFixed(2)}
                                    </h5>

                                    <p className="text-muted">
                                        Shipping fees will be confirmed
                                        according to your address.
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-main mt-2"
                                >
                                    Confirm Order on WhatsApp
                                </button>
                            </form>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default Cart;
