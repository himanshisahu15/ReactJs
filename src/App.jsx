import { useState } from 'react';
import './App.css';
import Demo from './components/Form/Form.jsx';
import Product from './components/Product/Product.jsx';
import img1 from './assets/realme-14-pro-5g-front-back-1.png';
import ProductBarChart from './components/ProductBarChart/ProductBarChart.jsx';
import ProductPieChart from './components/ProductBarChart/ProductPieChart.jsx';
import data from './data/Data.jsx'
function App() {
  const [products, setProductData] = useState(data);

  const addProduct = (productData) => {
    const newProduct = {
      ...productData,
      id: Math.random().toString(),
      date: new Date(productData.date),
    };
    setProductData((prev) => [newProduct, ...prev]);
  };

  return (
    <div className='container'>
      <h2 className='form-title'>Product Launch Form</h2>
      <Demo onFormSubmit={addProduct} />
      
      <h2 className='title'>Upcoming Product Launch</h2>
      <Product products={products} />  
     

     <div className='chart-container'>
        <div className="chart-bar">
          <ProductBarChart products={products} />
        </div>

</div>

        {/* <div className="chart-pie">
          <ProductPieChart products={products} />
        </div> */}
      
    </div>
  );
}

export default App;
