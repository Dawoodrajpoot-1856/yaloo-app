"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Handshake,
  UserRound,
  Globe2,
  Plane,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

const cards = [
  {
    title: "Budget-Friendly, Borderless",
    desc: "Track usage, top-up anywhere, switch plans on the fly. Travel-tech made it easy with the Yaalo App Dashboard.",
    icon: Globe2,
  },
  {
    title: "Tether & Hotspot",
    desc: "No restrictions or data throttling. Tether devices without stress.",
    icon: UserRound,
  },
  {
    title: "Your Data Passport",
    desc: "No hidden charges. Pay as you go with local rates and full transparency.",
    icon: Plane,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "No forms, no documents. Just 3-step activation with email QR code.",
    icon: Handshake,
  },
];

export default function Travels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    };

    onSelect();
    emblaApi.on("select", onSelect);

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-16 sm:py-20 bg-[#fffdf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">
            Why Are Travellers Switching to Yaalo?
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Zero roaming fees and 200+ destinations eSIM worldwide.
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center bg-yellow-400"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={scrollNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center bg-yellow-400"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((item, i) => {
              const Icon = item.icon;
              const isActive = i === activeIndex;

              return (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[80%] md:min-w-[60%] lg:min-w-[40%] px-3 sm:px-4"
                >
                  <div
                    className={`rounded-3xl p-5 sm:p-6 text-center border border-gray-300 transition-all duration-500
                    ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-50"}`}
                  >
                    {/* ICON */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-5 sm:mb-6 rounded-full bg-yellow-300 flex items-center justify-center">
                      <Icon size={32} />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-lg sm:text-2xl font-semibold mb-3 sm:mb-4">
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-start mt-6 sm:mt-8">
          <div className="group inline-flex items-center gap-2 px-5 h-11 sm:h-12 rounded-2xl bg-yellow-300 hover:bg-black transition cursor-pointer">
            <span className="text-sm font-medium text-black group-hover:text-white">
              Show me eSIM plans
            </span>

            <ArrowUpRight
              size={16}
              className="text-black group-hover:text-white transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
