import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Card from '../Card/Card';
import './product.css';

export default function Product({ products }) {
  return (
    <Card className="product">
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        products.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            amount={product.amount}
            date={product.date}
            image={product.image}
          />
        ))
      )}
    </Card>
  );
}
