import React, { Component } from 'react';
import styles from './ImageCard.module.css';

export default class ImageCard extends Component {
  
   componentWillUnmount() {
    console.log(`ImageCard Unmounted: ${this.props.img.title}`);
  }
    render() {
    const { img, onDelete, onClick } = this.props;
    return (
      <div className={styles.card} onClick={onClick}>
        <img className={styles.image} src={img.url} alt={img.title} />
        <div className={styles.details}>
          <span className={styles.title}>{img.title}</span>
          <button className={styles.delete} onClick={(e) => { e.stopPropagation(); onDelete(); }}>Delete</button>
        </div>
      </div>
    );
  }
}
