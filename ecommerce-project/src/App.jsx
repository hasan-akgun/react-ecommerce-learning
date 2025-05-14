import { Routes, Route } from 'react-router';
import { HomePage } from './Pages/HomePage'
import { CheckOutPage } from './Pages/CheckOutPage'
import { OrdersPage } from './Pages/OrdersPage'
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items?expand=product')
      .then((response) => {
        setCart(response.data);
      })
  }, []);

  return (
    <Routes>
      <Route index element={<HomePage cart = { cart }/>} />
      <Route path="/checkout" element={<CheckOutPage cart = { cart } />} />
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
}

export default App
