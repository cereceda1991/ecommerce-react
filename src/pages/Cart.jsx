import axios from 'axios';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartProduct from './../components/Cart/CartProduct';
import getConfig from './../utils/getConfig';
import { getUserCart } from './../store/slices/cart.slice';
import './styles/cart.css';

const Cart = () => {
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getUserCart());
  }, []);

  const handleCheckout = () => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/purchases';
    const data = {
      street: 'Green St. 1456',
      colony: 'Southwest',
      zipCode: 12345,
      city: 'USA',
      references: 'Some references',
    };
    axios
      .post(URL, data, getConfig())
      .then((res) => {
        console.log(res);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  return (
    <section className="cart-container">

      {
        cartProducts?.length === 0 ? (
          <div className="cart-empty">
            <h2 className='cart-empty-title'>Your Cart is EMPTY</h2>
          </div>
        ) : cartProducts?.length > 0 ? (
          <h2 className='cart-full-title'></h2>
        ) : (
          <div className="cart-empty">
            <h2 className='cart-empty-title'>Your Cart is EMPTY</h2>
          </div>
        )
      }
      <article className="cart-main">
        <div className='cart-product-container'>
          {cartProducts?.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
        </div>
        <footer className='cart-footer'>
          <span className='cart-total-title'>Total:</span>
          <p className='cart-total-price'>
            $
            {cartProducts
              ? cartProducts.reduce((acc, cv) => {
                return cv.price * cv.productsInCart.quantity + acc;
              }, 0)
              : 0}
          </p>
          <button className='cart-ckeckout-btn' onClick={handleCheckout}>Checkout</button>
        </footer>
      </article>
    </section>
  );
};

export default Cart;