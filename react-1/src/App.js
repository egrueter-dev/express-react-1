import React, { useState, useEffect, setState } from 'react';
import Order from './components/Order/Order';
import './App.css';

function App() {
  const [hasError, setErrors] = useState(false);
  const [orders, setOrders] = useState({});

  async function fetchData() {
    const res = await fetch("http://localhost:3000/api/orders");
    res
      .json()
      .then(res => setOrders(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div>
      <h1>
        Juicy's Vegetables
      </h1>
      <h2>Learn React</h2>
      <Order name="order1" value="value1" isComplete="false" />
    </div>
  );
}

export default App;
