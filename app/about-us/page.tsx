import React from "react";
import Header from "../components/header";
import { Headphones, Leaf, Wifi } from "lucide-react";
import Footer from "../components/Footer";

const Page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* HEADER - Fixed to top */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* HERO SECTION */}
        <div
          className="min-h-[50vh] md:min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative px-6 pt-20"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gray-200/40" />

          {/* HERO TEXT */}
          <div className="relative z-10 text-center max-w-5xl">
            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight">
              About Us - Yaalo Global Connectivity{" "}
              <br className="hidden md:block" /> eSIM
            </h1>

            <p className="text-base md:text-xl text-gray-800 mt-6 max-w-2xl mx-auto">
              Redefining Travel Connectivity with eSIM for the Modern World
            </p>
          </div>
        </div>

        {/* CONTENT SECTION 1 */}
        <div className="max-w-[1200px] mx-auto px-6 py-12 md:py-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-semibold text-black mb-6">
            Our Story, Our Spark
          </h2>
          <p className="text-gray-700 text-lg md:text-2xl leading-relaxed max-w-4xl">
            The frustrating situation of no connectivity whenever someone lands
            in a new country is the reason behind Yaalo. Counting and minimizing
            all the troubles, we find Yaalo as a forever connectivity solution.
          </p>
        </div>
      </div>

      {/* BIG STORY IMAGE */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-10 pb-12">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FaboutUs.f80216a4.png&w=1920&q=100"
          alt="About Us"
          className="w-full h-auto rounded-[2rem] shadow-xl object-cover"
        />
      </div>

      {/* LOCATION GRID */}
      <div className="max-w-[1200px] mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[
          {
            name: "New York",
            img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FamericanMen.5ec01f11.png&w=640&q=70",
          },
          {
            name: "Brazil",
            img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Falexandar.dd124e21.png&w=640&q=70",
          },
          {
            name: "Dubai",
            img: "https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fdubai.ac0318b8.png&w=640&q=70",
          },
        ].map((loc, i) => (
          <div
            key={i}
            className="relative w-full h-[350px] rounded-3xl overflow-hidden group"
          >
            <img
              src={loc.img}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-2xl font-bold">
              {loc.name}
            </div>
          </div>
        ))}
      </div>

      {/* TIMELINE SECTION */}
      {/* TIMELINE SECTION - Balanced Alignment */}
      <div className="max-w-[1100px] mx-auto px-6 py-16">
        <h2 className="font-bold text-3xl md:text-5xl text-center mb-16">
          Built for Simplicity, Powered by Freedom
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
          {/* LEFT IMAGE - Fixed for less empty space */}
          <div className="w-full lg:w-[45%]">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.03ff1c67.png&w=640&q=75"
              alt="Contact"
              className="w-full  max-w-sm lg:max-w-md mx-auto lg:mx-0 rounded-3xl object-contain"
            />
          </div>

          {/* RIGHT TIMELINE - Content shifted slightly left */}
          <div className="w-full lg:w-[55%] space-y-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {/* 2021 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src="https://yaalo.com/_next/static/media/android.b8a31fd9.svg"
                  alt="2021"
                  className="w-10 mb-3"
                />
                <h3 className="text-2xl font-bold text-yellow-500">2021</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Yaalo launched its first travel eSIM globally.
                </p>
              </div>

              {/* 2022 */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <img
                  src="https://yaalo.com/_next/static/media/ios.2fbf1f26.svg"
                  alt="2022"
                  className="w-10 mb-3"
                />
                <h3 className="text-2xl font-bold text-yellow-500">2022</h3>
                <p className="text-gray-600 mt-2 text-sm md:text-base">
                  Expanded across continents with affordable regional plans.
                </p>
              </div>
            </div>

            {/* 2026 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left pt-8 border-t border-gray-100">
              <img
                src="https://yaalo.com/_next/static/media/globe.2623edcb.svg"
                alt="2026"
                className="w-10 mb-3"
              />
              <h3 className="text-2xl font-bold text-yellow-500">2026</h3>
              <p className="text-gray-600 mt-2 max-w-sm text-sm md:text-base leading-relaxed">
                Making global connections as easy as unlocking your phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* LONG TEXT DESCRIPTION */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-[1000px] mx-auto px-6">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium">
            Yaalo was built on a simple belief: staying connected should never
            be a problem. Today, Yaalo supports everyday mobile use,
            international travel, and IoT applications with a dependable,
            scalable connectivity solution in 200+ destinations.
          </p>
        </div>
      </div>

      {/* FEATURES GRID */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Always With You, Wherever You Land
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expert 24/7 support across multiple time zones. Here is why we stand
            out:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Headphones className="text-yellow-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Good for the Planet</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              By removing plastic SIMs and packaging waste, Yaalo reduces your
              carbon footprint. Modern tech, mindful impact.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Leaf className="text-yellow-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Simple by Design</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Activation takes less time than ordering a coffee. Our app makes
              travel connectivity effortless and instant.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="bg-yellow-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
              <Wifi className="text-yellow-600 w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold mb-4">Corner to Corner</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              High-speed 5G coverage in more than 200 destinations. Stay
              connected whether you're in a city or remote area.
            </p>
          </div>
        </div>
      </div>

      {/* WORLD LOCATIONS IMAGE */}
      <div className="max-w-[1200px] mx-auto px-6 pb-20">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FworldLocations.41d4344e.png&w=1920&q=70"
          alt="World Locations"
          className="w-full h-auto rounded-[2rem] object-cover shadow-lg"
        />
      </div>

      <Footer />
    </>
  );
};

export default Page;
