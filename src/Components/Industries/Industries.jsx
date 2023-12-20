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
            <div className="lone w-fit py-1 px-4 border-2 rounded-2xl">
              Web Development & Design :{" "}
            </div>
            <div className="ltwo w-fit py-1 px-4 border-2 rounded-2xl my-2">
              Mobile App Development :
            </div>
            <div className="lthree w-fit py-1 px-4 border-2 rounded-2xl">
              Cloud Computing :
            </div>
            <div className="lfour w-fit py-1 px-4 border-2 rounded-2xl mt-2">
              Artificial Intelligence (AI) <br /> Machine Learning (ML) :
            </div>
            <div className="lfive w-fit py-1 px-4 border-2 rounded-2xl my-2">
              Data Science & Analytics :
            </div>
            <div className="lsix w-fit border-2 py-1 px-4 rounded-2xl ">
              E-Commerce Solutions :{" "}
            </div>
          </div>
          <div className="bright">
            <div className="brleft mt-10 mr-5">
              <div className="sicons">
                <div className="figma"></div>
                <div className="diamond"></div>
                <div className="xd"></div>
              </div>
              <div className="uiux my-5">UI/UX Design</div>
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
            <div className="brright mt-10">
              <div className="sicons">
                <div className="ai"></div>
                <div className="ps"></div>
                <div className="ae"></div>
              </div>
              <div className="uiux my-5">UI/UX Design</div>
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
