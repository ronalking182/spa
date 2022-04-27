import React from "react";
import classes from '../components/styles/services.module.css'
import hero from '../components/images/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg'
import pic1 from '../components/images/photo1.jpg'
import pic2 from '../components/images/photo2.jpg'

import image01 from '../components/images/image01.jpeg'
import image02 from '../components/images/image02.jpeg'
import image03 from '../components/images/image03.jpeg'

import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'





const service = [
  {
      title: 'Salt Glow',
      body:'Deep Sea and mineral salts are combined with essential oils,then massaged over the body in a light circular motion to deeply cleanse,exfoliate,and stimulate your circulation. This treatment will leave your skin renewed,rehydrated, and glowing',
      src:image01

  },
  {
      title: 'Detox - Thalasso Wrap',
      body:'A true gift from the sea all the way from Brattany. Relax and luxuriate in steady warmth while your skin detoxifies and absorbs intense beneficail nutrients that to send the rich array of micronized minerals, vitamins and enzymes from this seaweed',
      src:image02
  },
  {
      title: 'Moor Mud Full Body Wrap',
      body:'Discover what the ancients new centuries ago. Gently vanquishing aches and pains with a thick layer of warm moor mud infused with pure essential oil that is applied over the entire body for a relaxing treatment that the body absorbs.',
      src:image03
  },
]

const Services = () => {
  return <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
    <div className={classes.services}>
      
      <div className={classes.header}>
        <span className={classes.main_text_header}>
           <h1>An Incredible Spa Experience</h1>
           <p>Rela is a genuine oasis in the middle of the city that combines relaxing water procedures, beauty and wellness services, and sports.</p>
     <div className={classes.overlay}></div>
           </span>
      </div>

<div className={classes.tag_whole}>
{service.map((item, index) => {
      return <div className={classes.tag} key={index}>
      <span className={classes.tag_pic}>
      <img src={item.src} alt={item.title} />
      </span>
      <span className={classes.tag_text}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </span>
   </div>
    })}
      </div>

      <div className={classes.ad}>
      <div className={classes.skinCare} >
          <h2>Skin Care and FaceMasks</h2>
          <p>We offer a variety of facial services to suit your individual skin care needs. Our estheticians use only the finest Bio-elements products based on trace minerals, essential oils, and plant extracts. Every facial includes a skin analysis, deep pore cleansing, gentle exfoliation, customized mask, and moisture treatment.</p>
      </div>
      <div className={classes.minSlideShow}>
          
      <Carousel className={classes.carousel} fade={true} pause={false}>
       <Carousel.Item interval={4000}>
        <img src={hero} alt="carousel one" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <img src={pic1} alt="carousel two" />
        </Carousel.Item>
        <Carousel.Item interval={4000}>
        <img src={pic2} alt="carousel three" />
        </Carousel.Item>
    </Carousel>

      </div>
  </div>
    </div>
      <div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
       <p><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
  </div>
  </motion.div>
}

export default Services;
