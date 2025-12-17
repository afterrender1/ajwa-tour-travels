"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import Image from "next/image";
import { Montserrat, Poppins } from "next/font/google";

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
        <div className={`${montserrat.className} min-h-screen  flex justify-center items-center p-4 sm:p-8 lg:p-12`}>
          <div className="w-full max-w-6xl bg-white rounded-3xl md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden border border-gray-100">

            {/* Main Wrapper: Column on mobile, Row on Large Screens */}
            <div className="flex flex-col lg:flex-row">

              {/* Form Side */}
              <div className="flex-[1.3] p-6 sm:p-10 md:p-14">
                <div className="mb-10">
                  <div className="relative w-30 h-7.5 sm:w-35 sm:h-8 mb-8">
                    <Image
                      src="/logo/ajwalogo.png"
                      alt="Ajwa Tours Logo"
                      fill
                      className="object-contain opacity-90"
                      priority
                    />
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">
                    Get in touch
                  </h2>
                  <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
                    Plan your next adventure with us. Fill out the form below and our travel experts will reach out to you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Responsive Input Grid: 1 col on xs, 2 cols on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+92..."
                        className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Email</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="hello@example.com"
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-300"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 ml-1">Message</label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your travel plans..."
                      rows={4}
                      className="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all resize-none placeholder:text-gray-300"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gray-900 hover:bg-black text-white font-bold rounded-2xl transition-all shadow-xl active:scale-[0.98] flex items-center justify-center gap-3 text-base sm:text-lg"
                  >
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Info Side */}
              <div className="flex-1 bg-gray-50/50 p-6 sm:p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between">
                <div className="space-y-10">
                  <h3 className="text-xl font-semibold text-gray-900 tracking-tight">Contact Information</h3>

                  <div className="space-y-8">
                    {/* Contact Items */}
                    {[
                      { icon: <Phone size={22} />, label: "Call us", value: "+92-XXXXX-XXXXX", color: "text-green-600" },
                      { icon: <Mail size={22} />, label: "Email us", value: "info@ajwatours.com", color: "text-blue-600" },
                      { icon: <MapPin size={22} />, label: "Visit us", value: <>123 Ajwa Street, USQ,<br /> Las Vegas, Nevada</>, color: "text-red-500" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-5 group">
                        <div className={`p-3.5 bg-white rounded-xl  border border-gray-200 ${item.color} transition-transform group-hover:scale-110`}>
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{item.label}</p>
                          <p className="text-gray-700 font-semibold text-base sm:text-lg leading-snug">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Box */}
                <div className="mt-12 p-8 bg-white rounded-xl border border-gray-200 ">
                  <p className="text-gray-900 font-semibold text-lg">Working Hours</p>
                  <div className="mt-3 space-y-1 text-sm sm:text-base">
                    <p className="text-green-600 font-medium">24/7 Support for active bookings</p>
                    <p className="text-gray-500">Mon-Sat: 9 AM - 8 PM</p>
                  </div>
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