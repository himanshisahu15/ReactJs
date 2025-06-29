// src/pages/Login.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }


    navigate('/app');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}> Login</h2>

        <div className={styles.field}>
          <label>Email:</label>
          <input type="text" name="email" placeholder="Enter email" />
        </div>

        <div className={styles.field}>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>

        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
