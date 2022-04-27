import classes from './body.module.css'
import React from "react";
import hero from '../images/yulissa-tagle-AyqNM8D2aEI-unsplash.jpg'
import pic1 from '../images/photo1.jpg'
import pic2 from '../images/photo2.jpg'


import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const service = [
    {
        title: 'Hydro Therapy',
        body:'Relieve discomfort and promote physical well-being.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/thermal_bath.png"

    },
    {
        title: 'Relaxing Massages',
        body:'A whole-body hands-on treatment that helps you relax.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/relax_massages.png"
    },
    {
        title: 'Aroma Therapy',
        body:'The art of healing through the use of plant-extracts.',
        src:"https://n.foxdsgn.com/rela/wp-content/uploads/2019/08/Supreme_skincare.png"
    },
]

const ServiceCare =[
    {
        title:"Skin Care",
        body:"Our facials include a skin analysis to help individualize each facial to your unique needs."
    },
    {
        title:"Floral Baths",
        body:"Located near the verdant paddy field, this amazing spa is swathed in tropical flora and trickling waterfalls."
    },
    {
        title:"Facial Massage",
        body:"Includes a facial cleansing, scalp massage, and a toner. It is depending on your skin care needs."
    },
    {
        title:"Homeopathy",
        body:"A system of medicine that treats the whole individual and removing sickness or restoring health."
    },
]

const Body = () => {

  return <>
  <motion.div 
  className={classes.body}
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
      <div className={classes.textCon}>
       <h2>Welcome to Home of Tranquility, Relaxation and Respite.</h2>

       &nbsp;

       <p>Everybody is looking for places where to relax and get more energy. In our wellness center silence, energy, beauty and vitality meet. The treatments we offer will refresh both your body and soul. We'll be glad to welcome you and recommend our facilities and services.</p>
      </div>
      <div className={classes.gridContainer}>
          {service.map((item, index) => {
            return <div  className={classes.grid} key={index} >
                  <span className={classes.imageWrapper}>
                      <img src={item.src} alt={item.title} />
                  </span>
                  <span>
                      <h4>{item.title}</h4>
                 </span>
                  <span>
                  <p>{item.body}</p>
                  </span>
            </div>
          })}
      </div>
  </motion.div>
  <div className={classes.ad}>
      <div className={classes.skinCare} >
          <h2>Skin Care and Face Masks</h2>
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
  <div className={classes.care}>
       {
           ServiceCare.map((item, index) => {
               return <div key={index} className={classes.careGrid}>
                   <h5>{item.title}</h5>
                   <p>{item.body}</p>
               </div>
           })
       }
  </div>
  <motion.div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
       <p><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
  </motion.div>
  </>
};

export default Body;
