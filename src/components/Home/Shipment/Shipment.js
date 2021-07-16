import React, { useContext } from 'react';
import { CategoryContext } from '../../../App';

const Shipment = () => {
    const [count, setCount] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is shipment: {count}</h2>
            <button onClick={() => setCount(count + 2)}>Increment from shipment</button>
        </div>
    );
};

export default Shipment;