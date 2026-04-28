import React from "react";
import { Search } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-4 mt-10 text-black">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">
            Yaalo eSIM Compatible Devices
          </h1>

          {/* SEARCH */}
          <div className="relative h-12 sm:h-14 w-full max-w-xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search compatible phones"
              className="w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-sm sm:text-base"
            />

            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400"
              size={18}
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
