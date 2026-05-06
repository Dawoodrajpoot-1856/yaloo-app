"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
      <div className="max-w-[1230px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              num: "1",
              title: "Buy a data plan",
              desc: "Search your destination and explore available eSIM plans designed for your needs.",
              img: "step1.5f190939.png",
            },
            {
              num: "2",
              title: "Install the eSIM",
              desc: "Follow the simple installation guide sent to your email or scan the QR code.",
              img: "step2.865ddb77.png",
            },
            {
              num: "3",
              title: "Activate your plan",
              desc: "Once you arrive, activate your data plan and stay connected instantly.",
              img: "step3.4035cfb6.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white w-full rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-amber-300 transition-all duration-500 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400  flex items-center justify-center text-xl font-bold transition-all">
                  {item.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                {item.desc}
              </p>

              <div className="h-52 flex items-end justify-center mt-auto overflow-hidden">
                <img
                  src={`https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F${item.img}&w=640&q=75`}
                  className="max-h-full w-auto object-contain group-hover:scale-105 transition duration-500"
                  alt={item.title}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 1. Parent div ko hamesha w-full rakhein */}
      <div className="w-full ">
        <div
          className=" bg-[#1a1a1ad5]    px-8 sm:px-12    py-12    w-full     mx-auto 
    flex flex-col lg:flex-row 
    items-center justify-between 
    gap-10 
    shadow-lg 
    overflow-hidden"
        >
          <div className="max-w-xl text-center lg:text-left z-10">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Is Your Phone <span className="text-amber-400">eSIM-Ready?</span>
            </h2>

            <p className="text-gray-400 text-base mb-8">
              Check in seconds! Most modern devices are eSIM compatible.
            </p>

            <Link href="/esim-compatible-devices">
              <button className="group bg-amber-400 hover:text-white hover:bg-black transition-all duration-300 px-8 py-4 rounded-xl flex items-center gap-3 font-bold mx-auto lg:mx-0">
                All eSIM compatible-phones{" "}
                <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
                  <ArrowUpRight className="absolute group-hover:opacity-0 group-hover:-translate-y-3 transition" />
                  <ArrowRight className="absolute opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition" />
                </span>
              </button>
            </Link>
          </div>

          {/* 3. Image container ki width ko manage karein */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FesimSS.07771902.png&w=640&q=70"
              className="max-w-full h-auto drop-shadow-2xl"
              alt="Compatibility Check"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
