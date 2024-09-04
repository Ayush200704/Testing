import React, { useState, useEffect } from 'react';

import img3 from '../assets/img3.png';

import bh4 from '../assets/bh4.png'
import bg5 from '../assets/bg5.png'
import bg6 from '../assets/bg6.png'
import './ImageSlideshow.css';

const images = [  img3, bh4,bg5,bg6];

const Image = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="slideshow-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              className="slide-image"
              src={image}
              alt={`slideshow-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Image;
