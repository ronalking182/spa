import React from "react";
import classes from './footer.module.css'

import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {GrMail} from 'react-icons/gr'
import { Link } from 'react-router-dom'

const FooterBar = () => {
  return <div className={classes.footer}>
      <div className={classes.location}>
         <span className={classes.logo}>
             <h1>Logo</h1>
         </span>
         <span className={classes.address}>
             <p>198 West 21th Street, NY, the USA
2-847-567-5765 | M: spacenter@rela.com</p>
         </span>
         <span className={classes.socials}>
             <Link to='/#' state={{color:"#ffff"}}><FaFacebookF/></Link>
             <Link to='/#'><AiFillInstagram/></Link>
             <Link to='/#'><GrMail/></Link>
         </span>
      </div>
      <div className={classes.linkBtn}>
      <Link to='/'> Home </Link>
      <Link to='/Services'> Services </Link>
      {/* <Link to='/Product'> Product </Link> */}
      <Link to='/Contact'> Contact/Book Spa  </Link>
      {/* <Link to='/Book Spa'> Book Spa </Link> */}
      </div>
      <div className={classes.reserved}>
     <p> © 2022-present LJ Organic. All Rights Reserved.</p>
      </div>
  </div>;
};

export default FooterBar;
