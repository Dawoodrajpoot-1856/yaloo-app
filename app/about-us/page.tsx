import React from "react";
import Header from "../components/header";
import { Headphones, Leaf, Wifi } from "lucide-react";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* HERO */}
        <div
          className="min-h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative px-6"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gray-200/40" />

          {/* HEADER */}
          <div className="absolute top-0 left-0 w-full z-20">
            <Header />
          </div>

          {/* HERO TEXT */}
          <div className="relative z-10 text-center max-w-5xl">
            <h1 className="text-3xl md:text-6xl font-semibold text-black leading-tight">
              About Us - Yaalo Global Connectivity <br /> eSIM
            </h1>

            <p className="text-base md:text-xl text-gray-800 mt-4">
              Redefining Travel Connectivity with eSIM for the Modern World
            </p>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-6xl ml-20 mt-10">
          <h2 className="text-2xl md:text-4xl font-semibold text-black mb-6">
            Our Story, Our Spark
          </h2>

          <p className="text-gray-700 text-base md:text-xl leading-relaxed">
            The frustrating situation of no connectivity whenever someone lands
            in a new country is the reason behind Yaalo. Counting and minimizing
            all the troubles, we find Yaalo as a forever connectivity solution.
          </p>
        </div>
      </div>
      <div className="max-w-8xl mx-auto px-6 md:px-20 py-6">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FaboutUs.f80216a4.png&w=1920&q=100"
          alt="About Us"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* NEW YORK */}
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FamericanMen.5ec01f11.png&w=640&q=70"
            alt="New York"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            New York
          </div>
        </div>

        {/* BRAZIL */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Falexandar.dd124e21.png&w=640&q=70"
            alt="Brazil"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-2xl font-semibold">
            Brazil
          </div>
        </div>

        {/* DUBAI */}
        <div className="relative w-full h-[300px] rounded-2xl overflow-hidden">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fdubai.ac0318b8.png&w=640&q=70"
            alt="Dubai"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
            Dubai
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-5xl ml-20 mt-5">
        Built for Simplicity, Powered by Freedom
      </h1>
      <div className="max-w-7xl mx-auto px-10 py-16 flex flex-col md:flex-row gap-10 items-start">
        {/* LEFT IMAGE */}
        <div className="md:w-1/2 w-full">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.03ff1c67.png&w=640&q=75"
            alt="Contact"
            className="w-full h-150 rounded-xl object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-1/2 mt-30 w-full">
          {/* ROW 1 (2 ITEMS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://yaalo.com/_next/static/media/android.b8a31fd9.svg"
                alt=""
                className="w-10 mb-3"
              />
              <h1 className="text-xl font-semibold">2021</h1>
              <p className="text-gray-600">
                In 2021, Yaalo launched its first <br /> travel eSIM
              </p>
            </div>

            <div>
              <img
                src="https://yaalo.com/_next/static/media/ios.2fbf1f26.svg"
                alt=""
                className="w-10 mb-3"
              />
              <h1 className="text-xl font-semibold">2022</h1>
              <p className="text-gray-600">
                By 2022, we expanded across <br />
                continents, with affordable <br />
                regional data plans
              </p>
            </div>
          </div>

          {/* ROW 2 (1 ITEM) */}
          <div className="mt-10">
            <img
              src="https://yaalo.com/_next/static/media/globe.2623edcb.svg"
              alt=""
              className="w-10 mb-3"
            />
            <h1 className="text-xl font-semibold">2026</h1>
            <p className="text-gray-600">
              Today, Yaalo is making global <br />
              connections as easy as unlocking <br />
              your phone.
            </p>
          </div>
        </div>
      </div>
      <p className="max-w-5xl mx-auto px-6 md:px-0 font-medium text-lg md:text-xl mt-6 text-gray-700 leading-relaxed">
        Yaalo was built on a simple belief: staying connected should never be a
        problem. As eSIM technology evolved, Yaalo focused on making global
        connectivity more reliable and easier to use across borders. By building
        on a single global eSIM network, Yaalo enables stable internet access
        and seamless device connectivity in 200+ destinations. Today, Yaalo
        supports everyday mobile use, international travel, and IoT applications
        with a dependable, scalable connectivity solution.
      </p>
      <div className="max-w-6xl ml-20 mt-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-gray-900 mb-4">
          Always With You, Wherever You Land
        </h1>

        <p className="text-gray-700 text-base md:text-xl leading-relaxed">
          From departure to return home, Yaalo supports you at every step. And
          if there is any issue, you get 24/7 expert support available for
          multiple time zones. Yaalo stands out from all because:
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CARD 1 */}
        <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4">
          <Headphones className="text-yellow-400 w-9 h-9" />

          <h1 className="text-xl font-semibold text-gray-900">
            Good for You, Kind to the Planet
          </h1>

          <p className="text-gray-700 leading-relaxed">
            We believe in smarter travel that doesn’t cost the Earth. By
            removing plastic SIMs and packaging waste, Yaalo reduces your carbon
            footprint. It's proof that modern tech can still be mindful.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4">
          <Leaf className="text-yellow-400 w-9 h-9" />

          <h1 className="text-xl font-semibold text-gray-900">
            Simple by Design
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Forget stores and sign-ups. With Yaalo, buying and activating your
            eSIM takes less time than ordering a coffee. Yaalo App (iOS,
            Android) is a more convenient version of our remarkable services.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 space-y-4">
          <Wifi className="text-yellow-400 w-9 h-9" />

          <h1 className="text-xl font-semibold text-gray-900">
            Connected From Corner to Corner
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Travelers can be anywhere, but connectivity is essential wherever
            they go. Yaalo ensures high-speed 2G/3G/4G/5G coverage in more than
            200 destinations. Select from Local, Regional, or Global plans.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto ">
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FworldLocations.41d4344e.png&w=1920&q=70"
          alt="World Locations"
          className="w-full h-auto rounded-2xl object-cover"
        />
      </div>
      <Footer />
    </>
  );
};

export default page;
