import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const page = () => {
  return (
    <>
      <div>
        {/* HEADER */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* HERO */}
        <div
          className="h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative mt-30 z-10 text-center px-4">
            <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl text-black leading-tight">
              Join the Yaalo eSIM <br /> Affiliate Program
            </h1>

            <h2 className="text-black mt-5 text-lg sm:text-xl font-medium">
              One of the Best eSIM Affiliate Programs for Travel Creators
            </h2>

            <p className="text-black mt-5 text-lg leading-8 max-w-3xl mx-auto">
              Welcome to an honest way to earn money. Join, Promote, & Earn
              commission every time someone buys a global eSIM data plan through
              your link.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center mt-8">
              <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3">
                {/* hover fill */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>

                {/* text */}
                <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                  Join the Yaalo Affiliate Program
                </span>

                {/* icon swap */}
                <span className="relative z-10 w-5 h-5 flex items-center justify-center">
                  <ArrowUpRight
                    size={18}
                    className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2"
                  />

                  <ArrowRight
                    size={18}
                    className="absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
