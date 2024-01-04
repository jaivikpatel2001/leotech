import React from "react";
import "./Chooseyellow.css";
import { motion } from "framer-motion";

const Chooseyellow = () => {
  return (
    <>
      <div className="chooseyelowcontainer" id="faq">
        <div className="containerwidth">
          <motion.div
            className="ytop"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="vectorimg"></div>
            <div className="vectortitle">Why Choose Leotech it solutions</div>
          </motion.div>
          <motion.div
            className="bottomy m-auto flex z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="corerightlefty gap-2">
              <div className="inovationy bg-white rounded-md boxnoone">
                <div className="inovationicon"></div>
                <div className="inovationtitleyeloow ">Expertise</div>
                <div className="text-sm inovationdesc">
                  Our team comprises seasoned professionals with extensive
                  experience in various IT domains and Web Development.
                </div>
              </div>
              <div className="inovationy   bg-white rounded-md boxnotwo">
                <div className="bugicon"></div>
                <div className="inovationtitleyeloow ">
                  Client Success Stories
                </div>
                <div className="text-sm inovationdesc">
                  Explore our portfolio to see how we've helped businesses
                  overcome challenges and achieve their goals.
                </div>
              </div>
              <div className="inovationy   bg-white rounded-md boxnothree">
                <div className="databaseicon"></div>
                <div className="inovationtitleyeloow ">
                  Customized Solutions
                </div>
                <div className="text-sm inovationdesc">
                  We understand that each client is unique, and our solutions
                  are tailor-made to address specific needs.
                </div>
              </div>
              <div className="inovationy bg-white rounded-md boxnofour">
                <div className="collabicon"></div>
                <div className="inovationtitleyeloow ">Proven Track Record</div>
                <div className="text-sm inovationdesc">
                  Include any notable achievements, certifications, or
                  recognitions your company has received.
                </div>
              </div>
              {/* <div className="client"></div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Chooseyellow;
