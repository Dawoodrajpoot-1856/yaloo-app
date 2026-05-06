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
import Link from "next/link";

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

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 3500);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-[#fffdf7]">
      {/* 
          Left margin (padding) ko 20 units (~80px) rakha hai aur 
          right ko original 100px taaki left side thodi zyada jagah le.
      */}
      <div className="max-w-[1440px] mx-auto px-6 sm:pl-20 sm:pr-[100px]">
        {/* HEADER */}
        <div className="text-left mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
            Why Are Travellers Switching to Yaalo?
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl">
            Zero roaming fees and 200+ destinations worldwide.
          </p>
        </div>
        {/* NAV BUTTONS */}
        <div className="hidden sm:flex justify-end gap-3 mb-6">
          <button
            onClick={scrollPrev}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition"
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
          <div className="flex -ml-4">
            {cards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] pl-4"
                >
                  <div className="min-h-[240px] sm:min-h-[260px] rounded-3xl p-6 border border-gray-200 bg-white hover:shadow-xl transition shadow-sm">
                    <div className="flex flex-col gap-4 h-full">
                      <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mt-2 leading-relaxed">
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
        <Link href="/destinations">
          <div className="flex justify-start mt-8 sm:mt-12">
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
        </Link>
      </div>
    </section>
  );
}
