"use client";

import { Search, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const featureCards = [
  {
    img: "https://yaalo.com/_next/static/media/earth.0r-58oumuo_cp.svg",
    title: "Local Rates",
    desc: "Data plans focusing on travellers’ style, not roaming premiums.",
  },
  {
    img: "https://yaalo.com/_next/static/media/clock.0zt0hanvn-ijj.svg",
    title: "Plug & Online",
    desc: "Data that Travels With You-and-Play Simplicity",
  },
  {
    img: "https://yaalo.com/_next/static/media/trophy.0kd2_cg1av3hp.svg",
    title: "Buy Online",
    desc: "Paris to Prague to Porto without switching SIMs.",
  },
  {
    img: "https://yaalo.com/_next/static/media/sim.162uxbhfzy_kg.svg",
    title: "Always Online",
    desc: "ANeed help at 2 AM? We’re awake.",
  },
];

const Hero = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <div
        className="relative min-h-[85svh] lg:min-h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center w-full pt-16 sm:pt-20 pb-12"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        {/* यहाँ से bg-black/5 हटा दिया है */}
        <div className="w-full py-8 sm:py-12 md:py-16">
          <div className="w-90 max-w-[90%] bg-[#c9d1d869] text-black font-medium py-1.5 px-4 rounded-full mx-auto text-[6px] sm:text-xs md:text-sm text-center tracking-wide backdrop-blur-sm">
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
                readOnly
                onClick={() => setIsSearchOpen(true)}
                className="w-full h-full pl-5 pr-12 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-xs sm:text-sm md:text-base focus:border-yellow-400 transition-colors text-black placeholder-gray-400 cursor-pointer"
              />
              <div
                onClick={() => setIsSearchOpen(true)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-yellow-400 sm:bg-transparent p-1.5 sm:p-0 rounded-full text-black cursor-pointer active:scale-95 transition-transform"
              >
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
        <div className="max-w-[1380px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-8">
          {featureCards.map((card, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded-xl sm:rounded-2xl p-3 sm:p-5 h-26 sm:h-32 md:h-40 text-center  bg-white  flex flex-col items-center justify-center"
            >
              <div className="w-7 h-7 sm:w-12 sm:h-12 flex items-center justify-center mb-1.5 sm:mb-3 bg-yellow-50/50 rounded-full">
                <img
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
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

      {/* DYNAMIC TOP SEARCH SHEET */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent
          side="top"
          className="w-full max-w-4xl mx-auto h-screen max-h-screen rounded-none overflow-y-auto pb-8 shadow-xl border-none bg-white flex flex-col justify-start items-center"
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-6 top-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 active:scale-95 transition-all z-50"
          ></button>

          <div className="w-full max-w-xl px-4 pt-12 md:pt-16 flex flex-col gap-6">
            <SheetHeader className="text-left">
              <SheetTitle className="text-xl md:text-2xl font-bold text-black">
                Search Destination
              </SheetTitle>
              <SheetDescription className="text-xs md:text-sm text-gray-500">
                Find instant eSIM packages for your next route.
              </SheetDescription>
            </SheetHeader>

            <div className="relative h-12 md:h-14 w-full shadow-sm rounded-2xl border border-gray-200 bg-white focus-within:border-yellow-400 transition-all">
              <input
                type="text"
                autoFocus
                placeholder="Where are you flying next?"
                className="w-full h-full pl-5 pr-12 rounded-2xl bg-white outline-none text-sm text-black placeholder-gray-400"
              />
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="w-full">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                Popular Countries
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  "United States",
                  "United Kingdom",
                  "Germany",
                  "Turkey",
                  "Thailand",
                  "Canada",
                ].map((country, index) => (
                  <div
                    key={index}
                    className="p-3 bg-gray-50/80 hover:bg-yellow-50 hover:text-black border border-gray-100 hover:border-yellow-200 rounded-xl cursor-pointer transition-all text-xs md:text-sm font-medium text-gray-700"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                variant="outline"
                className="rounded-xl px-6 h-10 text-xs font-medium border-gray-200"
                onClick={() => setIsSearchOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Hero;
