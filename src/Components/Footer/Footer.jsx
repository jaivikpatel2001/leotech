import React from "react";
import "../Footer/Footer.css";
import logo from "../../Assets/logo.png";
import fcall from "../../Assets/fcall.png";
import flocation from "../../Assets/flocation.png";
import fmail from "../../Assets/fmail.png";
import finsta from "../../Assets/finsta.png";
import ffacebook from "../../Assets/ffacebook.png";
import fpintrest from "../../Assets/fpintrest.png";
import ftwitter from "../../Assets/ftwitter.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <div className="footercontainer">
        <div className="footerwidth py-8">
          <motion.div
            className="frone py-8 flex justify-evenly align-items-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="lgoparent flex">
              <img className="frlogo" src={logo} alt="" />
            </div>
            <div className="callusparent flex">
              <img className="frlogo" src={fcall} alt="" />
              <div className="callchild ml-3">
                <div className="callus">Call Us</div>
                <div className="callusno">07824068954</div>
              </div>
            </div>
            <div className="mailusparent flex">
              <img className="frlogo" src={fmail} alt="" />
              <div className="mailchild ml-3">
                <div className="mailus">Mail Us</div>
                <div className="mailusid">
                  manav.shah@leotechitsolutions.com
                </div>
              </div>
            </div>
            <div className="locationparent flex">
              <img className="frlogo" src={flocation} alt="" />
              <div className="locatioinchild  ml-3">
                <div className="location">Location</div>
                <div className="locationid">
                  724 Greenford Road London UB6 8QR
                </div>
              </div>
            </div>
          </motion.div>
          <div className="hr">
            <hr />
          </div>
          <div className="frtwo flex justify-between align-items-center py-12">
            <motion.div
              className="fleft flex leading-9"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="quicklinksparent">
                <ul>
                  <li className="font-semibold greencolor">Quick Link</li>
                  <a href="#home">
                    <li>Home</li>
                  </a>
                  <a href="#about">
                    <li>About Us</li>
                  </a>
                  <a href="#testimonial">
                    <li>Testimonial</li>
                  </a>
                  <a href="#service">
                    <li>Services</li>
                  </a>
                  <a href="#contact">
                    <li>Contact</li>
                  </a>
                </ul>
              </div>
              <div className="ourservicesparent">
                <ul>
                  <li className="font-semibold greencolor">Our Services</li>
                  <li>Web Development and Design</li>
                  <li>Mobile App Development</li>
                  <li>Cloud Computing</li>
                  <li>Data Science and Analytics</li>
                  <li>E-commerce Solutions</li>
                </ul>
              </div>
            </motion.div>
            <motion.div
              className="fright"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <div className="inputrightparent rounded-lg px-8 py-4">
                <div className="subscribe mb-3 font-medium">Subscribe</div>
                <div className="join  mb-3">
                  Join Our Mailing List & to get our news.
                </div>
                <div className="inputbtn flex mb-3">
                  <input
                    className="input"
                    type="text"
                    placeholder="your email address"
                  />
                  <button className="btn"> Subscribe</button>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="hr">
            <hr />
          </div>
          <motion.div
            className="frthree flex justify-between align-items-center pt-4 pb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="copyleft">Copyright © LEOTECH.com</div>
            <div className="socialhandleright">
              <div className="follow flex">
                Follow :
                <img className="mx-4 object-contain" src={finsta} alt="" />
                <img className="mr-4 object-contain" src={ffacebook} alt="" />
                <img className="mr-4 object-contain" src={ftwitter} alt="" />
                <img className="mr-4 object-contain" src={fpintrest} alt="" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Footer;
