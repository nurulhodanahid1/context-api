import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Header = () => {
    const [count, setCount] = useContext(CategoryContext)
    return (
        <div>
            <h2>This is header: {count}</h2>
            <button onClick={() => setCount(count + 1)}>Increase Button</button>
        </div>
    );
};

export default Header;