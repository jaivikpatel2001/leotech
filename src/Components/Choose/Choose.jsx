import React from "react";
import logo from "../../Assets/logoforchoose.png";
import "./Choose.css";

const Choose = () => {
  return (
    <>
      <div className="choosecontainer " id="cta">
        <div className="top">
          <div className="cherotitle w-fit m-auto">
            <span className="why">Why</span>
            <span className="chooseus"> Choose us</span>
          </div>
          <div className="cherodesc m-auto">
            Voilinta is fully reserved. Unlike banks, we don’t loan out your
            money. We publish our holdings and obligations in real time.
          </div>
        </div>
        <div className="bottom justify-between m-auto">
          <div className="logoleft"></div>
          <div className="leoparent">
            <div className="leotech w-fit text-center m-auto flex align-items-center">
              <img src={logo} className="smalllion" alt="" /> Leotech
            </div>
            <div className="bg-blue-500 lh shadow-2xl">
              <div className="do">FEATURES INCLUDED :</div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className="text-white listcontent">
                  No hidden fees. No surprises
                </div>
              </div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className="text-white listcontent">
                  Manage taxes, automatically
                </div>
              </div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className=" text-white listcontent">
                  Supports 190+ countries
                </div>
              </div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className="text-white listcontent">
                  Provides 24/7 live support
                </div>
              </div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className=" text-white listcontent">
                  Works with the real exchange rate
                </div>
              </div>
              <div className="listitemparent">
                <div className="correct"></div>
                <div className=" text-white listcontent">
                  Integrates seamlessly
                </div>
              </div>
            </div>
          </div>
          <div className="vs text-white bg-yellow-600 rounded-full ">
            <div className="vstext">VS</div>
          </div>
          <div className="otherparent ">
            <div className="othertech w-fit text-center m-auto">Other Apps</div>
            <div className="bg-white lh shadow-2xl">
              <div className="dont">FEATURES NOT INCLUDED :</div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">Complicated fee structure</div>
              </div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">
                  Need a lot of manual tax management
                </div>
              </div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">Support 50-100 countries</div>
              </div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">
                  Have poor support and weekends off
                </div>
              </div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">
                  Use unfair, higher exchange rates
                </div>
              </div>
              <div className="listitemparent">
                <div className="wrong"></div>
                <div className="listcontent">Have spotty integrations</div>
              </div>
            </div>
          </div>

          <div className="logoright"></div>
        </div>
      </div>
    </>
  );
};

export default Choose;
