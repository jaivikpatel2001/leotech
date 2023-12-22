import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white p-4  navcontpad navbartotal">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#home">
          <img src={Logo} className="logo" alt="" />
        </a>

        {/* Hamburger Menu */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-600 focus:outline-none focus:border-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex lg:items-center lg:justify-between w-2/4 mobilemenu ${
            isOpen
              ? "flex flex-col items-center absolute w-full bg-white mt-36 set"
              : "hidden"
          }`}
        >
          <div className="lg:flex items-center navmenumobile">
            <a
              href="#home"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              About
            </a>
            <a
              href="#service"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              Service
            </a>
            <a
              href="#testimonial"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              Testimonial
            </a>
            <a
              href="#cta"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              CTA
            </a>
            <a
              href="#faq"
              className="text-blue-600 font-small mx-4 hover:underline hover:font-medium block lg:inline mobilemenuset"
              onClick={closeMenu}
            >
              FAQ
            </a>
          </div>
          <a href="#contact">
            <button className="bg-blue-500 py-2 px-4 rounded-lg text-white font-small mx-2 block lg:inline mobilemenuset">
              Contact Us
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
