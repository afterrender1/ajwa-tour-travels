"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["500"],
    variable: "--font-montserrat",
});

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Thank you! We will contact you soon.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div
      className={`${montserrat.className} min-h-screen bg-gray-50 flex justify-center items-start p-6`}
    >
      {/* Form Section */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
          <Image
            src="/logo/ajwalogo.png"
            alt="Ajwa Tours Logo"
            width={160}
            height={32}
            priority
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col md:flex-row gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />

            <button
              type="submit"
              className="mt-2 py-3 w-full text-white font-semibold rounded-xl 
                bg-linear-to-r from-green-600 via-teal-500 to-blue-600 
                hover:from-green-700 hover:via-teal-600 hover:to-blue-700 
                transition shadow-lg active:scale-[0.96] flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Submit
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Contact Info
            </h3>

            <div className="flex items-center gap-4 text-gray-700">
              <Phone size={24} className="text-green-600" />
              <span>+91-XXXXX-XXXXX</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <Mail size={24} className="text-green-600" />
              <span>info@ajwatours.com</span>
            </div>

            <div className="flex items-center gap-4 text-gray-700">
              <MapPin size={24} className="text-green-600" />
              <span>123 Ajwa Street, Mumbai, India</span>
            </div>

            <p className="text-gray-500 mt-6 text-sm">24/7 Support Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
