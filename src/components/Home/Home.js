import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count} = props;
    return (
        <div style={{border:"2px solid purple"}}>
            <h2>This is home: {count}</h2>
            <Categories count={count}></Categories>
        </div>
    );
};

export default Home;