import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ArrowUpRight, ArrowRight, Wifi, Laptop, Plane } from "lucide-react";
import Affiliate from "../components/affiliate";
import Faqs from "../components/Faqs";

const Page = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        {/* HEADER */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* HERO SECTION */}
        <div
          className="min-h-[80vh] md:h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative pt-20"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative z-10 text-center px-4 max-w-5xl">
            <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl text-black leading-tight">
              Join the Yaalo eSIM <br className="hidden md:block" /> Affiliate
              Program
            </h1>

            <h2 className="text-black mt-5 text-lg sm:text-xl font-medium">
              One of the Best eSIM Affiliate Programs for Travel Creators
            </h2>

            <p className="text-black mt-5 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Welcome to an honest way to earn money. Join, Promote, & Earn
              commission every time someone buys a global eSIM data plan through
              your link.
            </p>

            <div className="flex justify-center mt-8">
              <button className="group relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3">
                <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>
                <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white text-sm sm:text-base">
                  Join the Yaalo Affiliate Program
                </span>
                <span className="relative z-10 w-5 h-5 flex items-center justify-center">
                  <ArrowUpRight
                    size={18}
                    className="absolute transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-2"
                  />
                  <ArrowRight
                    size={18}
                    className="absolute opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-white"
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <Affiliate />

      {/* WHO CAN JOIN SECTION */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-[1230px] mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Who can be Yaalo Affiliate Partners?
          </h1>
          <p className="mt-3 text-gray-700 text-base md:text-lg">
            The Yaalo eSIM Affiliate Program works well for many different kinds
            of partners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* Card Items */}
            {[
              {
                icon: <Plane className="text-yellow-500 w-6 h-6" />,
                title: "Travel bloggers & destination guides",
                desc: "Recommend eSIMs as a more innovative alternative to roaming or local SIM cards.",
              },
              {
                icon: <i className="bi bi-youtube text-red-600 text-2xl"></i>,
                title: "YouTubers & content creators",
                desc: "Add value to travel videos, packing guides, and trip tutorials.",
              },
              {
                icon: <Laptop className="text-blue-500 w-6 h-6" />,
                title: "Tech & comparison websites",
                desc: "List Yaalo among the best international eSIM providers.",
              },
              {
                icon: <Wifi className="text-green-500 w-6 h-6" />,
                title: "Digital nomads & remote work communities",
                desc: "Share a practical tool your audience actually uses.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-2xl bg-white shadow-sm border border-transparent hover:border-yellow-400 transition"
              >
                <div className="mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center gap-6">
            <p className="text-gray-700 text-sm md:text-base flex-1">
              You don’t have to be a big brand. If your audience cares about
              travel, tech, convenience, or saving money, Yaalo eSIM fits.
            </p>
            <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3 whitespace-nowrap">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>
              <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                Join Now
              </span>
              <ArrowRight
                size={18}
                className="relative z-10 group-hover:text-white transition-colors"
              />
            </button>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS SECTION */}
      <div className="max-w-[1230px] mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">
          How the Affiliate Program Works?
        </h1>
        <p className="text-gray-700 mt-2 text-lg">
          Yaalo promotes simplicity because we know your time matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Step 01 */}
          <div className="relative h-[220px] rounded-3xl overflow-hidden group">
            <img
              src="https://yaalo.com/_next/static/media/step01.e93814ce.png"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              alt="step 1"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
            <div className="absolute bottom-4 left-4 bg-white text-black font-bold w-10 h-10 flex items-center justify-center rounded-xl">
              01
            </div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-white">
              <h3 className="text-xl font-bold">Sign Up</h3>
              <p className="text-sm opacity-90 mt-2">
                Create your account and get your unique link.
              </p>
            </div>
          </div>

          {/* Step 02 (Reversed for visual flow) */}
          <div className="relative h-[220px] rounded-3xl overflow-hidden group">
            <img
              src="https://yaalo.com/_next/static/media/step02.b6319b6e.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="step 2"
            />
            <div className="absolute bottom-4 left-4 bg-white text-black font-bold w-10 h-10 flex items-center justify-center rounded-xl">
              02
            </div>
            <div className="absolute inset-0 flex flex-col justify-center p-8 text-black">
              <h3 className="text-xl font-bold">Share Link</h3>
              <p className="text-sm mt-2">
                Promote Yaalo on your social media or blog.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SPECIAL SECTION (Visual Grids) */}
      <div className="bg-orange-50/50 py-16">
        <div className="max-w-[1230px] mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-6 items-start mb-10">
            <h1 className="text-4xl md:text-6xl font-semibold flex-1">
              What Makes Yaalo eSIM Special
            </h1>
            <div className="bg-orange-100 p-4 px-6 rounded-2xl font-semibold text-orange-800">
              And Easy to Recommend
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp1.e6fbf152.png&w=1920&q=100"
              className="md:col-span-2 w-full h-64 md:h-80 object-cover rounded-3xl"
            />
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp2.7ace9dc2.png&w=1920&q=100"
              className="w-full h-64 md:h-80 object-cover rounded-3xl"
            />
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp3.4daf2ecd.png&w=1920&q=100"
              className="w-full h-64 md:h-80 object-cover rounded-3xl"
            />
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp4.8bae76a0.png&w=1920&q=100"
              className="md:col-span-2 w-full h-64 md:h-80 object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="max-w-[1230px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to get started and earn?
            </h2>
            <p className="mt-4 text-gray-600">
              Fill out the form and our team will reach out in 24 hours.
            </p>
            <form className="mt-8 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border rounded-xl outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 border rounded-xl"
              />
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full p-4 border rounded-xl"
              ></textarea>
              <button className="w-full bg-yellow-400 py-4 rounded-xl font-bold hover:bg-black hover:text-white transition">
                Submit Application
              </button>
            </form>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FaffiliateFormImg.c04d0a77.png&w=1920&q=70"
              className="w-full rounded-3xl"
              alt="Affiliate"
            />
          </div>
        </div>
      </div>

      <Faqs />

      {/* BANNER SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 my-16">
        <div className="bg-orange-50 rounded-[40px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold">
              Sharing is Caring with Yaalo eSIM!
            </h1>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Partnering with Yaalo eSIM is about more than just earning. It's
              about sharing something helpful — a way to stay connected abroad
              without stress.
            </p>
            <button className="mt-8 px-10 py-4 bg-black text-white rounded-2xl hover:bg-yellow-400 hover:text-black transition-colors font-bold">
              Apply Now
            </button>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsharingbanner.4fd40424.png&w=1920&q=75"
              className="w-full"
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
