"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useRef, useState } from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
const GlassForm = () => {
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    // form submit logic
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative flex-1">
        {/* BG */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
            className="w-full h-full object-cover brightness-90"
            alt="bg"
          />
          <div className="absolute inset-0 bg-white/10" />
        </div>

        <Header />

        <div className="flex justify-center mt-10 px-4 py-20">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
          >
            {/* tabs */}
            <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
              <Link href="/login" className="w-1/2">
                <button
                  type="button"
                  className="w-full py-2 rounded-xl font-semibold hover:bg-white/40"
                >
                  Login
                </button>
              </Link>

              <Link href="/register" className="w-1/2">
                <button
                  type="button"
                  className="w-full py-2 rounded-xl font-semibold bg-white"
                >
                  Register
                </button>
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-center mb-6">Sign up now</h1>

            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-black">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Confirm password"
                />
              </div>
            </div>

            {/* RECAPTCHA */}
            <div className="mt-5 mb-5 flex ">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(value: any) => setCaptchaValue(value || "")}
              />
            </div>

            <button
              type="submit"
              className="group w-full py-3 rounded-xl bg-yellow-400 font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2"
            >
              Submit
              <ArrowUpRight />
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 bg-white mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default GlassForm;
