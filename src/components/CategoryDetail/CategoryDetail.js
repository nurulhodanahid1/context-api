import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {count} = props;
    const category = useContext(CategoryContext)
    return (
        <div>
            <h4>This is Category Detail: {count}</h4>
            <h4>Category: {category}</h4>
        </div>
    );
};

export default CategoryDetail;