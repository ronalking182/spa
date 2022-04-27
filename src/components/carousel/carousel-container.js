import React from "react";
import classes from './carousel.module.css'
import hero from '../images/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg'
import pic1 from '../images/photo1.jpg'
import pic2 from '../images/photo2.jpg'

import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';

const CarouselContainer = () => {
  return (
    <Carousel className={classes.carousel} fade={true} pause={false}>
       <Carousel.Item interval={4000}>
        <img src={hero} alt="carousel one" />
          <Carousel.Caption>
            <div className={classes.textCenter}>
              <h2>LJ ORGANIC <span className={classes.spa}>BEAUTY SPA</span></h2> 
             <p className={classes.textLink}><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <img src={pic1} alt="carousel two" />
          <Carousel.Caption>
            <div className={classes.textCenter}>
              <h2>LJ ORGANIC <span className={classes.spa}>BEAUTY SPA</span></h2> 
             <p className={classes.textLink}><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <img src={pic2} alt="carousel three" />
          <Carousel.Caption>
            <div className={classes.textCenter}>
              <h2>LJ ORGANIC <span className={classes.spa}>BEAUTY SPA</span></h2> 
             <p className={classes.textLink}><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
