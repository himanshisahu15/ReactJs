import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/ProductList/ProductList'
import CartOverlay from './components/Cart/CartOverlay';
import CarouselSlider from './components/Carousel/Slider';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
 
  const [showCart, setShowCart] = useState(false);

const handlecartIconClick=()=>{
  setShowCart((prev)=>!prev);
}

  return (
    <div>
      <Navbar onCartClick={handlecartIconClick} />
      <CarouselSlider></CarouselSlider>
      <ProductList />
      {/* showCart is true ,show card overlay */}
      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
    </div>
  );
}

export default App
