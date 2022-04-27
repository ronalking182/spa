import React from "react";
import classes from '../components/styles/contact.module.css'


import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
// IoIosContact

const Contact = () => {
  return <motion.div
  initial={{width:0}}
  animate={{width:"100%"}}
  exit={{x:window.innerWidth, transition:{duration:0.1}}}
  >
  <div className ={classes.address}>
      <div className={classes.side}>
        <span className={classes.add}>
        <h2>Get in Touch With Us And We’ll Help Your Health!</h2>
        <p>Interested in our spa services? We want your spa experience to be a memorable one.</p>
        </span>
        <span className={classes.socials}>
          <h5>Madrid</h5>
          <p>198 West 21th Street, NY, the USA</p>
          <Link to='mailto:contact@yourdomain.com'><a href='mailto:contact@yourdomain.com'>contact@yourdomain.com</a></Link>
          <Link to='tel:2-847-567-5765'><a href='tel:2-847-567-5765'>2-847-567-5765</a></Link>
        </span>
      </div>

      <div className={classes.form}>
    <form action='mailto:contact@yourdomain.com'
     method='POST'
     enctype='multipart/form-data'
     name='EmailForm'
     >
      <h3>Need to Make an Enquiry?</h3>
<input type='text' size='19' placeholder="First Name *"/>
<input type='text' size='19' placeholder="Last Name *"/>
<input type='text' size='19' placeholder="Phone Number *"/>
<input type='email' size='19' placeholder="Email *"/>
 <textarea placeholder="Your message *" rows='6' cols='20'>
</textarea> 
<input type='submit' value='Submit Message'/> 
</form>
      </div>
      
  </div>
      <div className={classes.closingTag}>
       <h2>Welcome to LJ Organic.</h2>
       <h2>Book Your Stay Today.</h2>
       <p><Link to='/#'>BOOK AN APPOINTMENT</Link></p>
  </div>
  </motion.div>
};

export default Contact;
