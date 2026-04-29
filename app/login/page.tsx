"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* PAGE AREA (BG ONLY HERE) */}
      <div className="relative flex-1">
        {/* BACKGROUND */}
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

        {/* CONTENT */}
        <div className="min-h-screen mt-10 flex items-center justify-center px-4 py-20">
          <div className="w-full max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
            {/* TOP BUTTONS */}
            <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
              <Link href="/login" className="w-1/2">
                <button className="w-full py-2 rounded-xl font-semibold text-black bg-white  transition">
                  Login
                </button>
              </Link>

              <Link href="/register" className="w-1/2">
                <button className="w-full py-2  rounded-xl font-semibold text-black">
                  Register
                </button>
              </Link>
            </div>

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-black text-center mb-6">
              Sign in
            </h1>

            {/* INPUTS */}
            <label className="text-sm font-medium text-black">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black outline-none"
            />

            <label className="text-sm font-medium text-black">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black outline-none"
            />

            {/* SUBMIT */}
            <button className="group w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2">
              Submit
              <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-5 bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
