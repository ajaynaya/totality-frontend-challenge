import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import {Link} from 'react-router-dom';
import './Cart.css';
import Checkout from "./Checkout";

const Cart = ({ cart, removeFromCart }) => {
  if (!Array.isArray(cart) || cart.length === 0) {
    return (
      <div className="cart">
        <h2>Your Cart is Empty</h2>
        <Link to="/">
        <button className='cart-item-remove-button'>Go To Home Page</button>
        </Link>
      </div>
    );
  }

  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-title">{item.title}</span>
            <span className="cart-item-price">${(item.price || 0).toFixed(2)}</span>
            <button className="cart-item-remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="cart-total">Total: ${totalPrice.toFixed(2)}</h3>
      <Popup className="popup" trigger={<button className='cart-item-remove-button'>Checkout</button>} position={"center center"}>
      
      <Checkout/>
      
      </Popup>
    </div>
  );
};

export default Cart;
