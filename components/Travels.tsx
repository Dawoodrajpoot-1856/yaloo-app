"use client";

import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Handshake,
  UserRound,
  Globe2,
  Plane,
  ArrowUpRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Travels() {
  const t = useTranslations("travels");

  // Array ko andar rakh Diya taaki 't' smoothly use ho sake bina kisi syntax error ke
  const cards = [
    {
      title: t("cards.card1.title"),
      desc: t("cards.card1.desc"),
      icon: Globe2,
    },
    {
      title: t("cards.card2.title"),
      desc: t("cards.card2.desc"),
      icon: UserRound,
    },
    {
      title: t("cards.card3.title"),
      desc: t("cards.card3.desc"),
      icon: Plane,
    },
    {
      title: t("cards.card4.title"),
      desc: t("cards.card4.desc"),
      icon: Handshake,
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: "trimSnaps",
  });

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [emblaApi]);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto 2xl:px-0 px-8 lg:px-12">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              {t("heading")}
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              {t("subheading")}
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={scrollPrev}
              className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:scale-105 transition"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={scrollNext}
              className="w-11 h-11 rounded-full bg-yellow-400 flex items-center justify-center hover:scale-105 transition"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CAROUSEL */}
        <div className="max-w-[1450px] overflow-hidden" ref={emblaRef}>
          <div className="flex gap-2">
            {cards.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="
                    flex-[0_0_90%]
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_33.333%]
                    px-3
                  "
                >
                  <div className="h-full min-h-[280px] rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col gap-5">
                      <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center">
                        <Icon size={22} />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
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

        {/* BUTTON */}
        <div className="mt-10">
          <Link href="/destinations">
            <button className="group inline-flex items-center gap-2 px-6 h-12 rounded-2xl bg-yellow-300 hover:bg-black transition-all">
              <span className="text-sm font-medium text-black group-hover:text-white">
                {t("ctaButton")}
              </span>

              <ArrowUpRight
                size={16}
                className="text-black group-hover:text-white"
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
