import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
});

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={`${montserrat.className} bg-white border-t border-gray-100`}>
            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-1 space-y-6">
                        <Image
                            src="/logo/ajwalogo.png"
                            alt="Ajwa Tours Logo"
                            width={160}
                            height={32}
                            priority
                        />
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Crafting unforgettable journeys with comfort and luxury. Your trusted partner for global exploration.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-green-100 hover:text-green-600 transition">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-blue-100 hover:text-blue-600 transition">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-gray-50 rounded-full hover:bg-sky-100 hover:text-sky-500 transition">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Matching Drawer Hover Style */}
                    <div className="space-y-6">
                        <h4 className="text-gray-900 font-bold uppercase tracking-wider text-xs">Navigation</h4>
                        <nav className="flex flex-col gap-3">
                            {["Home", "Packages", "About Us", "Contact"].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    className="text-gray-600 hover:text-green-600 hover:translate-x-1 transition-all text-sm"
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-gray-900 font-bold uppercase tracking-wider text-xs">Contact Us</h4>
                        <div className="space-y-4 text-sm text-gray-600">
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-green-600" />
                                <span>+92-XXXXX-XXXXX</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-600" />
                                <span>info@ajwatours.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-red-500" />
                                <span>USA, lasvegas , Nevada</span>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action - Matching Drawer Button */}
                    <div className="space-y-6 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <h4 className="text-gray-900 font-bold text-sm">Ready to explore?</h4>
                        <p className="text-xs text-gray-500">Book your next adventure today and get exclusive seasonal discounts.</p>
                        <button className="w-full py-3 text-sm font-semibold text-white bg-linear-to-r from-green-600 via-teal-500 to-blue-600 rounded-xl hover:shadow-lg transition active:scale-[0.96] flex items-center justify-center gap-2">
                            <Phone size={16} />
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                    <p>© {currentYear} AfterRender. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-800 transition">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-800 transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;