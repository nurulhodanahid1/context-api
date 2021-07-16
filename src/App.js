import React, {createContext, useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Shipment from './components/Home/Shipment/Shipment';

export const CategoryContext = createContext()

function App() {
  const [count, setCount] = useState(0);
  return (
    <CategoryContext.Provider value={[count, setCount]} className="App">
      <h1>This is App: {count}</h1>
      {/* <Header count={count} setCount={setCount}></Header> */}
      <Header></Header>
      <Home count={count}></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;
