import React from "react";
import CarouselContainer from '../carousel/carousel-container'
import classes from './hero.module.css'






const Hero = () => {
  return <div className={classes.hero}>
       <CarouselContainer/>
  </div>;
};

export default Hero;
