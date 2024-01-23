import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <div className="blueheight overflow-hidden">
        <motion.div
          className="left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <div className="heroformtext">
            Have a project in mind! Let’s work together.
          </div>
          <div className="formdata">
            <input
              className="inputfield"
              type="email"
              name="email"
              placeholder="Your email"
              autoComplete="off"
            />
            <button className="submit">Submit</button>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="right"
        ></motion.div> */}
      </div>
    </>
  );
};

export default Contact;
