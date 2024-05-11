"use client";
import React, { useRef, useState } from "react";
import logo from "@/assets/images/site-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  const [show1, setShow1] = useState(false);
  const dropdownRef = useRef();

  const handleMouseEnter = () => {
    setShow1(true);
  };

  const handleMouseLeave = () => {
    // Only close the dropdown if the mouse is not inside the dropdown
    if (!dropdownRef.current.contains(event.relatedTarget)) {
      setShow1(false);
    }
  };
  const menuItems = (
    <>
      {" "}
      <li onMouseEnter={() => setShow1(true)}>
        <Link href={"#"}>
          <span>Products & Solution</span>

          <FaAngleDown />
        </Link>
      </li>
      <li onMouseEnter={() => setShow1(false)}>
        <Link href={"#"}>Services</Link>
      </li>
      <li>
        <Link href={"#"}>Brochures</Link>
      </li>
      <li>
        <Link href={"#"}>
          <span>Media</span>

          <FaAngleDown />
        </Link>
      </li>
      <li>
        <Link href={"#"}>Testimonials</Link>
      </li>
      <li>
        <Link href={"#"}>About RBS</Link>
      </li>
    </>
  );
  return (
    <div className=" container mx-auto  relative ">
      <div className="navbar bg-base-100">
        <div className="w-[30%] justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image height={50} width={140} src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="mx-5">
          <a className="btn bg-[#fcb900]">Contact Us</a>
        </div>
      </div>
      {show1 && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
          className=" w-full absolute top-16"
          style={{ zIndex: "99999999" }}
        >
          <div className="flex gap-5 bg-sky-100 opacity-1 max-w-6xl mx-auto py-5 px-5">
            {/* left */}
            <div className="max-w-24 w-full flex justify-center ">
              <ul className=" flex flex-col gap-1">
                <li>
                  <Link href={"#"}> Projects</Link> <span>{">"}</span>
                </li>
                <li>
                  <Link href={"#"}> Solution</Link> <span>{">"}</span>
                </li>
              </ul>
            </div>
            {/* right */}

            <div className="flex-1 flex justify-between ">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold border-b border-black">
                  TOPS Terminal Solution
                </h3>
                <ul className="text-sm flex flex-col gap-1">
                  <li>
                    <a href="#">TOPX Intelligent 3D</a>
                  </li>
                  <li>
                    <a href="#">TOPS Expert Enterprise</a>
                  </li>
                  <li>
                    <a href="#">TOPX Expert</a>
                  </li>
                  <li>
                    <a href="#">TOPO Expert</a>
                  </li>
                  <li>
                    <a href="#">KPI Dashboard</a>
                  </li>
                  <li>
                    <a href="#">Optional Modules</a>
                  </li>
                  <li>
                    <a href="#">TOPS Expert Cloud</a>
                  </li>
                  <li>
                    <a href="#">TOPS Cloud Pricing</a>
                  </li>
                  <li>
                    <a href="#">TOPS Advance - Legacy System</a>
                  </li>
                  <li>
                    <a href="#">Migrating from Advance to Expert</a>
                  </li>
                </ul>
              </div>

              {/* 2 */}

              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold border-b border-black">
                  <a href="#">TOPS Innovative Technologies</a>
                </h3>

                <ul className="text-sm flex flex-col gap-1">
                  <li>
                    <Link href="#">Artificial Intelligence (AI)</Link>
                  </li>
                  <li>
                    <Link href="#">Automation</Link>
                  </li>
                  <li>
                    <Link href="#">Cloud</Link>
                  </li>
                  <li>
                    <Link href="#">Optimization</Link>
                  </li>
                  <li>
                    <Link href="#">SmartTrack</Link>
                  </li>
                  <li>
                    <Link href="#">Real-time Control &amp; Planning</Link>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-bold border-b border-black">
                  <Link href="#">TOPS Optional Modules</Link>
                </h3>

                <ul className="text-sm flex flex-col gap-1">
                  <li>
                    <Link href="#">Billing</Link>
                  </li>
                  <li>
                    <Link href="#">Container Freight Station (CFS)</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Differential Global Positioning System (DGPS)
                    </Link>
                  </li>
                  <li>
                    <Link href="#">Gate Operating System Interface (GOS)</Link>
                  </li>
                  <li>
                    <Link href="#">Reefer Monitoring Integration</Link>
                  </li>
                  <li>
                    <Link href="#">Report Designer</Link>
                  </li>
                  <li>
                    <Link href="#">Truck Appointment</Link>
                  </li>
                  <li>
                    <Link href="#">Vehicle Booking System</Link>
                  </li>
                  <li>
                    <Link href="#">Web Report Server</Link>
                  </li>
                  <li>
                    <Link href="#">
                      Web Service Interface with Third Party Software
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
