import React, { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import Card from '../Card/Card';
import Filter from '../ProductFilter/Filter';
import './product.css';

export default function Product({ products }) {
  const [selectedYear, setSelectedYear] = useState('All');

  const handleFilterChange = (year) => {
    setSelectedYear(year);
  };

  const filteredProducts =
    selectedYear === 'All'
      ? products
      : products.filter(
          (product) => product.date.getFullYear().toString() === selectedYear
        );

  return (
    <Card className="product">

      <Filter selectedYear={selectedYear} onChangeYear={handleFilterChange} />
      
      {filteredProducts.length === 0 ? (
        <p>No products found for {selectedYear}</p>
      ) : (
        filteredProducts.map((product) => (
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
