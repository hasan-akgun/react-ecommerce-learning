import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/home/HomePage';
import { CheckOutPage } from './Pages/checkout/CheckOutPage';
import { OrdersPage } from './Pages/orders/OrdersPage'
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([]);

  const loadCart = async () => {
      const response = await axios.get('/api/cart-items?expand=product');
      setCart(response.data);
    }

  useEffect(() => {  

    loadCart();

  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = { cart } loadCart= {loadCart}/>} />
      <Route path="/checkout" element={<CheckOutPage cart = { cart } />} />
      <Route path="/orders" element={<OrdersPage cart= {cart} />} />
    </Routes>
  );
}

export default App
