"use client";

import { Search } from "lucide-react";
import React from "react";

// FIX: Sabhi images ke complete, verifiable URLs ko exact format me define kar diya hai.
const featureCards = [
  {
    img: "https://yaalo.com/_next/static/media/earth.0r-58oumuo_cp.svg",
    title: "Local Rates",
    desc: "No roaming premiums",
  },
  {
    img: "https://yaalo.com/_next/static/media/clock.0zt0hanvn-ijj.svg",
    title: "Plug & Online",
    desc: "Instant activation",
  },
  {
    img: "https://yaalo.com/_next/static/media/trophy.0kd2_cg1av3hp.svg",
    title: "Buy Online",
    desc: "No SIM swap",
  },
  {
    img: "https://yaalo.com/_next/static/media/sim.162uxbhfzy_kg.svg",
    desc: "Always available",
  },
];

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div
        className="min-h-[50svh] sm:min-h-[60svh] lg:min-h-[65vh] brightness-100 bg-cover bg-center bg-no-repeat flex items-center justify-center w-full pt-12 sm:pt-16 pb-8"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="w-full bg-black/5 py-8 sm:py-12 md:py-16">
          {/* Badge */}
          <div className="w-90 max-w-[90%] bg-gray-300 text-black font-medium py-1.5 px-4 rounded-full mx-auto text-[6px] sm:text-xs md:text-sm text-center tracking-wide shadow-sm backdrop-blur-sm">
            Digital Freedom With 3-Step Activation
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Heading */}
            <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 sm:mt-8 leading-[1.2] sm:leading-tight text-black tracking-tight max-w-4xl mx-auto">
              <span className="text-yellow-400 drop-shadow-sm">Yaalo eSIM</span>
              <br className="block sm:hidden" /> Roam the{" "}
              <br className="hidden sm:block" />
              World, Not the Fees
            </h1>

            {/* Search Bar Container */}
            <div className="relative h-11 sm:h-14 w-full max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 shadow-md rounded-3xl">
              <input
                type="text"
                placeholder="Where are you flying next?"
                className="w-full h-full pl-5 pr-12 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-xs sm:text-sm md:text-base focus:border-yellow-400 transition-colors text-black placeholder-gray-400"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 sm:bg-transparent p-1.5 sm:p-0 rounded-full text-black cursor-pointer active:scale-95 transition-transform">
                <Search size={18} className="sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Description */}
            <p className="font-medium mt-6 sm:mt-8 text-gray-800 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
              Your trips just got easier. With Yaalo eSIM, you land, connect,
              and get <br className="hidden md:block" /> instant 5G data in 200+
              destinations at local rates.
            </p>

            {/* App Download Headline */}
            <h2 className="font-bold text-xs sm:text-sm md:text-base mt-8 sm:mt-12 text-black uppercase tracking-wider">
              Download the App Now
            </h2>

            <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 mt-4 mb-2">
              <a
                href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform"
              >
                <div className="rounded-full sm:rounded-3xl bg-white shadow-md p-0.5">
                  <img
                    src="https://yaalo.com/_next/static/media/g-play.0a5z_2.z1n1vh.svg"
                    alt="Google Play Store"
                    className="h-8 sm:h-10 md:h-11 object-contain"
                  />
                </div>
              </a>

              <a
                href="https://apps.apple.com/app/id6753675047"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 active:scale-95 transition-transform"
              >
                <div className="rounded-full sm:rounded-3xl bg-white shadow-md p-0.5">
                  <img
                    src="https://yaalo.com/_next/static/media/apple-store.0i14txqxrjnx8.svg"
                    alt="Apple App Store"
                    className="h-8 sm:h-10 md:h-11 object-contain"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES INFO GRID */}
      <div className="w-full bg-gray-50/50 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="border border-gray-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 h-24 sm:h-32 md:h-36 text-center hover:-translate-y-1.5 transition-all duration-300 bg-white shadow-sm hover:shadow-md flex flex-col items-center justify-center"
            >
              <div className="w-7 h-7 sm:w-12 sm:h-12 flex items-center justify-center mb-1.5 sm:mb-3 bg-yellow-50/50 rounded-full">
                <img
                  className="w-4 h-4 sm:w-6 sm:h-6 object-contain"
                  /* FIX: Ab `src` seedha pure URL se map ho rahi hai 
                    jisse template interpolation ki koi glitch ya double-domain link nahi banega.
                  */
                  src={card.img}
                  alt={card.title}
                />
              </div>
              <h3 className="font-bold text-[11px] sm:text-base text-black leading-tight">
                {card.title}
              </h3>
              <p className="text-[9px] sm:text-sm text-gray-500 mt-0.5 font-medium leading-tight">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
