import React from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";

const Page = () => {
  const faqs = [
    {
      q: "Can I make my device eSIM compatible?",
      a: "Unfortunately, you can't just wave a magic wand to make your phone eSIM compatible. It’s a bit like asking if you can turn a toaster into a coffee maker – they’re just built differently. eSIM compatibility is determined by your device’s hardware and software.",
    },
    {
      q: "How do I know if my Mobile is compatible for eSIM?",
      a: "For iPhones, go to Settings → General → About and look for eSIM details. Or simply search online with your phone model to check if it supports eSIM — quick and easy!",
    },
    {
      q: "Does iPhone 12 support eSIM?",
      a: "Yes, the iPhone 12 series supports both physical nanoSIMs and eSIMs.",
    },
    {
      q: "Can I use eSIM in any country?",
      a: "We support 200+ countries. Always check your selected plan before purchase.",
    },
  ];

  const devices = [
    { name: "iPhone 16 Pro", type: "Smart Phones" },
    { name: "iPhone 15 Pro", type: "Smart Phones" },
    { name: "iPhone 14 Pro", type: "Smart Phones" },
    { name: "iPhone 13 Pro", type: "Smart Phones" },
  ];

  const ipads = [
    { name: "iPad Pro 13-inch M4", type: "Tablets" },
    { name: "iPad Pro 11-inch M4", type: "Tablets" },
    { name: "iPad Air M2", type: "Tablets" },
    { name: "iPad Mini 6", type: "Tablets" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div
        className="h-[50vh] md:h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center pt-16"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/5" />
        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6 text-black">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-5xl mx-auto leading-tight">
            Yaalo eSIM Compatible <br className="hidden md:block" /> Devices
          </h1>

          {/* SEARCH BAR */}
          <div className="relative w-full max-w-lg mx-auto mt-8 group">
            <input
              type="text"
              placeholder="Search compatible phones..."
              className="w-full pl-6 pr-12 py-4 border border-gray-200 rounded-full bg-white shadow-lg outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
            />
            <Search
              className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-yellow-500"
              size={20}
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT WRAPPER */}
      <div className="max-w-[1230px] mx-auto px-6 py-12 md:py-20">
        {/* COMPATIBILITY INTRO */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Compatible Devices with eSIM
          </h2>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-10">
            Yaalo eSIM works with every device that has eSIM support mentioned
            in its specs. We have narrowed down the hard work for you right
            here.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Every eSIM-Supported Mobile Info at One Place!
          </h3>
          <p className="text-gray-600 text-lg">
            If your device is on the following list, you’re all set to scan,
            install, and go!
          </p>
        </div>

        {/* IPHONE SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            iPhones That Support eSIM
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Apple is a primary supporter of eSIM. From the latest iPhone 16 back
            to the XR, Yaalo has you covered.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6 mb-12 max-w-3xl">
            <p className="text-gray-800 font-medium">
              💡 Buying for USA? iPhone 14 and newer models in the USA are
              eSIM-only.
            </p>
          </div>

          {/* DEVICE GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                    <Check size={18} />
                  </div>
                  <h3 className="font-bold text-xl">{device.name}</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                  {device.type}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* IPAD SECTION */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            iPads with eSIM (Cellular)
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-3xl">
            Perfect for digital nomads. Yaalo connects your iPad to local
            high-speed networks across 200+ destinations.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-2xl p-6 mb-12 max-w-3xl">
            <p className="text-gray-800 font-medium">
              💡 Setup takes minutes! Settings → Cellular → Add eSIM.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ipads.map((device, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                    <Check size={18} />
                  </div>
                  <h3 className="font-bold text-xl">{device.name}</h3>
                </div>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
                  {device.type}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-12 border-t border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-2 cursor-pointer transition-all hover:border-yellow-400"
              >
                <summary className="list-none flex items-center justify-between p-4 font-semibold text-lg">
                  {item.q}
                  <span className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center transition-transform group-open:rotate-180">
                    <ChevronDown size={18} />
                  </span>
                </summary>
                <div className="px-4 pb-4 text-gray-600 leading-relaxed">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Page;
