import React from "react";
import img1 from "../../../assets/images/home-page.png";
import img2 from "../../../assets/images/homepage2.png";
import img3 from "../../../assets/images/wave.png";
import Image from "next/image";
const TerminalOperatingSystem = () => {
  return (
    <div className="max-w-7xl w-full  mx-auto min-h-[900px] flex flex-col justify-between ">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row  ">
        <div className="w-1/2 flex flex-col mt-32 gap-10">
          <h2 className="text-3xl font-bold">TERMINAL OPERATING SYSTEM</h2>
          <p>
            At RBS we specialise in providing the world’s best Terminal
            Operating System and related container management softwares. A
            Terminal Operating System, otherwise known as a TOS, is at the
            essence of the supply chain fuelling globalization. Primarily, a TOS
            is a powerful system connecting all areas of a terminal and offers a
            full scope of capabilities to ensure operations are planned
            accurately and executed efficiently. Our state-of-the-art TOS
            provides complete control, planning, and monitoring functionalities
            to achieve performance fulfilled in the form of optimized operations
            and resources.
            <br />
            <br />
            <br />
            RBS has a large focus on its customers and has spent an incredible
            amount of effort and investment in Research and Development in order
            to create value for its customers.
            <br />
            <br />
            <br />
            By listening and adapting to customers’ needs, RBS has been able to
            develop the latest products called TOPS Expert and TOPS Expert
            Cloud, in order to fulfill the growing demand of its customers and
            to further cater for future requirements.
          </p>
        </div>

        <div className="flex-1">
          <div className=" w-full h-full flex ">
            <div className="flex">
              <figure className="">
                <Image height={300} width={300} src={img1} />
              </figure>
              <figure className=" ">
                <Image height={100} width={100} src={img2} />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center gap-20 text-center mb-10 ">
        <div>
          <h3 className="text-[#0693e3] text-2xl uppercase ">Achievements</h3>
          <p>RBS will always be committed to your success</p>
        </div>
        <div className="text-lg">
          <p>Multiple terminals implemented</p>
          <p>across 6 continents worldwide</p>
        </div>
        <div className="text-lg">
          <p>
            Tens of Millions of TEUs are
            <br />
            operated by our TOS every year!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TerminalOperatingSystem;
