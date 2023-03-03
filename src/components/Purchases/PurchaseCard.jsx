import React from 'react';
import './styles/purchaseCard.css';

const PurchaseCard = ({ purchase, purchasesList }) => {
  const datePurchase = new Date(purchase.createdAt);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  console.log(purchasesList);

  return (
    <article className="purchase__article">
      <h4>{datePurchase.toLocaleDateString('en-us', options)}</h4>
      <div className='container__purchase-article'>
        {purchasesList.map((prod) => (
          <div key={prod.productId}>
            <h4>{prod.product.title}</h4>
            <p> Quantity: {prod.quantity}</p>
            <span> Price:</span> <span className='Price'> {prod.product.price}</span>
          </div>
        ))}
      </div>
    </article >
  );
};

export default PurchaseCard;