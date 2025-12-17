'use client';

import { useState } from 'react';
import { Menu, X, Globe, Plane, Hotel, Car, Phone, Users, Calendar, MapPin, Star } from 'lucide-react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: ['500'], variable: '--font-montserrat' });

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', icon: Globe },
        { name: 'Umrah Packages', icon: Star, highlight: true },
        { name: 'Hajj Packages', icon: MapPin, highlight: true },
        { name: 'International Tours', icon: Plane },
        { name: 'Hotel Bookings', icon: Hotel },
        { name: 'Flight Tickets', icon: Plane },
        { name: 'Visa Services', icon: Calendar },
        { name: 'Transport', icon: Car },
        { name: 'Group Tours', icon: Users },
        { name: 'Contact Us', icon: Phone },
    ];

    return (
        <>
            <nav className={`mx-auto max-w-7xl flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200 ${montserrat.className}`}>
                {/* Left: Menu Icon */}
                <button
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    className="
        flex items-center gap-2 
        px-4 py-2 cursor-pointer
        border  border-gray-200 rounded-full 
        text-sm font-medium text-gray-700 
        hover:bg-gray-100 hover:border-gray-400 
        transition-all duration-200 
        active:scale-95
    "
                    aria-label="Open menu"
                >
                    {/* Icon - Always visible */}
                    <span className='text-linear-to-r from-green-600 via-teal-500 to-blue-600'>
                        <Menu size={22} strokeWidth={2} />
                    </span>

                    {/* Text - Visible only on medium screens and above (tablet/desktop) */}
                    <span className="hidden md:block">Menu</span>
                </button>

                {/* Center: Logo - Responsive */}
                <div className="absolute left-1/2 -translate-x-1/2 pointer-events-none">
                    <Image
                        src="/logo/ajwalogo.png"
                        alt="Ajwa Tours and Travels Logo"
                        width={200}
                        height={40}
                        priority
                        className="hidden sm:block"
                    />
                    <Image
                        src="/logo/ajwalogo.png"
                        alt="Ajwa Tours and Travels Logo"
                        width={140}
                        height={28}
                        priority
                        className="block sm:hidden"
                    />
                </div>

                {/* Right: Button */}
                <button className="
    hidden sm:block w-full sm:w-auto  cursor-pointer
    px-6 py-3 
    text-sm sm:text-base font-semibold 
    text-white 
    bg-linear-to-r from-green-600 via-teal-500 to-blue-600 
    rounded-full 
    shadow-md hover:shadow-xl 
    transition-all duration-300 
    active:scale-95 
    
    ">
                    Book Tour Now
                </button>
            </nav>

            {/* Drawer Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/20 bg-opacity-50 z-50 lg:hidden transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Drawer Sidebar */}
            <div
                className={`${montserrat.className} fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 
  transform transition-transform duration-500 ease-in-out 
  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  flex flex-col`}
            >
                {/* Drawer Header (Fixed) */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 shrink-0">
                    <Image
                        src="/logo/ajwalogo.png"
                        alt="Ajwa Tours Logo"
                        width={160}
                        height={32}
                        priority
                    />
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 rounded-full cursor-pointer hover:bg-gray-100 transition"
                        aria-label="Close menu"
                    >
                        <X size={28} strokeWidth={2} />
                    </button>
                </div>

                {/* Navigation Links (Scrollable Area) */}
                <nav className="flex-1 overflow-y-auto py-6">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.name}
                                href="#"
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-4 px-8 py-4 text-lg font-medium transition-colors 
            ${link.highlight
                                        ? 'text-[#1f65e9] hover:bg-blue-100 border-r-4 border-blue-600'
                                        : 'text-gray-800 hover:text-green-600 hover:bg-green-100'
                                    }`}
                            >
                                <Icon
                                    size={24}
                                    strokeWidth={2}
                                    className={link.highlight ? 'text-blue-600' : 'text-current'}
                                />
                                <span>{link.name}</span>

                                {link.highlight && (
                                    <span className="ml-auto text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                                        Popular
                                    </span>
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Call to Action (Fixed Bottom) */}
                <div className="shrink-0 p-4 md:p-6 bg-linear-to-t from-gray-50 to-transparent border-t border-gray-200">
                    <button className="cursor-pointer w-full py-3 text-sm font-semibold text-white 
      bg-linear-to-r from-green-600 via-teal-500 to-blue-600 
      rounded-xl hover:from-green-700 hover:via-teal-600 hover:to-blue-700 
      transition shadow-lg flex items-center justify-center gap-2 active:scale-[0.96]"
                    >
                        <Phone size={18} />
                        Book Now: +92-XXXXX-XXXXX
                    </button>

                    <p className="text-center text-xs md:text-sm text-gray-600 mt-2">
                        24/7 Support Available
                    </p>
                </div>
            </div>

        </>
    );
}