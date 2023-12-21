import React from "react";
import "../Industries/Industries.css";

const Industries = () => {
  return (
    <>
      <div className="industriescontainer py-12" id="service">
        <div className="itop ">
          <div className="herobadge">INDUSTRIES</div>
          <div className="sherotitle ">
            <span className="ind">Industry</span>{" "}
            <span className="serve">We Serve</span>{" "}
          </div>
          <div className="sdescriptioin">
            Aenean quis est erat. Pellentesque pretium convallis ligula, vite
            euismod nisl vehicula non. In felis leo, faucibus vel sagittis
            pharetra, varius ullamcorper quam.
          </div>
        </div>
        <div className="ibottom">
          <div className="bleft">
            <div className="lone text-white w-fit my-4 py-3 px-4 pr-16 border-2 rounded-full">
              Web Development & Design :{" "}
            </div>
            <div className="ltwo w-fit my-4 py-3 px-4 pr-16 border-2 rounded-full">
              Mobile App Development :
            </div>
            <div className="lthree w-fit my-4 py-3 px-4 pr-16 border-2 rounded-full">
              Cloud Computing :
            </div>
            <div className="lfour w-fit my-4 py-3 px-4 pr-16 border-2 rounded-full ">
              Artificial Intelligence (AI) <br /> Machine Learning (ML) :
            </div>
            <div className="lfive w-fit my-4 py-3 px-4 pr-16 border-2 rounded-full ">
              Data Science & Analytics :
            </div>
            <div className="lsix w-fit my-4 border-2 py-3 px-4 pr-16 rounded-full ">
              E-Commerce Solutions :{" "}
            </div>
          </div>
          <div className="bright">
            <div className="brleft mt-20 ">
              <div className="sicons">
                <div className="figma"></div>
                <div className="diamond"></div>
                <div className="xd"></div>
              </div>
              <div className="uiux my-7">UI/UX Design</div>
              <div className="list leading-7">
                <ul>
                  <li>Front-end Development</li>
                  <li>Back-end Development</li>
                  <li>Full-stack Development</li>
                  <li>Responsive web Design</li>
                </ul>
              </div>
              <div className="arrow"></div>
            </div>
            <div className="brright mt-20 ">
              <div className="sicons">
                <div className="ai"></div>
                <div className="ps"></div>
                <div className="ae"></div>
              </div>
              <div className="uiux my-7">Graphic Design</div>
              <div className="list leading-7">
                <ul>
                  <li>Illustration Design</li>
                  <li>Motion Graphic & Animation</li>
                  <li>Icon Design</li>
                  <li>Logo Design</li>
                </ul>
              </div>
              <div className="arrow"></div>
            </div>
            <div className="vector"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
