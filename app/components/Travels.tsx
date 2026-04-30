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
    desc: "No restrictions or data throttling for you. Tether your laptop or hotspot other devices without stress.",
    icon: UserRound,
  },
  {
    title: "Your Data Passport",
    desc: "No more sudden charges. Pay as you go with local rates and full transparency.",
    icon: Plane,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries. Get online in seconds anywhere.",
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
    }, 3500);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#fffdf7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
            Why Are Travellers Switching to Yaalo?
          </h1>

          <p className="text-xs sm:text-base text-gray-600 max-w-xl mx-auto">
            Zero roaming fees and 200+ destinations worldwide.
          </p>
        </div>

        {/* NAV BUTTONS */}
        <div className="hidden sm:flex justify-end gap-3 mb-6">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ArrowLeft size={16} />
          </button>

          <button
            onClick={scrollNext}
            className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ArrowRight size={16} />
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
                  className="min-w-[90%] sm:min-w-[75%] md:min-w-[55%] lg:min-w-[40%] px-2 sm:px-3"
                >
                  <div className="min-h-[240px] sm:min-h-[260px] rounded-3xl p-4 sm:p-6 border border-gray-200 bg-white hover:shadow-xl transition">
                    <div className="flex flex-col gap-4 h-full">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full text-yellow-400 flex items-center justify-center">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-base sm:text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-base text-gray-600 mt-2 leading-5 sm:leading-6">
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
        <div className="flex justify-center sm:justify-start mt-6 sm:mt-10">
          <div className="group inline-flex items-center gap-2 px-5 sm:px-6 h-10 sm:h-12 rounded-2xl bg-yellow-300 hover:bg-black transition cursor-pointer">
            <span className="text-xs sm:text-sm font-medium text-black group-hover:text-white">
              Show me eSIM plans
            </span>

            <ArrowUpRight
              size={14}
              className="text-black group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
