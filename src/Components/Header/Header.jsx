import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import heroimg from "../../Assets/Heroimg.png";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <div className="bgcolor" id="home">
        <header className="text-gray-600 body-fonts ">
          <Navbar />
          {/* <div class="container bg-white w-12/12 rounded mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center px-auto nav">
          <a
            href="#home"
            class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <img src={logo} className="logo" alt="" />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a
              href="#home"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              Home
            </a>
            <a
              href="#about"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              About
            </a>
            <a
              href="#service"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              Service
            </a>
            <a
              href="#testimonial"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              Testimonial
            </a>
            <a
              href="#cta"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              CTA
            </a>
            <a
              href="#faq"
              class="mr-5 hover:text-gray-900 cursor-pointer navmenu"
            >
              FAQ
            </a>
          </nav>
          <a href="#contact">
            <button class="inline-flex items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-700  rounded text-base mt-4 md:mt-0 navherobtn">
              Contact Us
            </button>
          </a>
        </div> */}
        </header>

        <div className="herocontainer w-10/12 m-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="heroleft"
          >
            <div className=" herobadge">WELCOME TO LEOTECH</div>
            <div className="herotitle">
              Welcome to <span className="leotech"> Leotech </span> IT solutions
            </div>
            <div className="herotitlemobile">
              Welcome to <span className="leotechmobile"> Leotech </span> IT
              solutions
            </div>
            <div className="herodescription">
              At Leotech IT solutions, we are passionate about leveraging
              technology to drive innovation and empower businesses. With a
              dedicated team of skilled professionals, we strive to deliver
              cutting-edge IT solutions tailored to meet the unique needs of our
              clients.
            </div>
            <div className=" herobtn">
              <button> More About Us</button>
            </div>
          </motion.div>
          <div className="heroright">
            <img className="heroimggirl" src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
