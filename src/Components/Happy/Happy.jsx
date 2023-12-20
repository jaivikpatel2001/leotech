import React from "react";
import "./Happy.css";
import TestimonialSlider from "../Testimonial/Testimonial";

const Happy = () => {
  return (
    <>
      <div className="happycontainer py-24" id="testimonial">
        <div className="htop ">
          <div className="herobadge">Testimonial</div>
          <div className="hsherotitle ">
            <span className="ourhappy">Our Happy</span>
            <span className="family"> Family</span>
          </div>
        </div>
        <hr />
        <div className="hbottom ">
          <div className="hbtitle ">
            Businesses all over the world trust Buffer to build their brand
          </div>

          <TestimonialSlider />
          <div className="statastics">
            <div className="award  flex ">
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
        </div>
      </div>
    </>
  );
};

export default Happy;
