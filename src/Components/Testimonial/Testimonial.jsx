import React, { useState } from "react";
import previous from "../../Assets/next.png";
import userimg from "../../Assets/Photo.png";
import "../Testimonial/Testimonial.css";
import user1 from "../../Assets/Testimonial/user1.jpg";
import user2 from "../../Assets/Testimonial/user2.png";
import { motion } from "framer-motion";

const Testimonial = () => {
  const testimonialsArray = [
    {
      image: userimg,
      name: " Mick G., Head of Sales and Marketing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown ",
    },
    {
      image: user1,
      name: "Jane Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      image: user2,
      name: "Jane Doe",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
    },
    // Add more testimonials as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialsArray.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonialsArray.length - 1 ? 0 : prevSlide + 1
    );
  };

  const currentTestimonial = testimonialsArray[currentSlide];

  return (
    <>
      <div className="testimonialcontainer overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="tleft"
        >
          <button onClick={handlePrevClick}>
            <img className="previous" src={previous} alt="Previous" />
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="user1 shadow-lg mx-2 "
        >
          <div className="userimg mb-4">
            <img
              src={currentTestimonial.image}
              className="rounded-full uimage"
              alt=""
            />
          </div>
          <div className="unameuprof">{currentTestimonial.name}</div>
          <div className="tuserdesc mt-8 text-justify">
            {currentTestimonial.description}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="tright"
        >
          <button onClick={handleNextClick}>
            <img className="next" src={previous} alt="Next" />
          </button>
        </motion.div>
        <hr />
      </div>
    </>
  );
};

export default Testimonial;
