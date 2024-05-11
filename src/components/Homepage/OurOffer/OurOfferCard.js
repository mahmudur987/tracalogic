import Image from "next/image";

// components/Card.js
const OurOfferCard = ({ imageUrl, name, heading }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center border">
      <Image
        height={100}
        width={100}
        src={imageUrl}
        className=" rounded-t-lg"
        alt={name}
      />
      <p className="text-lg font-semibold mt-2">{name}</p>
      <p className="text-gray-500 text-sm">{heading}</p>
    </div>
  );
};

export default OurOfferCard;
