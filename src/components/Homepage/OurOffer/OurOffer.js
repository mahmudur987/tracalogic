// pages/index.js
import OurOfferCard from "./OurOfferCard";
import img1 from "../../../assets/images/oorOffer (1).png";
import img2 from "../../../assets/images/oorOffer (2).png";
import img3 from "../../../assets/images/oorOffer (3).png";
import img4 from "../../../assets/images/oorOffer (4).png";
import img5 from "../../../assets/images/oorOffer (5).png";
import img6 from "../../../assets/images/oorOffer (6).png";

const cardData = [
  {
    imageUrl: img1,
    name: "Throughput & Productivity",
    heading:
      "TOPS true real-time architecture ensures the most up-to-date data is used to make decisions. All equipment exercising optimum instructions allows for a higher container move turnover rate, and hence, more profitable operation.",
  },
  {
    imageUrl: img2,
    name: "Automation",
    heading:
      "TOPS enables any terminal to do more with less by incorporating various “true automation” features, streamlining the planning process and enabling automated optimization of container moves. We help you work smarter not harder.",
  },
  {
    imageUrl: img3,
    name: "Reliability",
    heading:
      "TOPS is built on a highly advanced infrastructure, designed to perform with responsiveness and withstand any workload or system demand. It is a highly stable and reliable system which is necessary for a mission-critical system at",
  },
  {
    imageUrl: img4,
    name: "Customer Service",
    heading:
      "TOPS provides instantaneous access and efficient record management of all container movements throughout the terminal, increasing productivity as well as enhancing the delivery of services to your customers. We always have your interests and values, driving the core of our operations.",
  },
  {
    imageUrl: img5,
    name: "Increasing Revenue",
    heading:
      "TOPS single server infrastructure enables shared- and in-memory which accelerates data processing, granting greater control for better decision-making. These decisions are reached within a shorter time frame, resulting in a faster task completion rate, and hence, drives higher ROI.",
  },
  {
    imageUrl: img6,
    name: "Flexibility",
    heading:
      "A powerful feature of TOPS is being configurable to operate multiple terminal locations. It is scalable as it can run small terminals and also those with expanding operations. Its connectivity allows it to be connected with any peripheral devices required by the terminal.",
  },
];

export default function OurOffer() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-7">
      <h2 className="text-4xl font-bold text-center">
        WHAT TOPS CAN DO FOR YOU
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {cardData.map((data, index) => (
          <OurOfferCard
            key={index}
            imageUrl={data.imageUrl}
            name={data.name}
            heading={data.heading}
          />
        ))}
      </div>
    </div>
  );
}
