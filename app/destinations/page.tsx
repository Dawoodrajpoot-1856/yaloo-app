import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Search, ChevronsRight } from "lucide-react";

const page = () => {
  return (
    <>
      {/* HEADER (fixed properly) */}
      <div className="fixed top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      {/* HERO */}
      <div
        className="h-[60vh] sm:h-[70vh] lg:h-[80vh] 
        brightness-110 bg-cover bg-center bg-no-repeat 
        flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* content */}
        <div className="relative z-10 w-full text-center px-4 sm:px-6">
          <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-black">
            Roam the World With Yaalo - Seamless Connectivity Worldwide!
          </h1>

          <div className="text-black mt-4 px-3 py-2 rounded-2xl text-sm sm:text-lg w-fit mx-auto">
            Buying an eSIM online was never that easy before
          </div>
        </div>
      </div>

      {/* SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <h1 className="font-semibold text-2xl sm:text-4xl lg:text-5xl">
          Pick Your Adventure
        </h1>

        <p className="mt-3 sm:mt-4 font-medium text-gray-700 text-sm sm:text-base">
          Find Yaalo eSIMs built for your route
        </p>

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-8">
          {/* FILTERS */}
          <div className="border border-gray-200 rounded-2xl p-2 flex flex-wrap gap-2 w-full lg:w-fit">
            <button className="bg-yellow-400 font-medium px-4 sm:px-6 py-2 rounded-2xl text-sm sm:text-base">
              Local
            </button>

            <button className="px-4 sm:px-6 py-2 rounded-2xl hover:bg-gray-100 text-sm sm:text-base">
              Regional
            </button>

            <button className="px-4 sm:px-6 py-2 rounded-2xl hover:bg-gray-100 text-sm sm:text-base">
              Global
            </button>
          </div>

          {/* SEARCH */}
          <div className="relative w-full lg:w-[430px] h-11 sm:h-12">
            <input
              type="text"
              placeholder="Where are you flying next?"
              className="w-full h-full pl-4 sm:pl-5 pr-10 border border-gray-200 rounded-2xl outline-none text-sm"
            />

            <Search
              size={18}
              className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10 sm:mt-12">
          {[
            { name: "United Kingdom", price: "$3", flag: "gb" },
            { name: "Bermuda", price: "$6", flag: "bm" },
            { name: "Canada", price: "$5", flag: "ca" },
            { name: "Costa Rica", price: "$8", flag: "cr" },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-4 flex items-center justify-between
              hover:shadow-md transition"
            >
              <div>
                <img
                  src={`https://flagcdn.com/w80/${item.flag}.png`}
                  className="h-6 sm:h-8 rounded"
                  alt={item.name}
                />

                <p className="mt-2 text-sm font-medium">{item.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">
                  Starts at {item.price}
                </p>
              </div>

              <span className="w-8 h-8 sm:w-10 sm:h-10 bg-amber-200 rounded-full flex items-center justify-center">
                <ChevronsRight size={18} />
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default page;
