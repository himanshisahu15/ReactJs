import React from 'react';
import './productdate.css';

export default function ProductDate({ date }) {
  const month = date.toLocaleString('default', { month: 'long' }).toUpperCase();
  const day = date.toLocaleString('default', { day: '2-digit' });
  const year = date.getFullYear();

  return (
    <div className="product-date">
      <div className="month">{month}</div>
      <div className='date'>
      <div className="day">{day}</div>
      <div className="year">{year}</div>
      </div>
    </div>
  );
}
