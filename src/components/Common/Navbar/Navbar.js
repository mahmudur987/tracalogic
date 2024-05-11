// Navigation component
import React from "react";
import logo from "@/assets/images/site-logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  const menuItems = (
    <>
      {" "}
      <li>
        <Link href={"#"}>
          <span>Products & Solution</span>

          <FaAngleDown />
        </Link>
      </li>
      <li>
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
  );
};

export default Navbar;
