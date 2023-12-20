import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="aboutcoontainer" id="about">
        <div className="atop">
          <div className="aboutbadge">About</div>
          <div className="aherotitle">
            <span className="about">About</span> <span className="us">Us</span>
          </div>
          <div className="aherodesc">
            Aenean quis est erat. Pellentesque pretium convallis ligula, vite
            euismod nisl vehicula non. In felis leo, faucibus vel sagittis
            pharetra, varius ullamcorper quam.
          </div>
        </div>

        <div className="abottom pt-8">
          <div className="ableft">
            <div className="upperimage"></div>
            <div className="lowerimage flex">
              <div className="lowerleftimg"></div>
              <div className="lowerrightimg"></div>
            </div>
          </div>
          <div className="abright w-1/3">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
