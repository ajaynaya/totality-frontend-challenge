
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import PropertyList from './components/PropertyList';
import Cart from './components/Cart';
import Checkout from './components/Checkout'; 
import ThankYou from './components/ThankYou'
import './App.css';


function App() {
  const [cart, setCart] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    price: '',
    bedrooms: '',
  });

  const addToCart = (property) => {
    setCart([...cart, property]);
  };

  const removeFromCart = (propertyId) => {
    setCart(cart.filter(property => property.id !== propertyId));
  };
  

  return (
    <Router>
      <div className="App">
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route path="/" element={
            <>
              <Filter filters={filters} setFilters={setFilters} />
              <PropertyList addToCart={addToCart} filters={filters} />
            </>
          } />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart}/>} />
          <Route path="/thankyou" element={<ThankYou/>}/>
          <Route path="*" element={<h1 className='page-not'>Page Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
