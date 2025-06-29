import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import img1 from '../../assets/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import img2 from '../../assets/jayson-hinrichsen-qLs4WYXqLNY-unsplash.jpg';
import img3 from '../../assets/markus-spiske-5UJbKYUjFCk-unsplash.jpg';
import img4 from '../../assets/clothes-1624973_1280.jpg';

import img5 from '../../assets/nike-5644799_1280.jpg';
import { createGlobalStyle } from 'styled-components';


const images = [
  { src: img1, title: 'Fashion Wear' },
  { src: img2, title: 'Summer Collection' },
  { src: img3, title: 'Trendy Gear' },
  { src: img4, title: 'Clothes' },
  { src: img5, title: 'Shoes' }
];


const CarouselWrapper = styled.div`
  max-width: 1800px;
  margin: 80px auto;
  padding: 0 20px;
  margin-top:80px;

`;

const GlobalStyle = createGlobalStyle`
  .slick-slide:focus,
  .slick-slide div:focus,
  .slick-slide img:focus,
  .slick-track:focus,
  .slick-current:focus,
  button:focus {
    outline: none !important;
    border: none !important;
  }
`;
const SlideImage = styled.img`
  width: 100%;
  height: 450px;
  object-fit:  cover;
  border-radius: 10px;
`;

const SlideTitle = styled.h3`
  text-align: center;
  margin-top: 10px;
`;


const CarouselSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   
  };

  return (
    <>
      <GlobalStyle /> 
    <CarouselWrapper>
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index}>
            <SlideImage src={item.src} alt={item.title} />
            <SlideTitle>{item.title}</SlideTitle>
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
    </>
  );
};

export default CarouselSlider;
