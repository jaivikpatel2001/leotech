import React from "react";
import "./Contactform.css";

const Contact = () => {
  return (
    <>
      <div className="contactformcontainer" id="contact">
        <div className="contactformbg">
          <div className="cfupper">
            <div className="cftitle">Book with a demo</div>
            <div className="cfdesc">
              Thank you for considering Leotech IT Solutions as your IT partner.
              We look forward to the opportunity to collaborate and contribute
              to your success.
            </div>
          </div>
          <div className="formcontainer bg-white rounded-xl shadow-xl">
            <div className="cfcfformtitle">Contact Us</div>
            <div className="nameemail mt-8 flex justify-between">
              <div className="name flex flex-col">
                <label htmlFor="name">Name</label>
                <input
                  className="inputcss"
                  type="text"
                  name="name"
                  placeholder="Full name"
                  autoComplete="off"
                />
              </div>
              <div className="email flex flex-col">
                <label htmlFor="email">Email</label>
                <input
                  className="inputcss"
                  type="email"
                  name="email"
                  placeholder="Email address"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="company mt-4 flex flex-col">
              <label htmlFor="company">Company Name</label>
              <input
                className="inputcss"
                type="text"
                name="company"
                placeholder="Email address"
                autoComplete="off"
              />
            </div>
            <div className="message mt-4 flex flex-col">
              <label htmlFor="message">Message</label>
              <input
                className="msginputcss"
                type="text"
                name="message"
                placeholder="Email address"
                autoComplete="off"
              />
            </div>
            <div className="cf">
              <button className="cfbutton"> Request A Quote</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
