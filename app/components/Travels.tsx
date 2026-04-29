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
    desc: "No restrictions or data throttling for you. Tether your laptop or hotspot other devices without stress. Yaalo keeps things straight without interruption in connectivity.",
    icon: UserRound,
  },
  {
    title: "Your Data Passport",
    desc: "No more holes in the pocket, because there are no sudden charges. Pay as you go with Local rates, fair prices, and full transparency. Roam the World with peace!",
    icon: Plane,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries, including Local, Regional, and Global eSIM Plans. Get online in seconds by sitting on your home couch or arriving at an international airport.",
    icon: Handshake,
  },
];

export default function Travels() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
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
    <section
      className=" mr-20
    
    
    sm:py-20 bg-[#fffdf7]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-3">
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
            className="w-11 h-11 rounded-full  flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={scrollNext}
            className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {cards.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="min-w-full sm:min-w-[80%] md:min-w-[55%] lg:min-w-[40%] px-3"
                >
                  <div className="h-[280px] rounded-3xl p-6 border border-gray-200 bg-white hover:shadow-xl transition">
                    <div className="flex items-star flex-col gap-5 h-full">
                      <div className="w-14 h-14 rounded-full text-yellow-400 flex items-center justify-center flex-shrink-0">
                        <Icon size={24} />
                      </div>

                      {/* TEXT */}
                      <div className="flex flex-col">
                        <h3 className="text-lg sm:text-2xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-sm sm:text-base text-gray-600 mt-3 leading-6">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-start mt-8">
          <div className="group inline-flex items-center gap-2 px-6 h-12 rounded-2xl bg-yellow-300 hover:bg-black transition cursor-pointer">
            <span className="text-sm font-medium text-black group-hover:text-white">
              Show me eSIM plans
            </span>

            <ArrowUpRight
              size={16}
              className="text-black group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
