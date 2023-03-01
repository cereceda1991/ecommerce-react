import React from 'react';
import './styles/purchaseCard.css';

const PurchaseCard = ({ purchase }) => {
  const datePurchase = new Date(purchase.createdAt);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  console.log(purchase);

  return (
    <article className="purchase-article">
      <header className='purchase-header'>
        <h3 className='purchase-date'>{datePurchase.toLocaleDateString('en-us', options)}</h3>
        <section className='purchase-container'>
          <div className='purchase-body'>
            <ul className='purchase-list'>
              {purchase.cart.products.map((prod) => (
                <li className='purchase-item' key={prod.id}>
                  <h4 className='purchase-prod-title'>{prod.title}</h4>
                  <div className="purchase-prod-stats">
                    <span className='purchase-prod-quantity'><span className="purchase-prod-quantity-total">Quantity:</span> {prod.productsInCart.quantity}</span>
                    <span className='purchase-prod-price'>${prod.price}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </header>
    </article>
  );
};

export default PurchaseCard;