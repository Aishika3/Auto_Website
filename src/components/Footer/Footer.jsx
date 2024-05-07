/*import React from 'react'
import "./Footer.css"

export const Footer = () => {
  return (
    <footer className='footer'> <small>&copy; Copyright 2023, Automatiks</small> </footer> 
  )
}
*/
import React from "react";
import "./Footer.css";
import Wave from "img/Vector.png";
//import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>Automatiks</span>
        <div className="f-icons">
          <a href="https://www.linkedin.com/company/automatiks/">
          <Linkedin color="white" size={"3rem"} />
          </a>
          <a href="https://twitter.com/Automatiks?t=6bqmDbqutbnp_SkuVm6K4Q&s=09">
          <Twitter color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;