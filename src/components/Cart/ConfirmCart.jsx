import React from 'react';
import styles from './ConfirmCard.module.css'; 
import confirmImage from '../../assets/badge2.png'; 

const ConfirmationCard = ({ onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.cartBox}>
        <button className={styles.close} onClick={onClose}>×</button>
        <img
        className={styles.img}
          src={confirmImage}
          alt="Confirmed"
         
        />
        <h2 className={styles.title}>Congratulations</h2>
        
        <p className={styles.empty}>Your order is confirmed!!<br></br>Thank you for shopping with us.</p>
        <button className={styles.confirmBtn} onClick={onClose}>
          Continue
        </button>
      </div>
    </div>
  );
};

export default ConfirmationCard;
