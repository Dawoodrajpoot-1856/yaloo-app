"use client";

import { ArrowUpRight, ArrowRight } from "lucide-react";
import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";

const Login = () => {
  return (
    <>
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FloginBg.a05beed4.png&w=1920&q=100"
          className="w-full h-full object-cover brightness-90"
          alt="bg"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* HEADER */}
      <Header />

      {/* PAGE WRAPPER */}
      <div className="min-h-screen flex items-center justify-center px-4">
        {/* FORM */}
        <div className="w-full mt-30 max-w-lg p-8 rounded-3xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-2xl">
          {/* TOP BUTTONS */}
          <div className="flex mb-6 bg-white/30 rounded-2xl p-1">
            <Link href="/login" className="w-1/2">
              <button className="w-full py-2 rounded-xl font-semibold text-black hover:bg-white/40 transition">
                Login
              </button>
            </Link>
            <Link href="/register" className="w-1/2">
              <button className="w-full py-2 bg-white rounded-xl font-semibold text-black">
                Register
              </button>
            </Link>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-black text-center mb-6">
            Sign in
          </h1>

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

          {/* SUBMIT */}
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

          {/* CONTINUE */}
          <div className="flex items-center justify-center my-6 text-black">
            Continue With
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-11 flex items-center justify-center py-3 rounded-full bg-white hover:scale-105 transition">
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                className="h-5"
              />
            </button>

            <button className="w-11 flex items-center justify-center py-3 rounded-full bg-black hover:scale-105 transition">
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

export default Login;
