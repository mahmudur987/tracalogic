import React from "react";
import banner from "@/assets/images/banner.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div
      className="hero min-h-[600px] "
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className=" text-center text-neutral-content justify-end">
        <div className="max-w-2xl text-end">
          <h1 className="mb-5 text-3xl font-bold">
            EVERYTHING YOU NEEDED IN TRACKING
          </h1>
          <p className="mb-5">Student Tracking System</p>
          <p className="mb-5">Smart City Solutions</p>
          <p className="mb-5">GPS Tracker for Business</p>
          <p className="mb-5">Personnel GPS Tracker</p>
          <p className="mb-5">
            Integrated Command Control Center for Smart Cities
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
