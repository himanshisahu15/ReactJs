import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../Slice/CartSlice";
import style from '../Product/product.module.css';

const Product = ({ product }) => {
  
  const dispatch = useDispatch();
 
  const cart = useSelector((state) => state.cart.cart);
 //Checks  the  product is already in the cart.
  const existingItem = cart.find((item) => item.id === product.id);

  return (
    <div className={style.card}>
      {product.isDeal && <div className={style.dealBadge}>4.5 ⭐</div>}

      <img src={product.image} alt={product.name} className={style.productImage} />
      <h3>{product.name}</h3>
      <p>{product.description || 'No description available'}</p>
    
  
<div className={style.priceContainer}>
  {product.discountedPrice ? (
    <>
      <span className={style.originalPrice}>₹{product.price}</span>
      <span className={style.discountedPrice}>₹{product.discountedPrice}</span>
    </>
  ) : (
    <span className={style.discountedPrice}>₹{product.price}</span>
  )}

</div>

      {existingItem ? (
        <div>
          <p className={style.item}>In Cart: {existingItem.quantity}</p>
          <button className={style.sub} onClick={() => dispatch(decrementQuantity(product.id))}>−</button>
          <span className={style.quantity}>{existingItem.quantity}</span>
          <button className={style.add} onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
        </div>
      ) : (
        <button className={style.addcart} onClick={() => dispatch(addToCart(product))}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
