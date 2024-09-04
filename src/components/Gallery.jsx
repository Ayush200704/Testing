import React from 'react';
import amazonImage from '../assets/amazon.png'; // Adjust the path as necessary
import './Gallery.css'; // Adjust the path as necessary

const Gallery = () => {
  const founders = [
    {
      imgSrc: amazonImage,
      name: 'Amazon',
      description: 'Amazon is a global e-commerce leader known for its vast product selection and fast shipping. It also excels in cloud computing with Amazon Web Services (AWS).',
    },
    {
      imgSrc: amazonImage,
      name: 'Tesla',
      description: 'Tesla is a pioneering electric vehicle manufacturer renowned for its innovative technology and sustainable energy solutions. It also advances in renewable energy.',
    },
    {
      imgSrc: amazonImage,
      name: 'Microsoft',
      description: 'Microsoft is a global tech giant known for its Windows OS and Office suite, as well as its Azure cloud services.',
    },
  ];

  return (
    <section className="gallery" id="gallery">
      <h3 className="heading"><span>Founders</span> gallery</h3>
      <div className="box-container">
        {founders.map((founder, index) => (
          <div className="box" key={index}>
            <img src={founder.imgSrc} alt={founder.name} />
            <div className="info">
              <h3>{founder.name}</h3>
              <p>{founder.description}</p>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
