import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from '../Slice/CartSlice.js';
import styles from './CartOverlay.module.css';
import ConfirmationCard from './ConfirmCart.jsx';

const CartOverlay = ({ onClose }) => {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.quantity * item.discountedPrice, 0);

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderConfirm = () => {
    setOrderConfirmed(true);
    dispatch(clearCart());
  };

  //  Return only the confirmation card when confirmed
  if (orderConfirmed) {
    return <ConfirmationCard onClose={onClose} />;
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.cartBox}>
        <button className={styles.close} onClick={onClose}>×</button>
        <h2 className={styles.title}>Your Cart</h2>

        {cart.length === 0 ? (
          <p className={styles.empty}>Cart is empty.</p>
        ) : (
          <>
            <div className={styles.itemList}>
              {cart.map((item) => (
                <div className={styles.item} key={item.id}>
                  <img src={item.image} alt={item.name} className={styles.image} />

                  <div className={styles.details}>
                    <h4>{item.name}</h4>
                    <p className={styles.price}>₹{item.discountedPrice}</p>
                  </div>

                  <div className={styles.quantityControls}>
                    <button onClick={() => dispatch(decrementQuantity(item.id))}>−</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                  </div>

                  <button
                    className={styles.remove}
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className={styles.footer}>
              <p className={styles.total}>Total: ₹{total.toLocaleString()}</p>
              <button className={styles.confirmBtn} onClick={handleOrderConfirm}>
                Confirm Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartOverlay;
