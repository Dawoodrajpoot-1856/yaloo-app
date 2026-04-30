"use client";

import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const reviews = [
  {
    name: "Ali Khan",
    text: "Yaalo eSIM saved me so much money while traveling Europe. Super easy setup!",
  },
  {
    name: "Sara Ahmed",
    text: "Instant activation and amazing speed. Worked in 5 countries.",
  },
  {
    name: "John Smith",
    text: "No roaming stress anymore. Works perfectly everywhere.",
  },
  {
    name: "Ayesha Noor",
    text: "Best travel decision ever. Very smooth internet abroad.",
  },
  {
    name: "Luca Italy",
    text: "Used from Rome to Berlin. Never lost signal once.",
  },
  {
    name: "Ravi Kumar",
    text: "Cheaper than roaming. Support is super fast.",
  },
  {
    name: "Clara Spain",
    text: "Activated on flight. Worked instantly after landing.",
  },
];

export default function Crousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => {
      clearInterval(interval);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 sm:mb-12">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Traveller Voices <br />
          They are Using Yaalo forever!
        </h1>

        <div className="flex gap-3 sm:gap-4">
          <a href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo">
            <img
              src="https://yaalo.com/_next/static/media/playLink.1cd75698.svg"
              className="h-9 sm:h-12 hover:scale-105 transition"
            />
          </a>

          <a href="https://apps.apple.com/app/id6753675047">
            <img
              src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
              className="h-9 sm:h-12 hover:scale-105 transition"
            />
          </a>
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {reviews.map((item, i) => (
            <div
              key={i}
              className="min-w-[85%] sm:min-w-[70%] md:min-w-[50%] lg:min-w-[33.333%] px-2 sm:px-4"
            >
              <div className="border border-gray-300 rounded-2xl p-4 sm:p-6 bg-white h-full transition hover:shadow-md">
                {/* USER */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-yellow-300 flex items-center justify-center font-semibold text-xs sm:text-sm text-black">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>

                  <h3 className="font-semibold text-sm sm:text-base">
                    {item.name}
                  </h3>
                </div>

                {/* TEXT */}
                <p className="text-gray-700 text-xs sm:text-base leading-5 sm:leading-6">
                  "{item.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-6 sm:mt-8">
        {reviews.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              i === selectedIndex ? "bg-yellow-400 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
