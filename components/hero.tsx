"use client";

import { Search, X } from "lucide-react";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useTranslations } from "use-intl";

const Hero = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const t = useTranslations("Hero");

  // Dynamic feature cards mapping using JSON keys
  const featureCards = [
    {
      img: "https://yaalo.com/_next/static/media/earth.0r-58oumuo_cp.svg",
      title: t("features.localRates.title"),
      desc: t("features.localRates.desc"),
    },
    {
      img: "https://yaalo.com/_next/static/media/clock.0zt0hanvn-ijj.svg",
      title: t("features.plugOnline.title"),
      desc: t("features.plugOnline.desc"),
    },
    {
      img: "https://yaalo.com/_next/static/media/trophy.0kd2_cg1av3hp.svg",
      title: t("features.buyOnline.title"),
      desc: t("features.buyOnline.desc"),
    },
    {
      img: "https://yaalo.com/_next/static/media/sim.162uxbhfzy_kg.svg",
      title: t("features.alwaysOnline.title"),
      desc: t("features.alwaysOnline.desc"),
    },
  ];

  // Dynamic popular countries list mapping using JSON keys
  const popularCountries = [
    { key: "us", name: t("countries.us") },
    { key: "uk", name: t("countries.uk") },
    { key: "germany", name: t("countries.germany") },
    { key: "turkey", name: t("countries.turkey") },
    { key: "thailand", name: t("countries.thailand") },
    { key: "canada", name: t("countries.canada") },
  ];

  return (
    <>
      <div
        className="relative min-h-[85svh] lg:min-h-[85vh] bg-cover bg-center bg-no-repeat flex items-center justify-center w-full pt-16 sm:pt-20 pb-12"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="w-full py-8 sm:py-12 md:py-16">
          <div className="w-90 max-w-[90%] bg-[#c9d1d869] text-black font-medium py-1.5 px-4 rounded-full mx-auto text-[6px] sm:text-xs md:text-sm text-center tracking-wide backdrop-blur-sm">
            {t("badgeText")}
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-5 sm:mt-8 leading-[1.2] sm:leading-tight text-black tracking-tight max-w-4xl mx-auto">
              <span className="text-yellow-400 drop-shadow-sm">
                {t("brandName")}
              </span>
              <br className="block sm:hidden" /> {t("titlePart1")}
              <br className="hidden sm:block" />
              {t("titlePart2")}
            </h1>

            <div className="relative h-11 sm:h-14 w-full max-w-xl md:max-w-2xl mx-auto mt-6 sm:mt-8 shadow-md rounded-3xl">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
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

            <p className="font-medium mt-6 sm:mt-8 text-gray-800 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-2">
              {t("description")}
            </p>

            <h2 className="font-bold text-xs sm:text-sm md:text-base mt-8 sm:mt-12 text-black uppercase tracking-wider">
              {t("downloadApp")}
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

      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent
          side="top"
          className="w-full max-w-4xl mx-auto h-screen max-h-screen rounded-none overflow-y-auto pb-8 shadow-xl border-none bg-white flex flex-col justify-start items-center"
        >
          <button
            onClick={() => setIsSearchOpen(false)}
            className="absolute right-6 top-6 p-2 rounded-full text-gray-500 hover:bg-gray-100 active:scale-95 transition-all z-50"
            aria-label={t("closeSearch")}
          ></button>

          <div className="w-full max-w-xl px-4 pt-12 md:pt-16 flex flex-col gap-6">
            <SheetHeader className="text-left">
              <SheetTitle className="text-xl md:text-2xl font-bold text-black">
                {t("modalTitle")}
              </SheetTitle>
              <SheetDescription className="text-xs md:text-sm text-gray-500">
                {t("modalDescription")}
              </SheetDescription>
            </SheetHeader>

            <div className="relative h-12 md:h-14 w-full shadow-sm rounded-2xl border border-gray-200 bg-white focus-within:border-yellow-400 transition-all">
              <input
                type="text"
                autoFocus
                placeholder={t("searchPlaceholder")}
                className="w-full h-full pl-5 pr-12 rounded-2xl bg-white outline-none text-sm text-black placeholder-gray-400"
              />
              <Search
                size={20}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
            </div>

            <div className="w-full">
              <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-3">
                {t("popularCountriesTitle")}
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {popularCountries.map((country) => (
                  <div
                    key={country.key}
                    className="p-3 bg-gray-50/80 hover:bg-yellow-50 hover:text-black border border-gray-100 hover:border-yellow-200 rounded-xl cursor-pointer transition-all text-xs md:text-sm font-medium text-gray-700"
                  >
                    {country.name}
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
                {t("closeBtn")}
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Hero;
