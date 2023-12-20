import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contactcontainer">
        <div className=" w-full blueheight">
          <div className="left">
            <div className="heroformtext ">
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
          </div>
          <div className="right"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
