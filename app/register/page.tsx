"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const GlassForm = () => {
  return (
    <>
      <Header />
      <div className="relative  min-h-screen flex items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
          className="absolute inset-0 w-full h-full object-cover brightness-110"
          alt="bg"
        />

        <div className="absolute inset-0 bg-white/10" />

        {/* FORM */}
        <div className="relative z-20 mt-15 w-full max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
          {/* TOP BUTTONS */}
          <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
            <button className="w-1/2 py-2 bg-white rounded-xl font-semibold text-black">
              Register
            </button>
            <button className="w-1/2 py-2 bg-white rounded-xl font-semibold text-black hover:bg-white/40 transition">
              Login
            </button>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-semibold text-black text-center mb-6">
            Sign up now
          </h1>

          {/* NAME */}
          <label className="text-sm font-medium text-black">Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black placeholder-gray-600 outline-none"
          />

          {/* EMAIL */}
          <label className="text-sm font-medium text-black">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black placeholder-gray-600 outline-none"
          />

          {/* PASSWORD */}
          <label className="text-sm font-medium text-black">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black placeholder-gray-600 outline-none"
          />

          {/* CONFIRM PASSWORD */}
          <label className="text-sm font-medium text-black">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full mb-4 mt-1 p-3 rounded-xl bg-white text-black placeholder-gray-600 outline-none"
          />

          {/* NOT A ROBOT */}
          <div className="flex items-center justify-between mb-5 w-65 p-4 h-20 bg-white  border border-gray-300">
            {/* LEFT SIDE */}
            <div className="flex items-center gap-2 text-black">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-sm">I'm not a robot</span>
            </div>

            {/* RIGHT CAPTCHA STYLE */}
            <div className="flex flex-col items-end text-[10px] text-blue-500 leading-3">
              <span>reCAPTCHA</span>
              <span>Privacy • Terms</span>
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button className="group w-full py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2">
            <span>Submit</span>

            <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <ArrowUpRight
                size={18}
                className="absolute text-black group-hover:opacity-0 group-hover:-translate-y-3 transition-all duration-300"
              />
              <ArrowRight
                size={18}
                className="absolute opacity-0 translate-y-3 text-white group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
              />
            </span>
          </button>
          {/* CONTINUE WITH */}
          <div className="flex items-center justify-center my-6">
            Continue With
          </div>

          <div className="flex items-center justify-center gap-4">
            {/* GOOGLE */}
            <button className="w-11 flex items-center justify-center py-3 rounded-4xl bg-white text-black font-medium hover:scale-[1.02] transition">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="h-5"
              />
            </button>

            {/* APPLE */}
            <button className="w-11 flex items-center justify-center py-3 rounded-4xl bg-black text-white font-medium hover:scale-[1.02] transition">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                className="h-5 invert"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GlassForm;
