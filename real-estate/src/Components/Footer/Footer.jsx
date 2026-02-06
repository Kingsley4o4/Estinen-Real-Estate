import React from "react";
import "./footer.css";
import logoImg from "../Navbar/Img/Logo.png";
import {
  HiMail,
  HiMailOpen,
  HiOutlineMail,
  HiOutlinePaperAirplane,
  HiPaperAirplane,
} from "react-icons/hi";
import { FaRegPaperPlane ,  FaTwitterSquare , FaFacebookF ,FaInstagram , FaLinkedinIn} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <h1>Start Your Real Estate Journey Today</h1>
        <p className="footer-text">
          Your dream property is just a click away. whether you're looking for a
          new home,a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate gols and explore our available
          properties or get in touch with our team for personalized assistance
        </p>
        <div className="explore-button">
          <button className="footer-btn">Explore Properties</button>
        </div>
        <div className="underline_footer"></div>
     {/* hdhdhhdhhhdhhdhdhdhhhddh */}

      <div className="footer-bottom">
        <div className="img-container">
          <img className="footer-logo" src={logoImg} alt="company_logo" />
          <div className="input-mail-wrapper">
            <input
              className="input-mail"
              type="email"
              placeholder="Enter Your Email"
            />
            <HiOutlineMail className="mail-icon" />
            <FaRegPaperPlane
              onClick={() => {
                prompt("are your sure email is active and valid");
              }}
              className="send_mailBtn"
            />
          </div>
        </div>
        <div className="footer-link">
          <div className="footer-link-wrapper1">
            <h3>Home</h3>
            <p>Hero Section</p>
            <p>Blog</p>
            <p>faq</p>
            <p>yesh</p>

            <div className="footer-bottom-line"></div>
          </div>
          <div className="line-container"></div>
          <div className="footer-link-wrapper2">
            <h3>About Us</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>faq</p>
            <p>yeah</p>

            <div className="footer-bottom-line"></div>
          </div>
        </div>
        <div className="footer-link">
          <div className="footer-link-wrapper2">
            <h3>About Us</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>faq</p>
            <p>yeah</p>

            <div className="footer-bottom-line"></div>
          </div>
          <div className="line-containernd"></div>

          <div className="footer-link-wrapper2">
            <h3>About Us</h3>
            <p>About Us</p>
            <p>Blog</p>
            <p>faq</p>
            <p>yeah</p>

            <div className="footer-bottom-line"></div>
          </div>
        </div>
      </div>
      </div>
      <div className="social-link">
        <div className="social-link-wrapper">
            <FaFacebookF className="fa" />
        <FaInstagram />
        <FaLinkedinIn /> 
        <FaTwitterSquare  />
        
        
       
       

        </div>
        
      </div>
       <p className="copyright">@2025 Estatein. All rights reserved.</p>
     
    </div>
     
  );
};

export default Footer;
