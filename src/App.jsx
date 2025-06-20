import { useState } from 'react';
import './App.css';
import Demo from './components/Form/Form.jsx';
import Product from './components/Product/Product.jsx';
import ProductBarChart from './components/ProductBarChart/ProductBarChart.jsx';
import ProductPieChart from './components/ProductBarChart/ProductPieChart.jsx';
import Filter from './components/ProductFilter/Filter.jsx';
import data from './data/Data.jsx';

function App() {
  const [products, setProductData] = useState(data);
  const [selectedYear, setSelectedYear] = useState('All');

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Math.random().toString(),
      date: new Date(productData.date),
    };
    setProductData((prev) => [newProduct, ...prev]);
  };

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
    <div className='container'>
      <h2 className='form-title'>Product Launch Form</h2>
      <Demo onFormSubmit={addProduct} />

      <h2 className='title'>Upcoming Product Launch</h2>

      <Filter selectedYear={selectedYear} onChangeYear={handleFilterChange} />

      <div className='row-flex'>
        <div className='product-list'>
          <Product products={filteredProducts} />
        </div>

        <div className='pie-chart'>
          <ProductPieChart products={filteredProducts} />
        </div>
      </div>

      <div className='chart-container'>
        <div className="chart-bar">
          <ProductBarChart products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default App;
