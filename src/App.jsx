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

  //toggle func
const handlecartIconClick=()=>{
  setShowCart((prev)=>!prev);
}

  return (
    <div>
      <Navbar onCartClick={handlecartIconClick} />
          {/* showCart is true ,show card overlay */}
      {showCart && <CartOverlay onClose={() => setShowCart(false)} />}
      <CarouselSlider></CarouselSlider>
      <ProductList />
    </div>
  );
}

export default App
