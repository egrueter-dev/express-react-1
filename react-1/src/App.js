import React, { useState, useEffect, setState } from 'react';
import Order from './components/Order/Order';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';

// Redux
const initialState = {
   order: { name: "order2", value: "$100", complete: "false" },
};

// Redux Reducer
// Determine what the initial state of the application is
//
function reducer(state, action) {
  return initialState;
};

// Creat the store. 
const store = createStore(reducer);
//

function App() {
  const [hasError, setErrors] = useState(false);
  const [orders, setOrders] = useState({});

  // request for orders should be set in the Reducer
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
      
      <Provider store={store}> 
        <Order />
      </Provider>
    </div>
  );
}

export default App;
