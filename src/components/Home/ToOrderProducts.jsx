import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ascendingOrderProducts,
  descendingOrderProducts,
} from '../../store/slices/products.slice';

const ToOrderProducts = () => {
  const dispatch = useDispatch();

  function handleChange(event) {
    if (event.target.value === 'ascending') {
      dispatch(ascendingOrderProducts());
    } else if (event.target.value === 'descending') {
      dispatch(descendingOrderProducts());
    }
  }

  return (
    <select className='order-price' onChange={handleChange}>
      <option value='ascending'>Ascending</option>
      <option value='descending'>Descending</option>
    </select>
  );
};

export default ToOrderProducts;