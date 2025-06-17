import React from 'react';
import ProductDate from '../ProductDate/ProductDate';
import Card from '../Card/Card';
import './productitem.css';

export default function ProductItem({ title, amount, date, image }) {
  return (
    <Card className="product-item">
      <ProductDate date={date} />
      <div className="product-title">{title}</div>
      <div className="product-image-section">
        <img src={image} alt={title} className="product-img" />
        <div className="product-amount">₹ {amount}</div>
      </div>
    </Card>
  );
}
