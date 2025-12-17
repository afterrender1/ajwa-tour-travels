"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { Montserrat  , Poppins} from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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

<>
<div className={`max-w-400 mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-20 select-none bg-white `}>

   <span className={`${poppins.className} `}>
  <h4 className="text-xl mt-14 mb-6 text-gray-500 tracking-wide">
    Get In Touch
  </h4>
  <p className="mb-10 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-gray-800">
    Reach out to our experts{" "}
    <span className="text-gray-400">
      to plan your dream getaway with personalized care, 
      expert guidance, and seamless support throughout your 
      entire travel experience.
    </span>
  </p>
</span>
    <div className={`${montserrat.className} min-h-screen  flex justify-center items-center p-4 md:p-12`}>
    
      <div className="w-full max-w-6xl bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden border border-gray-100">

        <div className="flex flex-col md:flex-row">
          {/* Left Side: Form */}
          <div className="flex-[1.2] p-8 md:p-12">
            <div className="mb-8">
              <Image
                src="/logo/ajwalogo.png"
                alt="Ajwa Tours Logo"
                width={140}
                height={30}
                className="mb-6 opacity-90"
                priority
              />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                Get in touch
              </h2>
              <p className="text-gray-500 mt-2">
                We'd love to hear from you. Please fill out this form.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+92..."
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="hello@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about your travel plans..."
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-500 outline-none transition-all resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-gray-900 hover:bg-black text-white font-semibold rounded-2xl transition-all shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Info Panel */}
          <div className="flex-1 bg-gray-50 p-8 md:p-12 border-l border-gray-100 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>

              <div className="space-y-6">
                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl  transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Call us</p>
                    <p className="text-gray-700 font-medium">+92-XXXXX-XXXXX</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl  transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Email us</p>
                    <p className="text-gray-700 font-medium">info@ajwatours.com</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl  transition-colors">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Visit us</p>
                    <p className="text-gray-700 font-medium leading-relaxed">
                      123 Ajwa Street, USQ,<br /> lasvegas, Nevada
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-green-50 rounded-3xl border border-green-100">
              <p className="text-green-800 font-semibold text-sm">Working Hours</p>
              <p className="text-green-600 text-sm mt-1">24/7 Support for active bookings</p>
              <p className="text-green-600 text-sm">Mon-Sat: 9 AM - 8 PM</p>
            </div>
          </div>
        </div>

      </div>
    </div>
</div>
</>

  );
};

export default ContactUs;