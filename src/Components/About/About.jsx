import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="aboutcoontainer overflow-hidden" id="about">
        <motion.div
          className="atop"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="aboutbadge">ABOUT</div>
          <div className="aherotitle">
            <span className="about">About</span> <span className="us">Us</span>
          </div>
          <div className="aherodesc">
            Aenean quis est erat. Pellentesque pretium convallis ligula, vite
            euismod nisl vehicula non. In felis leo, faucibus vel sagittis
            pharetra, varius ullamcorper quam.
          </div>
        </motion.div>

        <div className="abottom pt-8">
          <motion.div
            className="ableft"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="upperimage"></div>
            <div className="lowerimage flex">
              <div className="lowerleftimg"></div>
              <div className="lowerrightimg"></div>
            </div>
          </motion.div>
          <motion.div
            className="abright w-1/3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="ourstorytitle">Our Story</div>
            <div className="outdesc">
              Founded in [2018], Leotech IT Solutions has rapidly grown from a
              small startup to a dynamic force in the IT industry. Our journey
              has been marked by a commitment to excellence and a relentless
              pursuit of technological advancements. We understand the evolving
              landscape of information technology and continuously adapt to stay
              at the forefront of the industry.
            </div>
            <br />
            <hr />
            <br />
            <div className="manavshah flex align-items-center">
              <div className="planeicon"></div>
              <div className="ctoname font-medium">
                Manav shah - <br />
                Chief Technology Officer (CTO)
              </div>
            </div>
            <br />
            <div className="darshaksolanki flex">
              <div className="saharaicon"></div>
              <div className="ceoname font-medium">
                Darshak Solanki - <br />
                Chief Executive Officer (CEO)
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
