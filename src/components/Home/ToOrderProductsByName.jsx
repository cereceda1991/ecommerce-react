import React from 'react';
import { useDispatch } from 'react-redux';
import {
  ascendingOrderProductsByName,
  descendingOrderProductsByName,
} from '../../store/slices/products.slice';

const ToOrderProductsByName = () => {
  const dispatch = useDispatch();

  function handleChange(event) {
    if (event.target.value === 'ascending') {
      dispatch(ascendingOrderProductsByName());
    } else if (event.target.value === 'descending') {
      dispatch(descendingOrderProductsByName());
    }
  }

  return (

    <select className='order-name' onChange={handleChange}>
      <option value='ascending'>Ascending By Name</option>
      <option value='descending'>Descending By Name</option>
    </select>

  );
};

export default ToOrderProductsByName;