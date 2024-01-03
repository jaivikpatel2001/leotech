import React from "react";
import "./Happy.css";
import TestimonialSlider from "../Testimonial/Testimonial";
import { motion } from "framer-motion";

const Happy = () => {
  return (
    <>
      <div className="happycontainer py-12" id="testimonial">
        <motion.div
          className="htop "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="herobadge">TESTIMONIAL</div>
          <div className="hsherotitle ">
            <span className="ourhappy">Our Happy</span>
            <span className="family"> Family</span>
          </div>
        </motion.div>
        <motion.div
          className="hbottom "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <TestimonialSlider />
          <div className="w-3/4">
            <hr />
          </div>
          <div className="hbtitle mt-4">
            Businesses all over the world trust Buffer to build their brand
          </div>

          <div className="statastics">
            <div className="award flex ">
              <div className="trophy w-fit"></div>
              <div className="sdescription">
                <div className="sdescstats text-center ">17+</div>
                <div className="sdesctitle text-center">AWARDS REWARDED</div>
              </div>
            </div>
            <div className="experience flex ">
              <div className="siconexp"></div>
              <div className="sdescription">
                <div className="sdescstats text-center">23+</div>
                <div className="sdesctitle text-center">
                  YEARS OF EXPERIENCE
                </div>
              </div>
            </div>
            <div className="client flex align-items-center">
              <div className="siconhappy"></div>
              <div className="sdescription">
                <div className="sdescstats text-center">183+</div>
                <div className="sdesctitle text-center">HAPPY CLIENTS</div>
              </div>
            </div>
            <div className="project flex align-items-center">
              <div className="siconproject"></div>
              <div className="sdescription">
                <div className="sdescstats text-center">315+</div>
                <div className="sdesctitle text-center">COMPLETED PROJECTS</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Happy;
