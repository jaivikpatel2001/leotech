import React from "react";
import "./Chooseyellow.css";

const Chooseyellow = () => {
  return (
    <>
      <div className="chooseyelowcontainer" id="faq">
        <div className="containerwidth">
          <div className="ytop">
            <div className="vectorimg"></div>
            <div className="vectortitle">Why Choose Leotech it solutions</div>
          </div>
          <div className="bottomy m-auto flex z-10">
            <div className="corerightlefty gap-2">
              <div className="inovationy bg-white rounded-md">
                <div className="inovationicon"></div>
                <div className="inovationtitleyeloow ">Expertise</div>
                <div className="inovationdesc">
                  Our team comprises seasoned professionals with extensive
                  experience in various IT domains and Web Development.
                </div>
              </div>
              <div className="inovationy   bg-white rounded-md">
                <div className="bugicon"></div>
                <div className="inovationtitleyeloow ">
                  Client Success Stories
                </div>
                <div className="inovationdesc">
                  Explore our portfolio to see how we've helped businesses
                  overcome challenges and achieve their goals.
                </div>
              </div>
              <div className="inovationy   bg-white rounded-md">
                <div className="databaseicon"></div>
                <div className="inovationtitleyeloow ">
                  Customized Solutions
                </div>
                <div className="inovationdesc">
                  We understand that each client is unique, and our solutions
                  are tailor-made to address specific needs.
                </div>
              </div>
              <div className="inovationy   bg-white rounded-md ">
                <div className="collabicon"></div>
                <div className="inovationtitleyeloow ">Proven Track Record</div>
                <div className="inovationdesc">
                  Include any notable achievements, certifications, or
                  recognitions your company has received.
                </div>
              </div>
              {/* <div className="client"></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chooseyellow;
