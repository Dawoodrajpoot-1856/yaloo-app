"use client";

import React, { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";
import * as ReCAPTCHA from "react-google-recaptcha";
const GlassForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please verify reCAPTCHA");
      return;
    }

    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* BACKGROUND */}
      <div className="relative flex-1">
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

        {/* FORM SECTION */}
        <div className="flex justify-center mt-10 px-4 py-20">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl"
          >
            {/* TABS */}
            <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
              <Link href="/login" className="w-1/2">
                <button
                  type="button"
                  className="w-full py-2 rounded-xl font-semibold hover:bg-white/40 transition"
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

            {/* TITLE */}
            <h1 className="text-4xl font-bold text-center mb-6">Sign up now</h1>

            {/* FORM FIELDS */}
            <div className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full p-3 rounded-xl bg-white outline-none border border-gray-200 focus:border-black"
                  placeholder="Enter password"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium">
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
            <div className="mt-6 flex justify-center">
              <ReCAPTCHA.default
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                onChange={(v: any) => setCaptchaValue(v || "")}
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-6 w-full py-3 rounded-xl bg-yellow-400 font-semibold hover:bg-black hover:text-white transition flex items-center justify-center gap-2"
            >
              Submit
              <ArrowUpRight />
            </button>
          </form>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 bg-white mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default GlassForm;
