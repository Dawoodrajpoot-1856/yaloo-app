import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Search, ChevronRight } from "lucide-react";

// Page component ko async banaya taake fetch kaam kare
const Page = async () => {
  // 1. API Fetching direct Page ke andar
  let CountryList = [];
  try {
    const response = await fetch(
      "https://test.esimwhitelabel.com/api/packages/country",
      { next: { revalidate: 3600 } },
    );
    const res = await response.json();
    // API structure ke mutabiq data nikaalna
    CountryList = res.blogs?.data || res.data || [];
  } catch (error) {
    console.error("Fetch error:", error);
  }

  return (
    <>
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
        <div className="absolute inset-0 bg-black/10" />
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
      <section className="max-w-7xl mx-auto px-6 sm:px-10 py-12 sm:py-16">
        <h1 className="font-semibold text-2xl sm:text-4xl lg:text-5xl">
          Pick Your Adventure
        </h1>

        <p className="mt-3 sm:mt-4 font-medium text-gray-700 text-sm sm:text-base">
          Find Yaalo eSIMs built for your route
        </p>

        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mt-8">
          <div className="border border-gray-200 rounded-2xl p-1.5 flex flex-wrap gap-2 w-full lg:w-fit">
            <button className="bg-yellow-400 font-medium px-4 sm:px-6 py-2 rounded-xl text-sm sm:text-base">
              Local
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-xl hover:bg-gray-100 text-sm sm:text-base transition-colors">
              Regional
            </button>
            <button className="px-4 sm:px-6 py-2 rounded-xl hover:bg-gray-100 text-sm sm:text-base transition-colors">
              Global
            </button>
          </div>

          <div className="relative w-full lg:w-[400px] h-12">
            <input
              type="text"
              placeholder="Where are you flying next?"
              className="w-full h-full pl-5 pr-12 border border-gray-200 rounded-2xl outline-none text-sm focus:border-yellow-400 transition-all"
            />
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>

        {/* CARDS GRID - DYNAMIC DATA */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-10">
          {CountryList.length > 0 ? (
            CountryList.map((item: any, i: number) => (
              <div
                key={i}
                className="border border-gray-100 rounded-2xl p-5 flex items-center justify-between
                hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white cursor-pointer group"
              >
                <div>
                  <img
                    // API se image le raha hai, fallback ke liye flagcdn use kiya
                    src={
                      item.image ||
                      `https://flagcdn.com/w80/${item.slug?.slice(0, 2).toLowerCase()}.png`
                    }
                    className="h-6 w-9 object-cover rounded-sm shadow-sm"
                    alt={item.name}
                  />
                  <p className="mt-3 text-sm font-bold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Starts at{" "}
                    <span className="text-black font-semibold">
                      {item.starting_price || "$5"}
                    </span>
                  </p>
                </div>

                <span className="w-9 h-9 bg-amber-200 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors">
                  <ChevronRight size={16} className="text-black" />
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Loading destinations...</p>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Page;
