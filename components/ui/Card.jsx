import React from "react";
import {Flame} from 'lucide-react';

const Card = ({
  image,
  title,
  category = "Featured",
  popular = false,
  description,
  price,
  buttonText = "View Details",
  onButtonClick,
}) => {
  return (
    <div className="group relative bg-white rounded-3xl border border-slate-100 flex flex-col h-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_22px_50px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-1.5 overflow-hidden">
      
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
        />
        
        {/* Floating Price Badge */}
        {price && (
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm z-10">
            <span className="text-xs font-bold text-slate-900 tracking-tight">{price}</span>
          </div>
        )}

        {/* Most Popular Badge - Positioned Top Right for better visibility */}
        {popular && (
          <div className="absolute top-5 border border-red-600 right-5 bg-teal-500 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-lg z-10 ">
            Most Popular  <Flame size={18} className="ml-1 inline text-red-600 animate-bounce" /> 
          </div>
        )}

        {/* Subtle Darkening Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-7 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="h-0.5 w-6 bg-teal-500"></span>
          <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-teal-600/80">
            {category}
          </span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-3 tracking-tight leading-[1.2]">
          {title}
        </h3>

        <p className="text-slate-500 text-[15px] leading-relaxed mb-8 flex-1 line-clamp-2">
          {description}
        </p>

        {/* Action Button */}
        <button
          onClick={onButtonClick}
          className="relative cursor-pointer group/btn flex items-center justify-between w-full bg-slate-900 text-white px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 active:scale-[0.98] hover:bg-slate-800"
        >
          <span className="relative z-10 text-sm font-medium tracking-wide">
            {buttonText}
          </span>
          
          <div className="relative z-10 flex items-center transition-transform duration-300 group-hover/btn:translate-x-1">
            <svg 
              className="w-5 h-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover/btn:animate-[shimmer_2s_infinite] transition-none" />
        </button>
      </div>
    </div>
  );
};

export default Card;