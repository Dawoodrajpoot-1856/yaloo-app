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
  ChevronRight,
  ChevronLeft,
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
    desc: "People care for their planet, and Yaalo makes sure you go green. So, no more plastic waste from physical SIM cards. Stress-free purchasing and usage.",
    icon: UserRound,
  },
  {
    title: "Your Data Passport",
    desc: "Track usage, top-up anywhere, switch plans on the fly. Travel-tech made it easy with the Yaalo App Dashboard. Available on Apple and Google Play Stores!",
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
    <section className="py-10 sm:py-16 lg:py-20 ">
      <div className="max-w-[1450px] mx-auto px-6 sm:pl-20 sm:pr-[100px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-6">
          {/* Text Content */}
          <div className="text-left max-w-3xl">
            <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold mb-2 sm:mb-4">
              Why Are Travellers Switching to Yaalo?
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Because of zero roaming fees and international travel eSIM for
              200+ destinations, Yaalo is the best choice.
            </p>
          </div>

          {/* NAV BUTTONS - Now part of the same row on desktop */}
          <div className="flex justify-start md:justify-end gap-3 min-w-fit">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full   flex items-center justify-center bg-yellow-400   transition"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center  transition"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {cards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex-[0_0_90%] sm:flex-[0_0_45%] lg:flex-[0_0_31%] pl-4"
                >
                  <div className="min-h-[240px] sm:min-h-[280px] rounded-3xl p-6 border border-gray-200 bg-white hover:shadow-xl transition shadow-sm">
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
