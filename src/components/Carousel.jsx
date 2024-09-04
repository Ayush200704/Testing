import React, { useState, useEffect, useRef } from 'react';
import Video1 from "../assets/3108007-uhd_3840_2160_25fps.mp4";
import Video2 from "../assets/bg5.png";
import Video3 from "../assets/bg6.png";
import image1 from "../assets/bg3.jpeg"

import Video4 from "../assets/bh4.png"
import '../components/Carousel.css';

const image = [
  {
    src: image1,
    author: 'ROBOT',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, ',
  },
  {
    src: image1,
    author: 'SECURITY',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, ',
  },
  {
    src:image1 ,
    author: 'CCTV',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, ',
  },
  {
    src: image1,
    author: 'STARTUP',
    title: 'DESIGN SLIDER',
    topic: 'ANIMAL',
    des: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sequi, rem magnam nesciunt minima placeat, ',
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeoutRef, setTimeOutRef] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % image.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + image.length) % image.length);
  };

  useEffect(() => {
    const autoSlide = () => {
      nextSlide();
    };
    const timeoutId = setTimeout(autoSlide, 700);
    setTimeOutRef(timeoutId);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex]);

  const showSlider = (type) => {
    const sliderItems = document.querySelectorAll('.carousel .list .item');
    const thumbnailItems = document.querySelectorAll('.carousel .thumbnail .item');
    const carousel = document.querySelector('.carousel');
    const sliderList = document.querySelector('.carousel .list');
    const thumbnailList = document.querySelector('.carousel .thumbnail');

    if (type === 'next') {
      sliderList.appendChild(sliderItems[0]);
      thumbnailList.appendChild(thumbnailItems[0]);
      carousel.classList.add('next');
    } else {
      sliderList.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailList.prepend(thumbnailItems[thumbnailItems.length - 1]);
      carousel.classList.add('prev');
    }
    
    setTimeout(() => {
      carousel.classList.remove('next');
      carousel.classList.remove('prev');
    }, 300);
  };

  return (
    <div className="carousel">
      <div className="list">
        {image.map((image, index) => (
          <div
            key={index}
            className={`item ${index === currentIndex ? 'active' : ''}`}
          >
            <img
              src={image.src}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              alt="image"
            />

          
            <div className="content">
              <div className="author">{image.author}</div>
              <div className="title">{image.title}</div>
              <div className="topic">{image.topic}</div>
              <div className="des">{image.des}</div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="thumbnail">
        {image.map((image, index) => (
          <div key={index} className="item">
            <img  style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius:"10px"


            }} src={image.src}  />
            
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>
      <div className="arrows">
        <button onClick={() => showSlider('prev')} id="prev" style={{
          
        }}>&lt;</button>
        <button style={{
                  }} onClick={() => showSlider('next')} id="next">&gt;</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;
