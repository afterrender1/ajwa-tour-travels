import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const OurPackeges = () => {
  return (
    <>
      <div
        className={`mx-auto max-w-400 px-5 select-none ${poppins.className}`}
      >
        <h4 className="text-xl mt-14 mb-6 text-gray-500 tracking-wide">
          Our Packages
        </h4>
        <p className="mb-10 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-800">
          Explore our exclusive travel{" "}
          <span className="text-gray-400">
            packages crafted with comfort, adventure, and unforgettable
            experiences for every journey.
          </span>
        </p>
      </div>
    </>
  );
};

export default OurPackeges;
