import axios from 'axios';
import './cartProduct.css';
import getConfig from './../../utils/getConfig';
import { getUserCart } from './../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${product.id}`;
    axios
      .delete(URL, getConfig())
      .then((res) => {
        console.log(res);
        dispatch(getUserCart());
      })
      .catch((err) => console.log(err));
  };
  return (
    <article className="cart__product">
      <header className="cart-header">
        <h4 className="cart-title">{product.brand}</h4>
        <h3 className="cart-subtitle">{product.title}</h3>
      </header>
      <div className="cart-quantity">
        <span className="cart-quantity-span">Quantity:&nbsp;</span>
        <span className="cart-quantity-counter">
          {product.productsInCart.quantity}
        </span>
      </div>
      <div className="cart-price-container">
        <span className="cart-unit-price">Unit Price:&nbsp;</span>
        <span className="cart-price">${product.price}</span>
      </div>
      <button className="cart-btn" onClick={handleDelete}>
        <i className="fa-regular fa-trash-can cart-icon"></i>
      </button>
    </article>
  );
};

export default CartProduct;