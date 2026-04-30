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
    <section className="py-10 sm:py-16 bg-white">
      {/* Updated Container with exact same margins as Travels section */}
      <div className="max-w-[1440px] mx-auto px-6 sm:pl-20 sm:pr-[100px]">
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
                alt="Play Store"
              />
            </a>

            <a href="https://apps.apple.com/app/id6753675047">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
                className="h-9 sm:h-12 hover:scale-105 transition"
                alt="App Store"
              />
            </a>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {" "}
            {/* Counteract slide padding */}
            {reviews.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_31%] pl-4"
              >
                <div className="border border-gray-200 rounded-3xl p-6 bg-white h-full transition hover:shadow-lg">
                  {/* USER */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-sm text-black">
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>

                    <h3 className="font-bold text-gray-900">{item.name}</h3>
                  </div>

                  {/* TEXT */}
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex ? "w-8 bg-yellow-400" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
