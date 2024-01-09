import React from "react";
import "../Mission/Mission.css";
import Image1 from "../../Assets/Image 1.png";
import Image2 from "../../Assets/Image 2.png";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <>
      <div className="mainbgformissioncontainer overflow-hidden">
        <div className="missioncontainer flex">
          <motion.div
            className="misleft"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="missiontitle">Our Mission</div>
            <div className="missiondesc">
              Our mission is to transform businesses through the strategic
              application of technology. We aim to be a trusted partner,
              providing innovative solutions that enhance efficiency,
              productivity, and overall success for our clients. By fostering a
              culture of collaboration and continuous learning, we strive to be
              a driving force behind our clients' digital transformation.
            </div>
            <div className="listcontianer mt-8 ">
              <div className="listcorrect">
                <div className="cimage"></div>
                <div className="ccontent">
                  Posting to social media, blogs, and messengers
                </div>
              </div>
              <div className="listcorrect">
                <div className="cimage"></div>
                <div className="ccontent">Working with images and videos </div>
              </div>
              <div className="listcorrect">
                <div className="cimage"></div>
                <div className="ccontent">
                  The Future of Writing Blog Articles{" "}
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="misright flex"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="imageone">
              <img src={Image1} alt="" />
            </div>
            <div className="imagetwo">
              <img src={Image2} alt="" />
            </div>
          </motion.div>
        </div>
        <div className="bottomsection py-12 ">
          <motion.div
            className="coreleft"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="coretitle">Core Values</div>
            <div className="coredesc">
              We currently support Facebook, Instagram, LinkedIn and Twitter.
              More to come.
            </div>
          </motion.div>
          <motion.div
            className="coreright flex gap-3"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <div className="corerightleft gap-3">
              <div className="inovation bg-white shadow-sm boxnoone">
                <div className="inovationicon"></div>
                <div className="inovationtitle ">Innovation</div>
                <div className="inovationdesc">
                  We embrace creativity and push boundaries to find unique
                  solutions.
                </div>
              </div>
              <div className="inovation bg-white shadow-sm boxnotwo">
                <div className="bugicon"></div>
                <div className="inovationtitle ">Client-Centric</div>
                <div className="inovationdesc">
                  Our clients are at the heart of everything we do, and we are
                  dedicated to exceeding their expectations
                </div>
              </div>
              {/* <div className="client"></div> */}
            </div>
            <div className="corerightright flex flex-col ">
              <div className="inovation bg-white shadow-sm boxnothree">
                <div className="databaseicon"></div>
                <div className="inovationtitle ">Integrity</div>
                <div className="inovationdesc">
                  We operate with honesty, transparency, and a commitment to
                  ethical practices
                </div>
              </div>
              <div className="inovation bg-white shadow-sm boxnofour">
                <div className="collabicon"></div>
                <div className="inovationtitle ">Collaboration</div>
                <div className="inovationdesc">
                  We believe in the power of teamwork and value the diverse
                  perspectives each team member brings.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Mission;
