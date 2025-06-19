import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import style from '../Module/MyCard.module.css';

import img1 from '../../assets/image1.jpg';
import img2 from '../../assets/image2.jpg';
import img3 from '../../assets/image3.jpg';
import img4 from '../../assets/image4.jpg';
import img5 from '../../assets/image5.jpg';


const MyCardImage = styled.div`
  height: 250px;
  background:  url(${props => props.$image});
  background-position: center;
  background-size: cover;
  transition: background-image 0.5s ease-in-out;
`;
const Button = styled.button`
  background: linear-gradient(90deg, #ff6a00, #ee0979);
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 2px;
  margin-bottom: 5px;
  transition: transform 0.3s ease, opacity 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 105, 180, 0.4);

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
`;

const rotate=keyframes`
from{
transform:rotate(0deg);
}

to{
transform:rotate(360deg)
}
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  width:40px;
  font-size: 20px;
 padding:1px;
`;



export default function MyCard() {
  const images = [img1, img2, img3,img4,img5];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChangeImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className={style.mycard}>
      <MyCardImage $image={images[currentIndex]} />

      <div className={style.mycardBody}>
        <h1>HEAR IT , SEE IT</h1>
      
        <h1 className={style.mycardTitle}>
          <span className={style.strong}>LIVE </span>IT
        </h1>

        <p className={style.mycardDesc}>
          "Your Soundtrack to Life," "Melodies that Move You," or "Feel the Music." Other options include "Let the Music Hug Your Heart," or "Every Note Tells a Story"
        </p>

        <ul className={style.myCardLists}>
          <li className={style.myCardList}>
            <div className={style.mycardNum}>10k+</div>
            <div className={style.mycardText}>SONGS</div>
          </li>
          <li className={style.myCardList}>
            <div className={style.mycardNum}>314</div>
            <div className={style.mycardText}>SINGERS</div>
          </li>
          <li className={style.myCardList}>
            <div className={style.mycardNum}>500k+</div>
            <div className={style.mycardText}>USERS</div>
          </li>
        </ul>

      
        <Button onClick={handleChangeImage}>Play<Rotate>▶</Rotate> </Button>
      </div>
    </div>
  );
}
