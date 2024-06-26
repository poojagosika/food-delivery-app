import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="footer-logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            inventore quod nulla a magnam soluta consectetur quaerat, iste hic
            vel quisquam fuga corporis, excepturi voluptatum accusamus?
            Quibusdam accusantium pariatur placeat.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>Privacy Policy</li>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+91-9999999999</li>
            <li>admin@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
