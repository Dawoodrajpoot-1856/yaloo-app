import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ArrowUpRight, ArrowRight, Wifi, Laptop, Plane } from "lucide-react";
import Affiliate from "../components/affiliate";
import Faqs from "../components/Faqs";

const page = () => {
  return (
    <>
      <div>
        {/* HEADER */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* HERO */}
        <div
          className="h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          <div className="absolute inset-0 bg-black/10" />

          <div className="relative mt-30 z-10 text-center px-4">
            <h1 className="font-semibold text-3xl sm:text-5xl md:text-6xl text-black leading-tight">
              Join the Yaalo eSIM <br /> Affiliate Program
            </h1>

            <h2 className="text-black mt-5 text-lg sm:text-xl font-medium">
              One of the Best eSIM Affiliate Programs for Travel Creators
            </h2>

            <p className="text-black mt-5 text-lg leading-8 max-w-3xl mx-auto">
              Welcome to an honest way to earn money. Join, Promote, & Earn
              commission every time someone buys a global eSIM data plan through
              your link.
            </p>

            {/* BUTTON */}
            <div className="flex justify-center mt-8">
              <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3">
                {/* hover fill */}
                <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>

                {/* text */}
                <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
                  Join the Yaalo Affiliate Program
                </span>

                {/* icon swap */}
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

      <div className="bg-gray-100 p-4">
        <div className="max-w-[1100px] mx-auto px-4 py-14 bg-gray-100">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Who can be Yaalo Affiliate Partners?
          </h1>

          <p className="mt-3 text-gray-700 text-sm md:text-lg">
            The Yaalo eSIM Affiliate Program works well for many different kinds
            of partners:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {/* CARD 1 */}
            <div className="flex gap-4  p-6 rounded-2xl bg-white shadow-md transition">
              <Plane className="text-yellow-500 w-6 h-6 mt-1" />
              <div>
                <h1 className="font-semibold text-lg">
                  Travel bloggers & destination guides
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Recommend eSIMs as a more innovative alternative to roaming or
                  local SIM cards.
                </p>
              </div>
            </div>

            <div className="flex gap-4  bg-white p-6 rounded-2xl shadow-md transition">
              <i className="bi bi-youtube"></i>{" "}
              <div>
                <h1 className="font-semibold text-lg">
                  YouTubers & content creators
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Add value to travel videos, packing guides, and trip
                  tutorials.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="flex gap-4 bg-white p-8 rounded-2xl shadow-md transition">
              <Laptop className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h1 className="font-semibold text-lg">
                  Tech & comparison websites
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  List Yaalo among the best international eSIM providers.
                </p>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="flex bg-white gap-4 p-8 rounded-2xl shadow-md transition">
              <Wifi className="text-green-500 w-6 h-6 mt-1" />
              <div>
                <h1 className="font-semibold text-lg">
                  Digital nomads & remote work communities
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Share a practical tool your audience actually uses.
                </p>
              </div>
            </div>
          </div>

          {/* FOOTER TEXT */}
          <p className="mt-10 text-gray-700 text-sm md:text-base">
            You don’t have to be a big brand. If your audience cares about
            travel, tech, convenience, or saving money, Yaalo eSIM fits.
          </p>
        </div>
        <div className="flex ml-20 mt-5 ">
          {" "}
          <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3">
            {/* hover fill */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>

            {/* text */}
            <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
              Join the Yaalo Affiliate Program
            </span>

            {/* icon swap */}
            <span className="relative z-10 w-5 h-5 flex ml-5">
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
      <h1 className=" ml-20 mt-10 text-2xl md:text-3xl font-semibold">
        How the Affiliate Program Works?
      </h1>

      <p className="text-gray-700 mt-2 ml-20">
        Yaalo promotes simplicity because we know your time matters.
      </p>

      <div className="flex ml-20 flex-col md:flex-row items-start gap-6 mt-8">
        <div className="mt-10 flex justify-center">
          <div
            className="relative w-[380px] md:w-[520px] h-[180px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "url(https://yaalo.com/_next/static/media/step01.e93814ce.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* STEP NUMBER (01) */}
            <div className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-lg shadow">
              01
            </div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute inset-0 flex flex-col justify-center p-6">
              <h1 className="text-black text-lg md:text-xl font-semibold">
                How the Affiliate Program Works?
              </h1>

              <p className="text-black text-sm mt-2">
                Yaalo promotes simplicity because we know your time matters.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mr-20 flex-col md:flex-row-reverse items-start gap-6 mt-8">
        <div className="mt-10 flex justify-center">
          <div
            className="relative w-[380px] md:w-[520px] h-[180px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "url(https://yaalo.com/_next/static/media/step02.b6319b6e.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* STEP NUMBER */}
            <div className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-lg shadow">
              02
            </div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute inset-0 flex flex-col justify-center p-6">
              <h1 className="text-black text-lg md:text-xl font-semibold">
                Install Your eSIM Easily
              </h1>

              <p className="text-black text-sm mt-2">
                Scan QR code and activate your eSIM within seconds.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex ml-20 flex-col md:flex-row items-start gap-6 mt-8">
        <div className="mt-10 flex justify-center">
          <div
            className="relative w-[380px] md:w-[520px] h-[180px] rounded-2xl overflow-hidden"
            style={{
              backgroundImage:
                "url(https://yaalo.com/_next/static/media/step04.bad8fffc.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* STEP NUMBER */}
            <div className="absolute bottom-3 left-3 bg-white text-black font-bold px-3 py-1 rounded-lg shadow">
              04
            </div>

            {/* TEXT OVER IMAGE */}
            <div className="absolute inset-0 flex flex-col justify-center p-6">
              <h1 className="text-black text-lg md:text-xl font-semibold">
                Start Earning Commissions
              </h1>

              <p className="text-black text-sm mt-2">
                Track your referrals and earn passive income easily.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center mt-5 ">
        {" "}
        <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-yellow-400 font-semibold flex items-center gap-3">
          {/* hover fill */}
          <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-500 group-hover:h-full"></span>

          {/* text */}
          <span className="relative z-10 text-black transition-colors duration-500 group-hover:text-white">
            Join the Yaalo Affiliate Program
          </span>

          {/* icon swap */}
          <span className="relative z-10 w-5 h-5 flex ml-5">
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
      <div className="bg-gray-100 mt-10 p-6">
        <div className="flex flex-row gap-10 ml-20">
          <h1 className="text-6xl font-semibold mt-10">
            What Makes Yaalo eSIM Special
          </h1>
          <div className="mt-10 font-semibold bg-orange-100 p-6 rounded-4xl">
            And Easy to Recommend
          </div>
        </div>
        <p className="max-w-6xl ml-20 font-medium text-black mt-3">
          People search for terms like “travel eSIM data plans,” “best eSIM for
          tourists,” or “international mobile data.” With <br /> Yaalo eSIM, you
          can confidently tell them:
        </p>
        <div className="flex mt-8 flex-row gap-4 ml-20">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp1.e6fbf152.png&w=1920&q=100"
            alt=""
            className="w-200 h-100 rounded-4xl"
          />
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp2.7ace9dc2.png&w=1920&q=100"
            alt=""
            className="w-100 h-100 rounded-4xl"
          />
        </div>
        <div className="flex mt-8 flex-row gap-4 ml-20">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp3.4daf2ecd.png&w=1920&q=100"
            alt=""
            className="w-100 h-90 rounded-4xl"
          />
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsp4.8bae76a0.png&w=1920&q=100"
            alt=""
            className="w-200 h-90 rounded-4xl"
          />
        </div>
        <p className="max-w-7xl mt-5 font-medium ml-20">
          You don’t have to be a big brand. If your audience cares about travel,
          tech, convenience, or saving money, <br /> Yaalo eSIM fits.
        </p>
      </div>
      <div className="bg-gray-100 p-6 mt-20">
        <div className="max-w-[900px] mx-auto mt-16 px-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Ready to get started and earn with Yaalo?
          </h1>

          <p className="mt-4 text-gray-600 text-sm md:text-lg leading-7">
            Just fill out the form, and our team will reach out to you within 24
            hours. We request you to save the filled information for later, as
            it is used for your Login Credentials.
          </p>
        </div>
      </div>
      {/* IMAGE + FORM SECTION */}
      <div className="max-w-6xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}

        {/* Right Form */}
        <div className="w-full lg:w-[60%]">
          <form className="bg-white p-6 rounded-2xl shadow-sm space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="border border-gray-300 rounded-xl px-5 py-3  outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl px-5 py-3  outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Message</label>
              <textarea className="w-full p-4  border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-yellow-400 resize-none" />
            </div>

            {/* Captcha */}
            <div className="w-60 p-3 border-gray-300 border rounded-xl bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5" />
                <p className="text-sm">I'm not a robot</p>
              </div>

              <img
                className="w-5 p-4"
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
              />
            </div>

            <button
              type="submit"
              className="group bg-yellow-400 text-black relative overflow-hidden w-full py-3 rounded-xl font-semibold  "
            >
              {/* Hover background from bottom */}
              <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 group-hover:h-full"></span>

              {/* Button text */}
              <span className="relative z-10 text-black transition-colors duration-300 group-hover:text-white">
                Submit
              </span>
            </button>
            <p className="text-gray-600 text-lg leading-8 max-w-xl mx-auto mt-2">
              We look forward to hearing from you and helping resolve any
              problems or questions you may have.
            </p>
          </form>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FaffiliateFormImg.c04d0a77.png&w=1920&q=70"
            alt="Contact"
            className="w-full max-w-lg"
          />
        </div>
      </div>
      <Faqs />
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 ml-20 w-298 bg-orange-50 px-6 md:px-16 py-10 rounded-4xl mt-10">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <h1 className="text-2xl md:text-4xl font-semibold text-gray-900">
            Sharing is Caring with Yaalo eSIM!
          </h1>

          <p className="mt-4 text-gray-700 text-sm md:text-lg leading-7">
            Partnering with Yaalo eSIM is about more than just earning. It's
            about sharing something helpful — a way to stay connected abroad
            without stress or high roaming fees. When your audience wins, you
            win.
          </p>

          <p className="mt-4 text-gray-700 text-sm md:text-lg leading-7">
            If your audience travels, works remotely, or values easy mobile
            connectivity, Yaalo eSIM is something you can recommend with
            confidence.
          </p>

          <button className="mt-6 hover:bg-black hover:text-white px-6 py-3 rounded-xl bg-orange-100 text-black transition">
            Apply now
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-[500px] flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsharingbanner.4fd40424.png&w=1920&q=75"
            alt=""
            className="w-full object-contain"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
