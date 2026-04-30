import React from "react";
import Header from "../components/header";
import { ChevronDown } from "lucide-react";
import Footer from "../components/Footer";

const Page = () => {
  const faqs = [
    {
      q: "What is Yaalo?",
      a: "Yaalo is a travel eSIM provider built for people who want to stay connected without the fuss of roaming or plastic SIM cards. We make mobile data simple. At Yaalo, we care about your connectivity needs and let you roam the world (200+ destinations) without roaming charges.",
    },
    {
      q: "What does Yaalo offers travellers?",
      a: "Yaalo offers a wide range of data-only (Fixed & Unlimited) and data + voice + SMS eSIM plans. After buying the plan, whenever you land at a destination, you are automatically connected to the local carrier network.",
    },
    {
      q: "Why choose Yaalo over other eSIM providers?",
      a: "Because Yaalo keeps things honest and human, our prepaid plans come with transparent pricing, high-speed data, and live support that actually responds 24/7.",
    },
  ];

  const faqs2 = [
    {
      q: "How much do Yaalo eSIM plan cost?",
      a: "Yaalo keeps it simple. There is a transparent and easy pay-as-you-go policy. Whatever the data requirements, you can choose from the range of plans.",
    },
    {
      q: "What is eSIM profile?",
      a: "An eSIM profile is your digital SIM identity. Like if you buy an eSIM for the USA, your plan information will be saved in the form of a profile.",
    },
    {
      q: "How can I purchase or active a Yaalo eSIM?",
      a: "Buying and activating your Yaalo eSIM takes less than a minute. Pick your destination, select a data plan, and you’ll receive a QR code instantly by email.",
    },
    {
      q: "How are Yaalo eSIMs deliverd after purchase? ",
      a: "After selection of suited eSIM plan and paying for it, enter your details, and you will receive an email. This email has a QR code to scan.",
    },
    {
      q: "What type of Yaalo eSIMs are available?",
      a: "Keeping in mind the globetrotters, the business lads, remote workers & digital nomads, a perfect range of Local, Regional, and Global eSIM plans is what you get.",
    },
    {
      q: "Can I reuse my Yaalo eSIM for future trip?",
      a: "Each Yaalo eSIM is linked to a specific plan and destination, so it can’t be reused for another trip.",
    },
  ];

  return (
    <>
      <div className="flex flex-col relative overflow-x-hidden">
        {/* HEADER - Fixed to avoid layout shifts */}
        <div className="fixed top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* HERO SECTION */}
        <div
          className="min-h-[50vh] md:min-h-[70vh] bg-cover bg-center bg-no-repeat relative px-6 flex items-center justify-center pt-20"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          {/* Overlay to improve text readability if needed */}
          <div className="absolute inset-0 bg-black/5 md:bg-transparent" />

          <div className="relative z-10 text-center max-w-5xl px-4">
            <h1 className="text-3xl md:text-6xl font-bold text-black leading-tight">
              Frequently Asked <br className="hidden md:block" /> Questions
            </h1>

            <p className="text-base md:text-xl text-gray-800 mt-4">
              Find quick answers to common queries
            </p>
          </div>
        </div>
      </div>

      {/* SECTION 1 */}
      <div className="py-12 md:py-16">
        <h2 className="font-bold text-3xl md:text-5xl text-center px-4 mb-10">
          Tell me more about Yaalo
        </h2>
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-6 cursor-pointer transition-all hover:border-amber-300"
              >
                <summary className="list-none flex items-center justify-between font-semibold text-base md:text-lg">
                  {item.q}
                  <span className="w-9 h-9 md:w-10 md:h-10 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center transition-transform group-open:rotate-180 ml-4">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed pr-2 md:pr-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 2 */}
      <div className="py-12 md:py-16 bg-gray-50/50">
        <h2 className="font-bold text-3xl md:text-5xl text-center px-4 mb-10">
          Plans and Workings
        </h2>
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs2.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-6 cursor-pointer transition-all hover:border-amber-300"
              >
                <summary className="list-none flex items-center justify-between font-semibold text-base md:text-lg">
                  {item.q}
                  <span className="w-9 h-9 md:w-10 md:h-10 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center transition-transform group-open:rotate-180 ml-4">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed pr-2 md:pr-12">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      </div>

      {/* SECTION 3 (Aapne same data use kiya tha, maine wahi rakha hai) */}
      <div className="py-12 md:py-20">
        <h2 className="font-bold text-3xl md:text-5xl text-center px-4 mb-10">
          Tell me more about eSIMs
        </h2>
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4">
            {faqs2.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-gray-200 rounded-2xl p-4 md:p-6 cursor-pointer transition-all hover:border-amber-300"
              >
                <summary className="list-none flex items-center justify-between font-semibold text-base md:text-lg">
                  {item.q}
                  <span className="w-9 h-9 md:w-10 md:h-10 bg-amber-200 rounded-full flex-shrink-0 flex items-center justify-center transition-transform group-open:rotate-180 ml-4">
                    <ChevronDown size={20} />
                  </span>
                </summary>
                <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed pr-2 md:pr-12">
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

export default Page;
