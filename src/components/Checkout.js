import {useNavigate} from "react-router-dom"
import { useState } from 'react';

import './Checkout.css';


const Checkout = ({ cartItems}) => {
  const [formData, setFormData] = useState({ name: '', email: '', address: '' });

  const handleChange = (e) => {
    const { name, value, address } = e.target;
    setFormData({ ...formData, [name]: value,address });
  };

const history = useNavigate()
const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking confirmed:', formData, cartItems);
    const {name,email,address} = formData
    if (name!=="" && email!=="" && address !== ""){
        history("/thankyou")
    }
    
};
  
  
  return (
    <form className="checkout-form" onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      
      <label>
        Name: 
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Address:
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </label>
      
      <button type="submit">Confirm Booking</button>
      
    </form>
  );
};

export default Checkout;
