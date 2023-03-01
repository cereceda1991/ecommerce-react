import axios from 'axios';
import React, { useState } from 'react';
import getConfig from './../../utils/getConfig';
import { getUserCart } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';
import './styles/productDescription.css';

const ProductDescription = ({ product }) => {


  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter - 1 > 0) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => {
    setCounter(counter + 1);
  };
  const dispatch = useDispatch();

  const handleCart = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/cart';
    const data = {
      id: product.id,
      quantity: counter,
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res)
        dispatch(getUserCart())
      })
      .catch((err) => console.log(err));
  };

  return (
    <article className='prod-descrip-container'>
      <h2 className='prod-descrip-name'>{product?.title}</h2>
      <p className='prod-descrip-description'>{product?.description}</p>
      <div className="prod-descrip-stats">
        <section className='prod-descrip-price'>
          <span className='prod-descrip-title'>Price:&nbsp;</span>
          <span className='prod-price'>${product?.price}</span>
        </section>
        <section className='prod-descrip-quantity'>
          <span className='prod-descrip-title'>Quantity:</span>
          <div className='prod-counter'>
            <div className='prod-counter-btn' onClick={handleMinus}><i className="fa-solid fa-minus" /></div>
            <div className='prod-counter-total'> {counter} </div>
            <div className='prod-counter-btn' onClick={handlePlus}><i className="fa-solid fa-plus" /></div>
          </div>
        </section>
      </div>
      <button className='prod-descrip-btn' onClick={handleCart}>
        Add to Cart <i className="fa-solid fa-cart-plus"></i>
      </button>
    </article>
  );
};

export default ProductDescription;