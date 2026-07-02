"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Cards = () => {
  const t = useTranslations("Cards");

  const stepImages = [
    "step1.5f190939.png",
    "step2.865ddb77.png",
    "step3.4035cfb6.png",
  ];

  const stepsKeys = ["0", "1", "2"] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
      {/* 3 Step Cards Container */}
      <div className="w-full max-w-[1400px] mx-auto 2xl:px-0 px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stepImages.map((imgName, i) => {
            const stepIndex = stepsKeys[i];
            return (
              <div
                key={i}
                className="bg-white w-full rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-amber-300 transition-all duration-500 flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400 flex items-center justify-center text-xl font-bold transition-all">
                    {i + 1}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {t(`steps.${stepIndex}.title`)}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {t(`steps.${stepIndex}.desc`)}
                </p>

                <div className="h-52 flex items-end justify-center mt-auto overflow-hidden">
                  <img
                    src={`https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F${imgName}&w=640&q=75`}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition duration-500"
                    alt={t(`steps.${stepIndex}.title`)}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto 2xl:px-0 px-8 mt-10">
        <div className="bg-[#1a1a1ad5] px-6 sm:px-12 py-12 rounded-2xl w-full mx-auto">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            <div className="w-full lg:max-w-xl text-center lg:text-left z-10">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                {t("readyTitle")}
              </h2>

              <p className="text-gray-400 text-base mb-8">{t("readyDesc")}</p>

              <Link href="/esim-compatible-devices">
                <button className="group bg-amber-400 hover:text-white hover:bg-black transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 font-bold mx-auto lg:mx-0">
                  {t("button")}{" "}
                  <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                    <ArrowUpRight className="absolute group-hover:opacity-0 group-hover:-translate-y-3 transition" />
                    <ArrowRight className="absolute opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Image container */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
              <img
                src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FesimSS.07771902.png&w=640&q=70"
                className="max-w-full h-auto max-h-[350px] lg:max-h-[400px] object-contain drop-shadow-2xl"
                alt="Compatibility Check"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
