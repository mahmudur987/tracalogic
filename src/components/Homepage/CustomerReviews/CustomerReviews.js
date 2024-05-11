import img from "../../../assets/images/homepage/wave1.png";
const CustomerReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      id: 1,
    },
    {
      name: "Jane Smith",
      comment:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      id: 2,
    },
    {
      name: "Bob Johnson",
      comment:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      id: 3,
    },
  ];

  return (
    <section
      className="container mx-auto bg-cover bg-top"
      style={{ backgroundImage: `url(${img.src})` }}
    >
      <div className="max-2xl mx-auto mt-10 my-3">
        <h2 className="text-2xl font-bold mb-4 text-center">
          WHAT OUR CUSTOMERS THINK
        </h2>
        <div className="flex gap-10 justify-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="text-center bg-white p-6 rounded-lg border shadow-xl w-72 "
            >
              <p className="text-lg font-semibold">{review.name}</p>
              <p className="text-gray-600 text-sm">
                {review.comment.slice(0, 60)}
              </p>

              <button className="mt-2 text-blue-600 hover:underline">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
