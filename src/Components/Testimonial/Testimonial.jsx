import React from "react";
import previous from "../../Assets/next.png";
import userimg from "../../Assets/Photo.png";
import "../Testimonial/Testimonial.css";

const Testimonial = () => {
  return (
    <>
      <div className="testimonialcontainer">
        <div className="tleft  ">
          <button className="">
            <img className="previous" src={previous} alt="" />
          </button>
        </div>
        <div className="user1">
          <div className="userimg">
            <img src={userimg} className="rounded-full uimage" alt="" />
          </div>
          <div className="unameuprof">
            {" "}
            Mick G., Head of Sales and Marketing
          </div>
          <div className="tuserdesc mt-8 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.{" "}
          </div>
        </div>
        <div className="tright">
          <button>
            <img src={previous} alt="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
