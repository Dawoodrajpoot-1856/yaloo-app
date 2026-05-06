import React from "react";
import Header from "../components/header";
import { Headphones, Leaf, Wifi } from "lucide-react";
import Footer from "../components/Footer";

const Page = () => {
  const containerClass = "max-w-[1220px] mx-auto px-6";

  return (
    <>
      <div className="min-h-screen flex flex-col relative overflow-x-hidden">
        {/* HEADER */}
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
          <div className="absolute inset-0 bg-gray-200/40" />
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

        {/* STORY SECTION */}
        <div
          className={`${containerClass} py-12 md:py-24 text-center md:text-left`}
        >
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
      <div className={containerClass}>
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FaboutUs.f80216a4.png&w=1920&q=100"
          alt="About Us"
          className="w-full h-auto rounded-3xl shadow-xl object-cover"
        />
      </div>

      {/* LOCATION GRID */}
      <div
        className={`${containerClass} py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8`}
      >
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
            className="relative w-full h-[400px] rounded-[2rem] overflow-hidden group"
          >
            <img
              src={loc.img}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white text-3xl font-bold">
              {loc.name}
            </div>
          </div>
        ))}
      </div>

      {/* TIMELINE SECTION */}
      <div className={`${containerClass} py-20`}>
        <h2 className="font-bold text-3xl md:text-5xl text-center mb-16">
          Built for Simplicity, Powered by Freedom
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-[45%]">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.03ff1c67.png&w=640&q=75"
              alt="Contact"
              className="w-full max-w-md mx-auto lg:mx-0 rounded-[2.5rem] object-contain"
            />
          </div>
          <div className="w-full lg:w-[55%] space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="text-center md:text-left">
                <img
                  src="https://yaalo.com/_next/static/media/android.b8a31fd9.svg"
                  className="w-12 mb-4 mx-auto md:mx-0"
                  alt="2021"
                />
                <h3 className="text-2xl font-bold text-yellow-500">2021</h3>
                <p className="text-gray-600 mt-2">
                  Yaalo launched its first travel eSIM globally.
                </p>
              </div>
              <div className="text-center md:text-left">
                <img
                  src="https://yaalo.com/_next/static/media/ios.2fbf1f26.svg"
                  className="w-12 mb-4 mx-auto md:mx-0"
                  alt="2022"
                />
                <h3 className="text-2xl font-bold text-yellow-500">2022</h3>
                <p className="text-gray-600 mt-2">
                  Expanded across continents with affordable plans.
                </p>
              </div>
            </div>
            <div className="pt-10 border-t border-gray-100 text-center md:text-left">
              <img
                src="https://yaalo.com/_next/static/media/globe.2623edcb.svg"
                className="w-12 mb-4 mx-auto md:mx-0"
                alt="2026"
              />
              <h3 className="text-2xl font-bold text-yellow-500">2026</h3>
              <p className="text-gray-600 mt-2 max-w-lg">
                Making global connections as easy as unlocking your phone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* BELIEF DESCRIPTION (Moved up or kept as transition) */}
      <div className="bg-gray-50 py-16">
        <div className={containerClass}>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center font-medium max-w-4xl mx-auto">
            Yaalo was built on a simple belief: staying connected should never
            be a problem. As eSIM technology evolved, Yaalo focused on making
            global connectivity more reliable and easier to use across borders.
            By building on a single global eSIM network, Yaalo enables stable
            internet access and seamless device connectivity in 200+
            destinations. Today, Yaalo supports everyday mobile use,
            international travel, and IoT applications with a dependable,
            scalable connectivity solution
          </p>
        </div>
      </div>

      {/* FEATURES SECTION - Heading and Para at the START */}
      <div className={`${containerClass} py-24`}>
        <div className="text-center md:text-left mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Always With You, Wherever You Land
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl">
            From departure to return home, Yaalo supports you at every step. And
            if there is any issue, you get 24/7 expert support available for
            multiple time zones. Yaalo Stands out from all because:
          </p>
        </div>

        {/* Cards follow the heading */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Headphones />}
            title="Good for the Planet"
            desc="By removing plastic SIMs, Yaalo reduces waste."
          />
          <FeatureCard
            icon={<Leaf />}
            title="Simple by Design"
            desc="Activation takes less time than ordering a coffee."
          />
          <FeatureCard
            icon={<Wifi />}
            title="Corner to Corner"
            desc="High-speed 5G coverage in 200+ destinations."
          />
        </div>
      </div>

      {/* WORLD MAP */}
      <div className={`${containerClass} pb-24`}>
        <img
          src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FworldLocations.41d4344e.png&w=1920&q=70"
          className="w-full rounded-[3rem] shadow-2xl"
          alt="Map"
        />
      </div>

      <Footer />
    </>
  );
};

const FeatureCard = ({
  icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all">
    <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 text-yellow-600">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default Page;
