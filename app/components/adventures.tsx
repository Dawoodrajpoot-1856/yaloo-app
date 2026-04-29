import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronsLeftRight,
  ChevronsRight,
  ChevronsRightIcon,
} from "lucide-react";
import React from "react";

const Adventures = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* TITLE */}
      <h1 className="font-semibold text-3xl  ml-5 sm:text-5xl">
        Pick Your Adventure
      </h1>

      <p className="mt-4  ml-5 font-medium text-gray-700">
        Find Yaalo eSIMs built for your route
      </p>

      {/* TOP BAR */}
      <div className="flex flex-col ml-5 lg:flex-row lg:justify-between gap-6 mt-8">
        {/* FILTER BUTTONS */}
        <div className="border border-gray-200 rounded-2xl p-2 flex flex-wrap gap-2 w-full sm:w-fit">
          <button className="bg-yellow-400 font-medium px-6 py-2 rounded-2xl">
            Local
          </button>

          <button className="px-6 py-2 rounded-2xl hover:bg-gray-100">
            Regional
          </button>

          <button className="px-6 py-2 rounded-2xl hover:bg-gray-100">
            Global
          </button>
        </div>

        {/* SEARCH BUTTON */}
        <div className="group  inline-flex items-center justify-center gap-2 px-4 h-12 rounded-2xl bg-yellow-300 hover:bg-black transition-all duration-300 cursor-pointer w-full sm:w-fit">
          <span className="text-sm font-medium text-black group-hover:text-white">
            Search your destination
          </span>

          <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
            <ArrowUpRight
              size={16}
              className="absolute text-black group-hover:opacity-0 group-hover:-translate-y-3 transition-all"
            />

            <ArrowRight
              size={16}
              className="absolute opacity-0 translate-y-3 text-white group-hover:opacity-100 group-hover:translate-y-0 transition-all"
            />
          </span>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mt-12 justify-center">
        {[
          { name: "United Kingdom", price: "$3", flag: "gb" },
          { name: "Bermuda", price: "$6", flag: "bm" },
          { name: "Canada", price: "$5", flag: "ca" },
          { name: "Costa Rica", price: "$8", flag: "cr" },
        ].map((item, i) => (
          <div
            key={i}
            className="w-[240px] sm:w-[260px] border border-gray-200 rounded-lg p-4 flex items-center justify-between hover:shadow-sm transition mx-auto"
          >
            <div className="flex flex-col items-start">
              <img
                src={`https://flagcdn.com/w80/${item.flag}.png`}
                className="h-8 rounded"
                alt={item.name}
              />

              <p className="mt-2 text-sm font-medium">{item.name}</p>

              <p className="text-sm text-gray-600">Starts at {item.price}</p>
            </div>

            <span className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-200 rounded-full flex items-center justify-center">
              <ChevronsRight size={20} />
            </span>
          </div>
        ))}
      </div>
      <div className="mt-16 ml-5 ">
        <h1 className="text-3xl sm:text-5xl font-semibold leading-tight">
          How Yaalo eSIM Works? <br />
          (Spoiler: It’s Ridiculously Simple)
        </h1>

        <p className="text-sm sm:text-base text-gray-700 mt-6 max-w-3xl">
          Users often assume that technical processes are complex. But
          activating{" "}
          <span className="font-semibold text-black">Yaalo eSIM</span> is like
          1, 2, 3 and connected!
        </p>
      </div>
    </section>
  );
};

export default Adventures;
