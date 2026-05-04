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

const Affiliate = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        if (
          sliderRef.current.scrollLeft + sliderRef.current.clientWidth >=
          sliderRef.current.scrollWidth
        ) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-10">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8">
        {/* TEXT */}
        <div className="max-w-2xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-gray-900">
            Why Partner With Yaalo eSIM?
          </h1>

          <p className="mt-4 text-black text-sm sm:text-base md:text-lg leading-6">
            Choosing the right affiliate program obviously ends with earnings.
            While Yaalo provides promising services around the globe, partnering
            with us will get you:
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 self-start lg:self-auto">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-yellow-400 text-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-6 overflow-hidden scroll-smooth justify-center"
      >
        {images.map((item, i) => (
          <div
            key={i}
            className="
              min-w-[240px] sm:min-w-[280px] md:min-w-[350px]
              h-[320px] sm:h-[380px] md:h-[420px]
              rounded-2xl overflow-hidden shadow-lg relative
              transition-all duration-500 ease-in-out
              hover:min-w-[360px] md:hover:min-w-[460px]
              hover:scale-[1.03]
            "
          >
            {/* IMAGE */}
            <img
              src={item.img}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />

            {/* SHADE */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* TEXT */}
            <div className="absolute bottom-0 left-0 w-full p-4 sm:p-5 text-white z-10">
              <h3 className="font-semibold text-base sm:text-lg">
                {item.text}
              </h3>

              <p className="text-xs sm:text-sm text-white/90 mt-2 leading-5">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Affiliate;
