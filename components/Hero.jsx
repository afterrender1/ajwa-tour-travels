import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { CircleArrowOutUpRight } from 'lucide-react';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'], variable: '--font-montserrat' });
const Hero = () => {
    return (
        <section className={`mx-auto max-w-[1700] px-4 md:px-8 lg:px-12 mt-8 mb-20 select-none ${montserrat.className}`}>
            {/* Hero Container with Rounded Corners & Overflow Hidden */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Hero Background Image */}
                <div className="relative h-125 md:h-150 lg:h-185">
                    <Image
                        src="/images/hero2.jpg" // Replace with your actual hero image
                        alt="Ajwa Tours - Discover Spiritual & Worldly Journeys"
                        fill
                        priority
                        className="object-cover brightness-75"
                    />

                    {/* Dark overlay for text contrast */}
                    <div className="absolute inset-0 bg-black/5" />
                </div>

                {/* Overlapping Glassy Cards */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Top Left Card */}
                    <div className="absolute top-24 right-0  px-4 text-center pointer-events-auto cursor-default block sm:hidden">
                        <p className="
  text-lg 
  sm:text-xl 
  md:text-2xl 
  leading-snug 
  bg-linear-to-r from-green-300 via-teal-500 to-blue-200 
  bg-clip-text text-transparent
">
                            Ajwa Tours & Travels — where every journey becomes a lifelong memory.
                        </p>
                    </div>


                    <div className="absolute top-8 left-8 max-w-sm pointer-events-auto cursor-default">
                        <div className="text-white/80  bg-white/10 border-[0.5px] border-white/40 rounded-2xl py-1 px-3 shadow-2xl">
                            Advnture
                        </div>
                    </div>

                    {/* Bottom Left Card - Rating */}
                    <div className="absolute bottom-8 left-8 max-w-xs pointer-events-auto">
                        <button className="
  relative inline-flex items-center justify-center
  w-44  h-14
  group
  transition-all duration-500 ease-out
  active:scale-95
  cursor-pointer
">
                            {/* Large Oval Base - Bounces subtly on hover */}
                            <div className="
    absolute inset-0
    bg-white/20 backdrop-blur-md
    border border-white/30
    rounded-full
    shadow-2xl
    group-hover:bg-white/30 group-hover:border-white/40
    group-hover:shadow-3xl
    group-hover:translate-y-1
    transition-all duration-500 ease-out
  " />

                            {/* Small Circle on Top - Main "Bubbly" Float Animation */}
                            <div className="
    absolute -top-8 left-1/2 -translate-x-1/2
    w-14 h-14
    bg-white/25 backdrop-blur-md
    border border-white/40
    rounded-full
    shadow-xl
    group-hover:-translate-y-4
    group-hover:bg-white/40 group-hover:border-white/60
    group-hover:shadow-2xl
    transition-all duration-700 ease-out
    group-hover:scale-110
  " />

                            {/* Enhanced Connecting "Neck" - Soft glow bubble effect */}
                            <div className="
    absolute top-6 left-1/2 -translate-x-1/2
    w-16 h-20
    bg-white/20
    rounded-full
    blur-2xl
    opacity-70
    group-hover:opacity-90
    group-hover:scale-125
    transition-all duration-600 ease-out
  " />

                            {/* Subtle inner glow bubble on hover */}
                            <div className="
    absolute inset-0
    rounded-full
    opacity-0 group-hover:opacity-100
    bg-linear-to-t from-white/10 to-transparent
    transition-opacity duration-700
  " />

                            {/* Text - Gentle lift */}
                            <span className="
    relative z-10
    text-white text-xl 
    drop-shadow-lg
    group-hover:translate-y-1
    transition-transform duration-500 ease-out
  ">
                                See Offers
                            </span>
                        </button>
                    </div>

                    {/* Bottom Right Card - CTA */}
                    <div className="absolute bottom-8 right-8 max-w-sm pointer-events-auto">
                        <div className="relative backdrop-blur-lg bg-transparent border border-white/30 
                rounded-r-2xl rounded-bl-2xl rounded-tl-[60px] 
                px-3 md:block hidden sm:px-6 py-8 shadow-2xl text-center">

                            {/* GO BUTTON */}
                            <div
                                className="
      absolute top-3 right-3 
      sm:top-4 sm:right-4
      flex items-center justify-center 
      w-10 h-10 sm:w-12 sm:h-12 
      bg-white/10 border border-white/40 
      rounded-full shadow-2xl 
      text-white cursor-pointer
      transition hover:scale-110 hover:bg-white/20
    "
                            >
                                <CircleArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                            </div>

                            <p className="text-white text-base sm:text-lg font-medium pr-8 sm:pr-12">
                                We Offer Travel Experiences Design To Turn Your Dreams Into Reality.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;