import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ChevronDown } from "lucide-react";

const Page = () => {
  const faqs = [
    {
      q: "Do you offer refunds of money-back guarantees?",
      a: "Yes! We surely do. If our eSIM doesn't delight you, we make returns easy. Check out our simple refund policy and buy with confidence. 100% satisfaction guaranteed.",
    },
    {
      q: "How can I Reach your costomer support team?",
      a: "Reach us anytime via live chat or email at support@yaalo.com.",
    },
    {
      q: "Why choose Yaalo over other eSIM providers?",
      a: "Because Yaalo keeps things honest and human, our prepaid plans come with transparent pricing, high-speed data, and live support that actually responds 24/7. With our growing coverage and instant activation, Yaalo has become a trusted name for travellers, even locals who care about convenience, security, and cost-saving connectivity.",
    },
    {
      q: "What type of Yaalo eSIMs are available?",
      a: "Keeping in mind the globetrotters, the business lads, remote workers & digital nomads, a perfect range of Local, Regional, and Global eSIM plans is what you get. The plans are designed with data-only (Fixed and Unlimited) for short-termers with different styles of consuming data. But for people with heavy consumption and never missing a call or sms, Yaalo offers Data + Voice + SMS plans in selective destinations. Via Website or via Yaalo App, you can easily manage & top-up your eSIM profiles and plans.",
    },
  ];

  return (
    <>
      {/* HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* HERO SECTION - Adjusted height for mobile */}
      <div
        className="min-h-[50vh] md:h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative pt-20"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative z-10 text-center px-6">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-black">
            Contact Our Team
          </h1>
          <p className="text-black mt-4 text-base sm:text-xl max-w-2xl mx-auto">
            eSIM - Fast and Affordable mode of Connectivity
          </p>
        </div>
      </div>

      {/* CARDS SECTION */}
      <div className="max-w-[1220px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WhatsApp Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-amber-400">
          <img
            className="w-12 h-12 shrink-0"
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fwhatsapp.60558702.png&w=96&q=75"
            alt="WhatsApp"
          />
          <div>
            <h1 className="text-lg font-semibold">WhatsApp</h1>
            <p className="text-gray-600">+17817392256</p>
            <p className="text-sm text-gray-500">24/7 Online support</p>
          </div>
        </div>

        {/* Chat Card */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-6 md:p-8 rounded-2xl bg-white shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-yellow-300">
          <img
            className="w-12 h-12 shrink-0"
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FbubbleChat.bdc7685b.png&w=96&q=75"
            alt="Chat"
          />
          <div>
            <h1 className="text-lg font-semibold">Start Buying with Yaalo</h1>
            <p className="text-gray-600">
              Everything you need for connectivity
            </p>
            <p className="text-sm text-gray-500">24/7 Online support</p>
          </div>
        </div>
      </div>

      {/* EMAIL BUTTON */}
      <div className="max-w-[1220px] mx-auto px-4 pb-12">
        <div className="bg-yellow-400 text-center py-4 sm:py-5 rounded-2xl font-medium text-sm sm:text-base">
          For Business: <span className="font-bold">sales@yaalo.com</span>
        </div>
      </div>

      {/* IMAGE + FORM SECTION */}
      <div className="max-w-[1220px] mx-auto px-4 py-8 md:py-16 flex flex-col lg:flex-row items-start gap-12">
        {/* Left Image - Hidden on very small screens or resized */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.03ff1c67.png&w=640&q=75"
            alt="Contact"
            className="w-full max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-[60%]">
          <form className="bg-white p-4 sm:p-8 rounded-2xl shadow-sm space-y-5 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="John"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="tel"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
              />
            </div>

            {/* Captcha - Responsive width */}
            <div className="max-w-full w-64 p-3 border-gray-300 border rounded-xl bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="w-5 h-5 cursor-pointer" />
                <p className="text-sm">I'm not a robot</p>
              </div>
              <img
                className="w-6"
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="captcha"
              />
            </div>

            <button
              type="submit"
              className="group bg-yellow-400 text-black relative overflow-hidden w-full py-3.5 rounded-xl font-semibold transition-all"
            >
              <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 group-hover:h-full"></span>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                Submit
              </span>
            </button>

            <p className="text-gray-500 text-sm text-center mt-4">
              We look forward to hearing from you and helping resolve any
              problems.
            </p>
          </form>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="py-12 bg-gray-50/50">
        <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl text-center px-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 text-base sm:text-lg text-center mt-3 px-4">
          Find quick answers to common queries.
        </p>

        <div className="mt-10 mb-20 max-w-4xl mx-auto px-4">
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 cursor-pointer transition-all hover:border-amber-300"
              >
                <summary className="list-none flex items-center justify-between font-semibold text-base sm:text-lg">
                  <span className="pr-4">{item.q}</span>
                  <span className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 bg-amber-100 rounded-full flex items-center justify-center transition-transform group-open:rotate-180">
                    <ChevronDown size={20} className="text-amber-600" />
                  </span>
                </summary>
                <div className="overflow-hidden">
                  <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed pr-2 sm:pr-10">
                    {item.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Page;
