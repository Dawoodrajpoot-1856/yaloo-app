"use client";

import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcompetitive.3e7c676c.gif&w=3840&q=75",
    text: "Competitive Pricing",
    desc: "Get best market rates without hidden roaming charges.",
  },
  {
    img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FrealTime.8ef42c17.gif&w=3840&q=75",
    text: "Real Time Tracking",
    desc: "Monitor your data usage and balance instantly anytime.",
  },
  {
    img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fpayment.b353049f.gif&w=3840&q=75",
    text: "Secure Payments",
    desc: "100% safe and encrypted payment system for users.",
  },
];

export default function Affiliate() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;

      const slider = sliderRef.current;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        slider.scrollBy({
          left: 450,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold text-gray-900">
              Why Partner With Yaalo eSIM?
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg">
              Choosing the right affiliate program obviously ends with earnings.
              While Yaalo provides promising services around the globe,
              partnering with us will get you:
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:bg-black hover:text-white transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
          >
            {images.map((item, i) => (
              <div
                key={i}
                className="
                  flex-shrink-0
                  w-[85%]
                  sm:w-[48%]
                  lg:w-[32%]
                  h-[320px]
                  sm:h-[380px]
                  lg:h-[450px]
                  rounded-3xl
                  overflow-hidden
                  relative
                  group
                  shadow-lg
                "
              >
                <img
                  src={item.img}
                  alt={item.text}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 p-6 text-white z-10">
                  <h3 className="text-xl font-semibold">{item.text}</h3>

                  <p className="mt-2 text-sm text-white/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
