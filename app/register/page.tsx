"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha"; // Standard import

const GlassForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* BACKGROUND - Pure Responsive */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
          className="w-full h-full object-cover"
          alt="bg"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* HEADER */}
      <Header />

      {/* FORM SECTION - Adjusted for all screens */}
      <div className="flex-1 flex items-center justify-center px-4 py-10 md:py-20">
        <form
          onSubmit={handleSubmit}
          className="w-full mt-5 max-w-lg p-5 sm:p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
        >
          {/* TABS */}
          <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
            <Link href="/login" className="w-1/2">
              <button
                type="button"
                className="w-full py-2 rounded-xl font-semibold hover:bg-white/40 transition text-sm sm:text-base"
              >
                Login
              </button>
            </Link>

            <Link href="/register" className="w-1/2">
              <button
                type="button"
                className="w-full py-2 rounded-xl font-semibold bg-white text-sm sm:text-base shadow-sm"
              >
                Register
              </button>
            </Link>
          </div>

          {/* TITLE */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-black">
            Sign up now
          </h1>

          {/* FORM FIELDS */}
          <div className="space-y-4">
            <div>
              <label className="block mb-1.5 text-sm font-medium text-black ml-1">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-sm font-medium text-black ml-1">
                Email Address
              </label>
              <input
                required
                type="email"
                className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black transition-all"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-sm font-medium text-black ml-1">
                Password
              </label>
              <input
                required
                type="password"
                className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black transition-all"
                placeholder="Enter password"
              />
            </div>

            <div>
              <label className="block mb-1.5 text-sm font-medium text-black ml-1">
                Confirm Password
              </label>
              <input
                required
                type="password"
                className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black transition-all"
                placeholder="Confirm password"
              />
            </div>
          </div>

          {/* RECAPTCHA - Scaled for small screens */}
          <div className="mt-6 flex justify-center overflow-hidden">
            <div className="scale-75 sm:scale-100 origin-center">
              <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(v) => setCaptchaValue(v)}
              />
            </div>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="mt-6 w-full py-3.5 rounded-xl bg-yellow-400 font-bold hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            Submit
            <ArrowUpRight size={20} />
          </button>
        </form>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default GlassForm;
