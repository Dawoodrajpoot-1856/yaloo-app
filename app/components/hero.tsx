"use client";

import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      {/* HERO */}
      <div
        className="min-h-[70svh] sm:min-h-screen brightness-110 bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="w-full bg-black/10 py-6 sm:py-0">
          {/* badge */}
          <div
            className="border mt-24 sm:mt-40 border-gray-400 
          w-[85%] sm:w-80 bg-gray-300 text-black py-1 px-2 
          rounded-full mx-auto text-[10px] sm:text-sm text-center"
          >
            Digital Freedom With 3-Step Activation
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* heading */}
            <h1 className="font-semibold text-2xl sm:text-5xl md:text-6xl mt-4 sm:mt-8 leading-tight">
              <span className="text-yellow-400">Yaalo eSIM</span>
              <br className="sm:hidden" />
              Roam the World,
              <br />
              Not the Fees
            </h1>

            {/* search */}
            <div className="relative h-10 sm:h-14 w-full max-w-xl mx-auto mt-5 sm:mt-8">
              <input
                type="text"
                placeholder="Where are you flying next?"
                className="w-full pl-3 pr-10 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-xs sm:text-base"
              />
              <Search
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
            </div>

            {/* description */}
            <p className="font-medium mt-4 sm:mt-8 text-gray-700 text-xs sm:text-base px-2">
              Your trips just got easier. With Yaalo eSIM, you land, connect,
              and get
              <br className="hidden sm:block" />
              instant 5G data in 200+ destinations at local rates.
            </p>

            {/* download */}
            <h2 className="font-semibold text-sm sm:text-lg mt-6 sm:mt-10">
              Download the App Now
            </h2>

            {/* buttons */}
            <div className="flex flex-row sm:flex-row justify-center items-center gap-2 sm:gap-4 mt-4 sm:mt-6 mb-6 sm:mb-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
                target="_blank"
              >
                <div className="bg-white rounded-3xl shadow-sm px-2 py-1">
                  <img
                    src="https://yaalo.com/_next/static/media/g-play.8d7b1a46.svg"
                    className="h-9 sm:h-12"
                  />
                </div>
              </a>

              <a href="https://apps.apple.com/app/id6753675047" target="_blank">
                <div className="bg-white rounded-3xl shadow-sm px-2 py-1">
                  <img
                    src="https://yaalo.com/_next/static/media/apple-store.8102bba3.svg"
                    className="h-9 sm:h-12"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="max-w-[1200px] px-4 py-8 
  /* ml-0 mobile par, ml-16 tablet/desktop par. mx-auto hata diya gaya hai */
  ml-0 md:ml-16 
  grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-10"
      >
        {[
          {
            img: "earth.39b7df47.svg",
            title: "Local Rates",
            desc: "No roaming premiums",
          },
          {
            img: "clock.3a93caca.svg",
            title: "Plug & Online",
            desc: "Instant activation",
          },
          {
            img: "trophy.ed47fe48.svg",
            title: "Buy Online",
            desc: "No SIM swap",
          },
          {
            img: "sim.332404b8.svg",
            title: "24/7 Support",
            desc: "Always available",
          },
        ].map((card, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl p-3 sm:p-6 text-center hover:-translate-y-1 transition bg-white/50 backdrop-blur-sm"
          >
            <img
              className="mx-auto mb-2 w-7 sm:w-auto"
              src={`https://yaalo.com/_next/static/media/${card.img}`}
              alt={card.title}
            />
            <h3 className="font-semibold text-xs sm:text-base">{card.title}</h3>
            <p className="text-[10px] sm:text-sm text-gray-600 mt-1">
              {card.desc}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;
