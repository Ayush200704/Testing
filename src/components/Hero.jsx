import React, { useRef } from 'react';
import { ScrollParallax } from 'react-just-parallax';
import { curve, heroBackground, robot } from '../assets';
import { heroIcons } from '../constants';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine, Gradient } from './design/HeroT';
import Generating from './Generating';
import Notification from './Notification';
import CompanyLogos from './CompanyLogos';
import Carousel from './Carousel';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  // const parallaxRef = useRef(null);

  return (
  
    
   
      <div className="hero-container" >
        {/* <div className="hero-txt">
          <h3 class="text-animation">I'm a <span></span> </h3>
          </div> */}
          <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0 }}
          

           className="hero-txt">
          
          <motion.h3 
          

          className="text-animation">I'm a <span></span> </motion.h3>
          </motion.div>
            {/* <img
              src={heroBackground}
              className="hero-background-image"
                    
              
              alt="hero"
            /> */}
      
        
       
          <div className="hero-image-wrapper">
           
             
              <div className="hero-image">


                {/* <img
                  src={robot}
                  className="hero-robot"
                  width={1024}
                  height={490}
                  alt="Robot"
                /> */}
                <div className='carousel-compo'>
                <Carousel/>
                </div>
                </div>


              
              
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hero-icons">
                    {heroIcons.map((icon, index) => (
                      <li style={{
                        display:'inline-block',
                        listStyle:'none'
                      }} key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hero-notification"
                    title="Code generation"
                  />
                </ScrollParallax>
        
           
           
          </div>
          
          
        </div>
       
    
   
  );
};

export default Hero;