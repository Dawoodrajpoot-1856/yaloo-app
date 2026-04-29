import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { ChevronDown } from "lucide-react";

const page = () => {
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

      {/* HERO */}
      <div
        className="h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 text-center px-4">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl text-black">
            Contact Our Team
          </h1>

          <p className="text-black mt-4 text-lg sm:text-xl">
            eSIM - Fast and Affordable mode of Connectivity
          </p>
        </div>
      </div>

      {/* CARDS */}
      <div className="max-w-[1220px] mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* WhatsApp Card */}
        <div className="flex gap-4 p-8 max-w-4xl rounded-2xl bg-white shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-amber-400">
          <img
            className="w-12 h-12"
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
        <div className="flex gap-4 p-8 rounded-2xl bg-white shadow-sm border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-yellow-300">
          <img
            className="w-12 h-12"
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FbubbleChat.bdc7685b.png&w=96&q=75"
            alt="Chat"
          />

          <div>
            <h1 className="text-lg font-semibold">Start Buying with Yaalo</h1>
            <p className="text-gray-600">
              Everything you need for seamless connectivity
            </p>
            <p className="text-sm text-gray-500">24/7 Online support</p>
          </div>
        </div>
      </div>

      {/* EMAIL BUTTON */}
      <div className="max-w-[1220px]  mx-auto px-4 pb-12">
        <div className="bg-yellow-400 text-center py-5 rounded-2xl font-medium">
          For Business: sales@yaalo.com
        </div>
      </div>

      {/* IMAGE + FORM SECTION */}
      <div className="max-w-[1220px] mx-auto px-4 py-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fcontact.03ff1c67.png&w=640&q=75"
            alt="Contact"
            className="w-full max-w-lg"
          />
        </div>

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
      </div>
      <h1 className="font-semibold text-5xl text-center ">
        Frequently asked questions
      </h1>
      <p className="text-gray-600 text-lg leading-8 text-center  mt-2">
        Find quick answers to common queries.
      </p>
      <div className="mt-10">
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-5">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 cursor-pointer transition"
              >
                <summary className="list-none flex items-center justify-between font-semibold text-base sm:text-lg">
                  {item.q}

                  <span className="w-9 h-9 sm:w-10 sm:h-10 bg-amber-200 rounded-full flex items-center justify-center transition-transform group-open:rotate-180">
                    <ChevronDown size={20} />
                  </span>
                </summary>

                <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7 pr-2 sm:pr-10">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default page;
