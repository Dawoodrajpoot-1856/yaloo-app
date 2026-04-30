"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 pb-20">
      {/* HERO */}
      <div className="text-center px-6 pt-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Simple eSIM Experience
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg">
          Buy, install and activate your eSIM in minutes
        </p>
      </div>

      {/* STEPS - Added Responsive Margin and Grid Fix */}
      <div
        className="max-w-[1200px] px-4 py-10 
        /* ml-16 sirf desktop par, mobile par center rahega ya default padding use karega */
        ml-0 md:ml-16 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        {[
          { num: "1", title: "Buy a data plan", img: "step1.5f190939.png" },
          { num: "2", title: "Install the eSIM", img: "step2.865ddb77.png" },
          { num: "3", title: "Activate your plan", img: "step3.4035cfb6.png" },
        ].map((item, i) => (
          <div
            key={i}
            /* mx-0 ensures it stays left-aligned in its grid cell */
            className="bg-white w-full max-w-[360px] mx-0 rounded-2xl p-5 shadow-md border border-gray-300 hover:-translate-y-3 hover:border-amber-200 transition-all duration-500 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center text-lg sm:text-xl font-bold">
                  {item.num}
                </span>
                <h1 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h1>
              </div>

              <p className="text-gray-600 text-sm leading-6 mb-4">
                Search your destination and explore available eSIM plans
                designed for your needs.
              </p>
            </div>

            <div className="h-48 sm:h-56 md:h-60 flex items-center justify-center mt-auto">
              <img
                src={`https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F${item.img}&w=640&q=75`}
                className="max-h-full max-w-full object-contain hover:scale-105 transition duration-500"
                alt={item.title}
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA - Adjusted to match the same alignment */}
      <div
        className="bg-[#393a36] mt-12 sm:mt-16 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 
  /* Width aur Alignment: mx-auto hataya, ml-16 lagaya */
  max-w-[1200px]  md:ml-18 mr-4 lg:mr-0
  flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl"
      >
        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-white text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Is Your Phone eSIM-Ready?
          </h1>

          <p className="text-gray-200 text-sm sm:text-lg leading-7 mb-6">
            Check in seconds! Most modern devices are eSIM compatible.
          </p>

          <p className="text-white text-lg sm:text-xl font-medium mb-6">
            Check eSIM Compatibility Here:
          </p>

          <button className="group bg-yellow-400 text-black hover:bg-black hover:text-white transition px-6 py-3.5 rounded-2xl flex items-center gap-3 font-bold mx-auto lg:mx-0 shadow-lg">
            All eSIM-compatible Phones
            <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <ArrowUpRight className="absolute group-hover:opacity-0 group-hover:-translate-y-3 transition" />
              <ArrowRight className="absolute opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition" />
            </span>
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full flex justify-center lg:justify-end">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FesimSS.07771902.png&w=640&q=70"
            className="w-[220px] sm:w-[300px] md:w-[360px] lg:w-[450px] hover:scale-105 transition duration-500"
            alt="Compatibility Check"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
