import { Search } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="w-full bg-black/10 backdrop-blur-[1px]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            {/* badge */}
            <div className="border border-gray-200 bg-white/50 p-2 rounded-2xl w-fit mx-auto text-xs sm:text-sm mt-10">
              Digital Freedom With 3-Step Activation
            </div>

            {/* heading */}
            <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mt-6 sm:mt-8 leading-tight">
              <span className="text-yellow-300">Yaalo eSIM</span> Roam the{" "}
              <br />
              World, Not the Fees
            </h1>

            {/* search */}
            <div className="relative h-12 sm:h-14 w-full max-w-xl mx-auto mt-6 sm:mt-8">
              <input
                type="text"
                placeholder="Where are you flying next?"
                className="w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-sm sm:text-base"
              />

              <Search
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
            </div>

            {/* description */}
            <p className="font-medium mt-6 sm:mt-8 text-gray-700 text-sm sm:text-base px-2">
              Your trips just got easier. With Yaalo eSIM, you land, connect,
              and get <br className="hidden sm:block" />
              instant 5G data in 200+ destinations at local rates.
            </p>

            {/* download */}
            <h2 className="font-semibold text-base sm:text-lg mt-8 sm:mt-10">
              Download the App Now
            </h2>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mt-6 mb-10">
              <a
                href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
                target="_blank"
              >
                <div className="bg-white rounded-3xl shadow-sm">
                  <img
                    src="https://yaalo.com/_next/static/media/g-play.8d7b1a46.svg"
                    className="h-12 sm:h-auto"
                  />
                </div>
              </a>

              <a href="https://apps.apple.com/app/id6753675047" target="_blank">
                <div className="bg-white rounded-3xl shadow-sm">
                  <img
                    src="https://yaalo.com/_next/static/media/apple-store.8102bba3.svg"
                    className="h-12 sm:h-auto"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="border border-gray-200 rounded-2xl p-4 text-center">
          <img
            className="mx-auto mb-3"
            src="https://yaalo.com/_next/static/media/earth.39b7df47.svg"
          />
          <h3 className="font-semibold">Local Rates</h3>
          <p className="text-sm text-gray-600 mt-2">
            Data plans focusing on travellers’ style, not roaming premiums.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4 text-center">
          <img
            className="mx-auto mb-3"
            src="https://yaalo.com/_next/static/media/clock.3a93caca.svg"
          />
          <h3 className="font-semibold">Plug & Get Online</h3>
          <p className="text-sm text-gray-600 mt-2">
            Instant connectivity with simple activation.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4 text-center">
          <img
            className="mx-auto mb-3"
            src="https://yaalo.com/_next/static/media/trophy.ed47fe48.svg"
          />
          <h3 className="font-semibold">Buy Online</h3>
          <p className="text-sm text-gray-600 mt-2">
            No SIM swapping required anywhere.
          </p>
        </div>

        <div className="border border-gray-200 rounded-2xl p-4 text-center">
          <img
            className="mx-auto mb-3"
            src="https://yaalo.com/_next/static/media/sim.332404b8.svg"
          />
          <h3 className="font-semibold">24/7 Support</h3>
          <p className="text-sm text-gray-600 mt-2">
            We’re always here when you need help.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
