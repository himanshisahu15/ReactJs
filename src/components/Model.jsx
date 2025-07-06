import React, { Component } from 'react';
import styles from './Model.module.css';

export default class Model extends Component {
  render() {
    const { img, onClose ,theme} = this.props;
    return (
    
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h3>{img.title}</h3>
          <img src={img.url} alt={img.title} />
          <button className={styles.close} onClick={onClose}>Close</button>
          <p>Current theme: <strong>{theme}</strong></p>
        </div>
      
    );
  }
}
