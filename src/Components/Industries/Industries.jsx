import React from "react";
import "../Industries/Industries.css";
import arrowimage from "../../Assets/arrow.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Industries = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState("webdevelopment"); // Default selected menu item

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  const renderComponent = () => {
    switch (selectedMenuItem) {
      case "webdevelopment":
        return (
          <>
            <motion.div
              className="bright"
              initial={{ opacity: 0, overflowBlock: "hidden" }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="brleft mt-12">
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
            </motion.div>
          </>
        );
      case "Mobiledevelopment":
        return (
          <>
            <motion.div
              className="bright"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="brleft mt-12">
                {/* <div className="sicons">
                  <div className="figma"></div>
                  <div className="diamond"></div>
                  <div className="xd"></div>
                </div> */}
                <div className="uiux my-7">Mobile Development</div>
                <div className="list leading-7">
                  <ul>
                    <li className="list-disc">Flutter </li>
                    <li className="list-disc">Android</li>
                    <li className="list-disc">Ios </li>
                    <li className="list-disc">etc</li>
                  </ul>
                </div>
                <div className="arrow">
                  <img src={arrowimage} className="arrowimagfirst" alt="" />
                </div>
              </div>
              {/* <div className="brright mt-12 ">
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
              </div> */}
              <div className="vector"></div>
            </motion.div>
          </>
        );
      case "cloudcomputing":
        return (
          <>
            <motion.div
              className="bright"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="brleft mt-12">
                {/* <div className="sicons">
            <div className="figma"></div>
            <div className="diamond"></div>
            <div className="xd"></div>
          </div> */}
                <div className="uiux my-7">Cloud Computing</div>
                <div className="list leading-7">
                  <ul>
                    <li className="list-disc">AWS </li>
                    <li className="list-disc">MS Azure</li>
                    <li className="list-disc">etc </li>
                    <li className="list-disc">etc</li>
                  </ul>
                </div>
                <div className="arrow">
                  <img src={arrowimage} className="arrowimagfirst" alt="" />
                </div>
              </div>
              {/* <div className="brright mt-12 ">
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
        </div> */}
              <div className="vector"></div>
            </motion.div>
          </>
        );
      case "aiml":
        return (
          <>
            <>
              <motion.div
                className="bright"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="brleft mt-12">
                  {/* <div className="sicons">
        <div className="figma"></div>
        <div className="diamond"></div>
        <div className="xd"></div>
      </div> */}
                  <div className="uiux my-7">AI & ML</div>
                  <div className="list leading-7">
                    <ul>
                      <li className="list-disc">Model training </li>
                      <li className="list-disc">Prefilled Model</li>
                      <li className="list-disc">Clustering </li>
                      <li className="list-disc">etc</li>
                    </ul>
                  </div>
                  <div className="arrow">
                    <img src={arrowimage} className="arrowimagfirst" alt="" />
                  </div>
                </div>
                {/* <div className="brright mt-12 ">
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
    </div> */}
                <div className="vector"></div>
              </motion.div>
            </>
          </>
        );
      case "datascience":
        return (
          <>
            <>
              <motion.div
                className="bright"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="brleft mt-12">
                  {/* <div className="sicons">
        <div className="figma"></div>
        <div className="diamond"></div>
        <div className="xd"></div>
      </div> */}
                  <div className="uiux my-7">Data Science</div>
                  <div className="list leading-7">
                    <ul>
                      <li className="list-disc">Xcell </li>
                      <li className="list-disc">Power Bi</li>
                      <li className="list-disc">etc </li>
                      <li className="list-disc">etc</li>
                    </ul>
                  </div>
                  <div className="arrow">
                    <img src={arrowimage} className="arrowimagfirst" alt="" />
                  </div>
                </div>
                {/* <div className="brright mt-12 ">
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
    </div> */}
                <div className="vector"></div>
              </motion.div>
            </>
          </>
        );
      case "ecomsolution":
        return (
          <>
            <>
              <motion.div
                className="bright"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="brleft mt-12">
                  {/* <div className="sicons">
        <div className="figma"></div>
        <div className="diamond"></div>
        <div className="xd"></div>
      </div> */}
                  <div className="uiux my-7">E-commerce Solution</div>
                  <div className="list leading-7">
                    <ul>
                      <li className="list-disc">AWS </li>
                      <li className="list-disc">MS Azure</li>
                      <li className="list-disc">etc </li>
                      <li className="list-disc">etc</li>
                    </ul>
                  </div>
                  <div className="arrow">
                    <img src={arrowimage} className="arrowimagfirst" alt="" />
                  </div>
                </div>
                {/* <div className="brright mt-12 ">
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
    </div> */}
                <div className="vector"></div>
              </motion.div>
            </>
          </>
        );
      // Add cases for other menu items as needed
      default:
        return null;
    }
  };

  return (
    <>
      <div className="industriescontainer py-12" id="service">
        <motion.div
          className="itop "
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* <div className="herobadgei">INDUSTRIES</div> */}
          <div className="herobadgei">Technologies</div>

          {/* <div className="sherotitle ">
            <span className="ind">Industry</span>{" "}
            <span className="serve">We Serve</span>{" "}
          </div> */}
          <div className="sherotitle ">
            <span className="ind">Our</span>{" "}
            <span className="serve">Services</span>{" "}
          </div>
          <div className="sdescriptioin">
            Aenean quis est erat. Pellentesque pretium convallis ligula, vite
            euismod nisl vehicula non. In felis leo, faucibus vel sagittis
            pharetra, varius ullamcorper quam.
          </div>
        </motion.div>
        <div className="ibottom">
          <motion.div
            className="bleft "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div
              className="lone w-fit my-4 py-3 px-4 pr-5 border-2 rounded-full "
              onClick={() => handleMenuItemClick("webdevelopment")}
            >
              Web Development & Design :{" "}
            </div>
            <div
              className="ltwo w-fit my-4 py-3 px-4 pr-12 border-2 rounded-full"
              onClick={() => handleMenuItemClick("Mobiledevelopment")}
            >
              Mobile App Development :
            </div>
            <div
              className="lthree w-fit my-4 py-3 px-4 pr-12 border-2 rounded-full"
              onClick={() => handleMenuItemClick("cloudcomputing")}
            >
              Cloud Computing :
            </div>
            <div
              className="lfour w-fit my-4 py-3 px-4 pr-12 border-2 rounded-full "
              onClick={() => handleMenuItemClick("aiml")}
            >
              Artificial Intelligence (AI) <br /> Machine Learning (ML) :
            </div>
            <div
              className="lfive w-fit my-4 py-3 px-4 pr-12 border-2 rounded-full "
              onClick={() => handleMenuItemClick("datascience")}
            >
              Data Science & Analytics :
            </div>
            <div
              className="lsix w-fit my-4 border-2 py-3 px-4 pr-12 rounded-full "
              onClick={() => handleMenuItemClick("ecomsolution")}
            >
              E-Commerce Solutions :{" "}
            </div>
          </motion.div>
          {/* webdevelopment component */}

          {/* <motion.div
            className="bright"
            initial={{ opacity: 0, overflowBlock: "hidden" }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
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
          </motion.div> */}
          {renderComponent()}
        </div>
      </div>
    </>
  );
};

export default Industries;
