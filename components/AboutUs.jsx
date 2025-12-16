import React from 'react'
import { Montserrat, Poppins } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'], weight: ['600'], variable: '--font-montserrat' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' });

const AboutUs = () => {
    return (
        <>
            {/* INTRO */}
            <div className={`mx-auto max-w-400 px-5 select-none ${poppins.className}`}>
                <h4 className="text-xl mt-14 mb-6 text-gray-500 tracking-wide">
                    About Us
                </h4>

                <p className="mb-10 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-800">
                    Discover the beauty of Island of{' '}
                    <span className="text-gray-400">
                        Gods with its breathtaking beaches, terraced rice fields and rich culture.
                    </span>
                </p>
            </div>

            {/* CONTENT */}
            <div className={`max-w-400 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20 select-none bg-white ${montserrat.className}`}>
                <div className="lg:grid lg:grid-cols-2 lg:gap-14 items-center">

                    {/* IMAGE */}
                    <div className="order-2 lg:order-1 mb-10 lg:mb-0 overflow-hidden rounded-2xl shadow-xl">
                        <img
                            src="/images/ab2.png"
                            alt="Ajwa Tours & Travels destination"
                            className="w-full h-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* TEXT */}
                    <div className="order-1 lg:order-2 max-w-xl">
                        <h2 className="text-3xl sm:text-4xl text-gray-800 mb-6 leading-snug">
                            Your Trusted Partner for Unforgettable Journeys
                        </h2>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            Ajwa Tours & Travels is your trusted partner for unforgettable travel
                            experiences. With a passion for exploration and a commitment to
                            excellence, we craft personalized journeys tailored to your interests.
                        </p>

                        <p className="mt-5 text-lg text-gray-600 leading-relaxed">
                            Whether you seek spiritual enlightenment, cultural immersion, or
                            thrilling adventures, our expert team is dedicated to turning your
                            travel dreams into reality.
                        </p>

                        <p className="mt-6 text-gray-800 font-medium">
                            Ajwa Tours & Travels — where every journey becomes a lifelong memory.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AboutUs
