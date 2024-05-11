import React from "react";
import img1 from "../.././../assets/images/index.png";
const GetInTouch = () => {
  return (
    <div className="  min-h-[500px]  bg-red-400 -m-2">
      <figure className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            style={{ fill: "white" }}
            d="M500,98.9L0,6.1V0h1000v6.1L500,98.9z"
          ></path>
        </svg>
      </figure>
      <div className="hero-content text-center     mx-auto ">
        <div className="max-w-2xl text-center ">
          <h1 className="text-4xl font-bold">WANT TO GET IN TOUCH?</h1>
          <p className="py-6">
            We are looking forward to discussing your next project..
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <figure>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            style={{ fill: "white" }}
            d="M500.2,94.7L0,0v100h1000V0L500.2,94.7z"
          ></path>
        </svg>
      </figure>
    </div>
  );
};

export default GetInTouch;
