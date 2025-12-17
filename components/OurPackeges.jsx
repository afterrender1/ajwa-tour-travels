import React from "react";
import { Poppins , Montserrat } from "next/font/google";
import Card from "./ui/Card";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const OurPackeges = () => {
  
const packages = [
  {
    id: 3,
    title: "Hajj Package 2026",
    description: "Spiritual journey with guided tours in Makkah and Madinah.",
    image: "/images/hajj.jpg",
    price: "PKR 160,000",
    popular: true,
  },
  {
    id: 4,
    title: "Umrah Package",
    description: "Short spiritual trip with comfortable stay and transport.",
    image: "/images/umrah.jpg",
    price: "PKR 110,000",
    popular: true,
  },
  {
    id: 1,
    title: "Bali Island Escape",
    description: "Experience breathtaking beaches and rich culture.",
    image: "/images/bali.jpg",
    // Bali packages often priced around USD ~$400 → ~112,000 PKR
    price: "PKR 110,000",
  },
  {
    id: 2,
    title: "Maldives Luxury Tour",
    description: "Crystal‑clear waters and private resorts.",
    image: "/images/maldives.jpg",
    // Maldives premium experience ~USD $650 → ~182,000 PKR
    price: "PKR 180,000",
  },
];


  return (
    <>
      <div
        className={`max-w-400 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20 select-none bg-white `}
      >
      <span className={`${poppins.className}`}>
          <h4 className="text-xl mt-14 mb-6 text-gray-500 tracking-wide ">
          Our Packages
        </h4>
        <p className="mb-10 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-800">
          Explore our exclusive travel{" "}
          <span className="text-gray-400">
            packages crafted with comfort, adventure, and unforgettable
            experiences for every journey.
          </span>
        </p>
      </span>
        <div className={`mt-22 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${montserrat.className}`}>
  {packages.map((pkg) => (
    <Card
      key={pkg.id}
      popular={pkg.popular}
      image={pkg.image}
      title={pkg.title}
      description={pkg.description}
      price={pkg.price}
    />
  ))}
</div>

      </div>

    </>
  );
};

export default OurPackeges;
