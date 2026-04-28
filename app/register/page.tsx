"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";

const GlassForm = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* BACKGROUND (ONLY PAGE AREA ABOVE FOOTER) */}
      <div className="relative flex-1">
        {/* BG IMAGE */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
            className="w-full h-full object-cover brightness-90"
            alt="bg"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* HEADER */}
        <Header />

        {/* FORM AREA */}
        <div className="flex justify-center mt-10 px-4 py-20">
          <div className="w-full max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
            {/* BUTTONS */}
            <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
              <Link href="/login" className="w-1/2">
                <button className="w-full py-2 rounded-xl font-semibold text-black hover:bg-white/40 transition">
                  Login
                </button>
              </Link>

              <Link href="/register" className="w-1/2">
                <button className="w-full py-2 rounded-xl font-semibold bg-white text-black">
                  Register
                </button>
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-black text-center mb-6">
              Sign up now
            </h1>

            <input
              className="w-full mb-4 p-3 rounded-xl bg-white"
              placeholder="Name"
            />
            <input
              className="w-full mb-4 p-3 rounded-xl bg-white"
              placeholder="Email"
            />
            <input
              className="w-full mb-4 p-3 rounded-xl bg-white"
              placeholder="Password"
            />
            <input
              className="w-full mb-4 p-3 rounded-xl bg-white"
              placeholder="Confirm Password"
            />

            <button className="group w-full py-3 rounded-xl bg-yellow-400 font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2">
              Submit
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER (NO BG IMAGE HERE) */}
      <div className="relative z-10 bg-white mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default GlassForm;
