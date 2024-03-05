import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div>
          <h1>MonkeySeeMonkeyDo</h1>
          <p></p>
          <div className="social-links">
            <div>
              <a href={"https://www.facebook.com/IncedoInc"}><FaFacebookF size={30} /></a>
            </div>
            <div>
              <a href={"https://twitter.com/IncedoInc"}><FaTwitter size={30} /></a>
            </div>
            <div>
              <a href={"https://www.linkedin.com/company/incedo-inc/"}><FaLinkedinIn size={30} /></a>
            </div>
            <div>
              <a href={"https://www.youtube.com/channel/UC6LjAUc6LyvLSwrEOMJaH_Q"}><FaYoutube size={30} /></a>
            </div>
            <div>
              <a href={""}><FaInstagram size={30} /></a>
            </div>
          </div>
        </div>
        <div className="footer-info">
          © Copyright 2024 MonkeySeeMonkeyDo.
        </div>
      </div>
    </div>
  );
};

export default Footer;
