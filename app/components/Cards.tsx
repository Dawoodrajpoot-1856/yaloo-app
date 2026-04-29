"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* HERO */}
      <div className="text-center  px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Simple eSIM Experience
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Buy, install and activate your eSIM in minutes
        </p>
      </div>

      {/* STEPS */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { num: "1", title: "Buy a data plan", img: "step1.5f190939.png" },
          { num: "2", title: "Install the eSIM", img: "step2.865ddb77.png" },
          { num: "3", title: "Activate your plan", img: "step3.4035cfb6.png" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white w-[360px] mx-auto rounded-2xl p-5 shadow-md border border-gray-300 hover:-translate-y-3 hover:border-amber-200 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-full text-gray-500 flex items-center justify-center text-xl font-bold">
                {item.num}
              </span>
              <h1 className="text-xl font-semibold">{item.title}</h1>
            </div>

            <p className="text-gray-600 text-sm leading-6 mb-4">
              Search your destination and explore available eSIM plans designed
              for your needs.
            </p>

            <div className="h-60 flex items-center justify-center">
              <img
                src={`https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F${item.img}&w=640&q=75`}
                className="h-full object-contain hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="bg-[#393a36] mt-16 rounded-3xl px-6 sm:px-10 py-12 max-w-[1180px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT */}
        <div className="max-w-xl">
          <h1 className="text-white text-3xl sm:text-5xl font-semibold leading-tight mb-6">
            Is Your Phone eSIM-Ready?
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg leading-7 mb-6">
            Check in seconds! Most modern devices are eSIM compatible.
          </p>

          <p className="text-white text-lg sm:text-xl font-medium mb-6">
            Check eSIM Compatibility Here:
          </p>

          <button className="group bg-yellow-400 text-black hover:bg-black hover:text-white transition px-5 py-3 rounded-2xl flex items-center gap-3 font-semibold">
            All eSIM-compatible Phones
            <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <ArrowUpRight className="absolute group-hover:opacity-0 group-hover:-translate-y-3 transition" />
              <ArrowRight className="absolute opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition" />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FesimSS.07771902.png&w=640&q=70"
            className="w-[280px] sm:w-[400px] lg:w-[500px] hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
