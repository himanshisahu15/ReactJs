import React from 'react'
import Navbar from '../NavBar/Navbar';
import style from'./Welcome.module.css';

export default function Welcome({onLogout}) {
 
  const email = localStorage.getItem('email');

  return (
   <div>
      <Navbar onLogout={onLogout} />
      <div className={style.content}>
        <h1>You have successfully logged in!</h1>
        <h2>Welcome, {email}</h2>
      </div>
    </div>
  );
};



