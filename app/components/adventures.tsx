import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Adventures = async () => {
  // 1. API Fetching
  const data = await fetch(
    "https://test.esimwhitelabel.com/api/packages/country",
    { next: { revalidate: 3600 } }, // Cache performance ke liye
  );
  const res = await data.json();

  // 2. Data extraction (Aapke structure ke mutabiq)
  const CountryList = res.data;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* TITLE */}
      <h1 className="font-semibold text-3xl ml-4 sm:text-5xl">
        Pick Your Adventure
      </h1>

      <p className="mt-4 ml-4 font-medium text-gray-700">
        Find Yaalo eSIMs built for your route
      </p>

      {/* TABS & SEARCH BUTTON */}
      <div className="flex flex-col ml-4 lg:flex-row lg:justify-between gap-6 mt-8">
        <div className="border border-gray-200 p-1 rounded-2xl flex flex-wrap gap-1 w-full sm:w-[415px]">
          <button className="bg-yellow-300 font-medium p-2 w-33 rounded-2xl">
            Local
          </button>
          <button className="font-medium p-3 w-33 rounded-2xl">Regional</button>
          <button className="font-medium p-3 w-33 rounded-2xl">Global</button>
        </div>

        <Link href="/destinations">
          <div className="group inline-flex items-center justify-center mr-5 gap-2 px-4 h-12 rounded-2xl bg-yellow-300 hover:bg-black transition-all duration-300 cursor-pointer w-full sm:w-fit">
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
        </Link>
      </div>

      {/* CARDS SECTION - Yahan Data Show ho raha hai */}
      <div className="grid grid-cols-1 mr-3 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 justify-center">
        {CountryList.map((item: any, i: number) => (
          <div
            key={i}
            className="w-[240px] sm:w-[260px] border border-gray-200 rounded-3xl p-4 flex items-center justify-between hover:shadow-sm transition mx-auto"
          >
            <div className="flex flex-col items-start">
              {/* Flag: API se image le rahe hain, agar na ho toh flagcdn use hoga */}
              <img
                src={
                  item.image ||
                  `https://flagcdn.com/w80/${item.slug.slice(0, 2)}.png`
                }
                className="h-8 rounded object-cover"
                alt={item.name}
              />

              {/* Country Name from API */}
              <p className="mt-2 text-sm font-medium">{item.name}</p>

              {/* Price from API (agar price field alag hai toh woh lagayein) */}
              <p className="text-sm text-gray-600">
                Starts at {item.starting_price || "$5"}
              </p>
            </div>

            <span className="w-9 h-9 sm:mt-12 sm:w-8 sm:h-8 bg-amber-200 rounded-full flex items-center justify-center">
              <ChevronRight size={18} />
            </span>
          </div>
        ))}
      </div>

      {/* FOOTER TEXT */}
      <div className="mt-16">
        <h1 className="text-3xl ml-3 sm:text-5xl font-semibold leading-tight">
          How Yaalo eSIM Works? <br />
          (Spoiler: It’s Ridiculously Simple)
        </h1>
        <p className="text-sm ml-2 sm:text-base text-gray-700 mt-6 max-w-3xl">
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
