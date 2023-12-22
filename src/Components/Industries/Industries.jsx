import React from "react";
import "../Industries/Industries.css";
import arrowimage from "../../Assets/arrow.png";

const Industries = () => {
  return (
    <>
      <div className="industriescontainer py-12" id="service">
        <div className="itop ">
          <div className="herobadgei">INDUSTRIES</div>
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
            <div className="lone text-white w-fit my-4 py-3 px-4 pr-24 border-2 rounded-full">
              Web Development & Design :{" "}
            </div>
            <div className="ltwo w-fit my-4 py-3 px-4 pr-24 border-2 rounded-full">
              Mobile App Development :
            </div>
            <div className="lthree w-fit my-4 py-3 px-4 pr-24 border-2 rounded-full">
              Cloud Computing :
            </div>
            <div className="lfour w-fit my-4 py-3 px-4 pr-24 border-2 rounded-full ">
              Artificial Intelligence (AI) <br /> Machine Learning (ML) :
            </div>
            <div className="lfive w-fit my-4 py-3 px-4 pr-24 border-2 rounded-full ">
              Data Science & Analytics :
            </div>
            <div className="lsix w-fit my-4 border-2 py-3 px-4 pr-24 rounded-full ">
              E-Commerce Solutions :{" "}
            </div>
          </div>
          <div className="bright">
            <div className="brleft mt-12 ">
              <div className="sicons">
                <div className="figma"></div>
                <div className="diamond"></div>
                <div className="xd"></div>
              </div>
              <div className="uiux my-7">UI/UX Design</div>
              <div className="list leading-7">
                <ul>
                  <li className="list-disc">Front-end Development</li>
                  <li className="list-disc">Back-end Development</li>
                  <li className="list-disc">Full-stack Development</li>
                  <li className="list-disc">Responsive web Design</li>
                </ul>
              </div>
              <div className="arrow">
                <img src={arrowimage} className="arrowimagfirst" alt="" />
              </div>
            </div>
            <div className="brright mt-12 ">
              <div className="sicons">
                <div className="ai"></div>
                <div className="ps"></div>
                <div className="ae"></div>
              </div>
              <div className="uiux my-7">Graphic Design</div>
              <div className="list  leading-7">
                <ul>
                  <li className="list-disc">Illustration Design</li>
                  <li className="list-disc">Motion Graphic & Animation</li>
                  <li className="list-disc">Icon Design</li>
                  <li className="list-disc">Logo Design</li>
                </ul>
              </div>
              <div className="arrow">
                <img src={arrowimage} className="arrowimagi" alt="" />
              </div>
            </div>
            <div className="vector"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industries;
