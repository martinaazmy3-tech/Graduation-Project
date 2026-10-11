
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import ShippingReturns from './pages/ShippingReturns';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />

        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shipping-returns" element={<ShippingReturns />} />

            <Route
              path="*"
              element={<h2 className="text-center">Page Not Found</h2>}
            />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
