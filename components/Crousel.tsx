"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Review {
  name: string;
  text: string;
  date: string;
}

const reviews: Review[] = [
  {
    name: "Ali Khan",
    text: "Yaalo eSIM saved me so much money while traveling Europe. Super easy setup!",
    date: "May 12, 2024",
  },
  {
    name: "Sara Ahmed",
    text: "Instant activation and amazing speed. Worked in 5 countries.",
    date: "April 20, 2024",
  },
  {
    name: "John Smith",
    text: "No roaming stress anymore. Works perfectly everywhere.",
    date: "March 15, 2024",
  },
  {
    name: "Ayesha Noor",
    text: "Best travel decision ever. Very smooth internet abroad.",
    date: "Feb 10, 2024",
  },
  {
    name: "Luca Italy",
    text: "Used from Rome to Berlin. Never lost signal once.",
    date: "Jan 25, 2024",
  },
  {
    name: "Ravi Kumar",
    text: "Cheaper than roaming. Support is super fast.",
    date: "Dec 14, 2023",
  },
  {
    name: "Clara Spain",
    text: "Activated on flight. Worked instantly after landing.",
    date: "Nov 30, 2023",
  },
];

export default function Crousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  // Callback functions taake re-render par functions baar baar na banen
  const onInit = useCallback(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList() || []);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    // Pehle initial snaps aur index load karenge safely
    onInit();
    onSelect();

    // Event listeners add kiye
    emblaApi.on("init", onInit);
    emblaApi.on("reInit", onInit);
    emblaApi.on("select", onSelect);

    // Auto-scroll logic safely handles loop jumps
    const interval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
      emblaApi.off("init", onInit);
      emblaApi.off("reInit", onInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onInit, onSelect]);

  return (
    <section className="py-10 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-12 md:px-16 w-full">
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight text-black">
            Traveller Voices <br />
            They are Using Yaalo forever!
          </h1>
          <div className="flex gap-3 sm:gap-4 shrink-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://yaalo.com/_next/static/media/playLink.0hhnjxn3~uuaj.svg"
                className="h-9 sm:h-12 hover:scale-105 transition"
                alt="Play Store"
              />
            </a>
            <a
              href="https://apps.apple.com/app/id6753675047"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://yaalo.com/_next/static/media/appleLink.0jfeh4f2_t3bl.svg"
                className="h-9 sm:h-12 hover:scale-105 transition"
                alt="App Store"
              />
            </a>
          </div>
        </div>

        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex -ml-6">
            {reviews.map((item, i) => (
              <div
                key={i}
                className="flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
              >
                <div className="border border-gray-200 rounded-3xl p-6 bg-white h-full transition hover:shadow-lg flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-sm text-black shrink-0">
                        {item.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()}
                      </div>

                      <div className="flex flex-col">
                        <h3 className="font-bold text-gray-900 leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-[11px] text-gray-400 font-medium">
                          {item.date}
                        </span>
                      </div>
                    </div>

                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className="w-4 h-4 text-green-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                      "{item.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS NAVIGATION */}
        <div className="flex justify-center gap-2 mt-8 sm:mt-10">
          {scrollSnaps.map((_, i) => (
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
