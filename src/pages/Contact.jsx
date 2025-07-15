import React, { useRef, useEffect } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  // const nameRef = useRef();

  // useEffect(() => {
  //   nameRef.current.focus();
  // }, []);

  return (
    <div className={styles.container}>
      <h2>📞 Contact Us</h2>

      <input
        // ref={nameRef}
        placeholder="Enter your name"
        className={styles.input}
      />

      <div className={styles.info}>
        <h3>🗺️ Address</h3>
        <p>123 Main Street, Betul, Madhya Pradesh, India</p>

        <h3>📧 Email</h3>
        <p>support@example.com</p>

        <h3>📱 Phone</h3>
        <p>+91-9876543210</p>

      

       
      </div>
    </div>
  );
};

export default Contact;
