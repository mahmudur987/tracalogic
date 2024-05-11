import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center gap-20 p-10   bg-gray-700 text-white">
      <nav className="flex flex-col max-w-42 w-full ">
        <h6 className="footer-title text-xl">QUICK LINKS</h6>
        <a href="/" className="link link-hover">
          Home
        </a>
        <a href="/about" className="link link-hover">
          About RBS
        </a>
        <a href="/contact" className="link link-hover">
          Contact Us
        </a>
        <a href="/testimonials" className="link link-hover">
          Testimonials
        </a>
        <a href="/brochures" className="link link-hover">
          Brochures
        </a>
        <a href="/news" className="link link-hover">
          News and Blog
        </a>
        <a href="/glossary" className="link link-hover">
          Glossary
        </a>
      </nav>
      <nav className="flex flex-col max-w-42 w-full ">
        <h6 className="footer-title text-xl"> SOLUTION</h6>
        <a href="#" className="link link-hover">
          TOPS Expert Cloud
        </a>
        <a href="#" className="link link-hover">
          TOPS Expert Enterprise
        </a>
        <a href="#" className="link link-hover">
          TOPS KPI Dashboard
        </a>
        <a href="#" className="link link-hover">
          TOPO Expert
        </a>
        <a href="#" className="link link-hover">
          TOPX Expert
        </a>
        <a href="#" className="link link-hover">
          TOPS Expert Optional Modules
        </a>
        <a href="#" className="link link-hover">
          Services
        </a>
        <a href="#" className="link link-hover">
          The TOS Cloud Frequently Asked Questions (FAQ)
        </a>
        <a href="#" className="link link-hover">
          Automation – Work Smarter Not Harder
        </a>
      </nav>

      <div>
        <h6 className="footer-title text-xl">TAG CLOUD</h6>
        <p>
          Automation <span class="text-lg font-bold">Cloud</span> Cloud-based{" "}
          <span class="text-lg font-bold">TOS Cloud</span> Software{" "}
          <span class="text-lg font-bold">Cloud</span>{" "}
          <span class="text-lg font-bold">TOS</span> Container Handling
          Container Handling Solutions Container Terminal Software Proven{" "}
          <span class="text-lg font-bold">TOS</span>{" "}
          <span class="text-lg font-bold">RBS</span>{" "}
          <span class="text-lg font-bold">RBS</span>{" "}
          <span class="text-lg font-bold">TOPS</span> Real-time success Terminal
          Automation Terminal Operating System{" "}
          <span class="text-lg font-bold">TOPS</span>{" "}
          <span class="text-lg font-bold">TOPS</span> Expert{" "}
          <span class="text-lg font-bold">TOPS</span> Expert{" "}
          <span class="text-lg font-bold">Cloud</span>{" "}
          <span class="text-lg font-bold">TOS</span>{" "}
          <span class="text-lg font-bold">TOS</span> Cloud
        </p>
      </div>
    </footer>
  );
};

export default Footer;
