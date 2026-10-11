
function ShippingReturns() {
  return (
    <div>
      <div
        className="text-center p-5 rounded mb-4"
        style={{ backgroundColor: '#f8e5e9' }}
      >
        <h1 style={{ color: '#b76e79' }}>Delivery & Returns</h1>
        <p className="lead">
          Everything you need to know about your order.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-4">
              <h3 style={{ color: '#b76e79' }}>🚚 Delivery</h3>

              <p>
                Delivery time and fees will be confirmed with the customer
                before the order is accepted.
              </p>

              <p>
                Please provide the correct address and contact number
                when placing an order.
              </p>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body p-4">
              <h3 style={{ color: '#b76e79' }}>↩️ Returns & Exchanges</h3>

              <p>
                Contact Dokkana before returning or exchanging a product.
              </p>

              <p>
                Return eligibility, time limits, and any fees must be
                confirmed according to the store's actual policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingReturns;
