import React, {useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Home/Shipment/Shipment';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>This is App: {count}</h1>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </div>
  );
}

export default App;
