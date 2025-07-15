import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import { generateJwtToken } from '../components/Token/Token.js'; 
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (!email || !password) {
     setError('Please enter both email and password.');
      return;
    }

    if (email === 'himanshi@gmail.com' && password === '12345') {
      const token = await generateJwtToken(email); 
      localStorage.setItem('token', token);        
      navigate('/app');
    } else {
       setError('Invalid credentials.');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Login</h2>
   
        <div className={styles.field}>
          <label>Email:</label>
          <input type="text" name="email" placeholder="Enter email" />
        </div>

        <div className={styles.field}>
          <label>Password:</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
  {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
