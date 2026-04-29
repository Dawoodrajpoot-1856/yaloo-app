import React from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";

const page = () => {
  const faqs = [
    {
      q: "Can I make my device eSIM comaptible?",
      a: "Unfortunately, you can't just wave a magic wand to make your phone eSIM compatible. It’s a bit like asking if you can turn a toaster into a coffee maker – they’re just built differently. eSIM compatibility is determined by your device’s hardware and software, so if it wasn’t designed with an eSIM in mind, it’s a no go.",
    },
    {
      q: "How do i Know if my Mobile is compatible for eSIM?",
      a: "Checking if your phone is eSIM compatible? Just take a peek at the settings or specifications of your device. For iPhones, go to Settings → General → About and look for eSIM details. Or simply search online with your phone model to check if it supports eSIM — quick and easy!",
    },
    {
      q: "Does Iphone 12 support eSIM?",
      a: "Yes, the iPhone 12 series supports both physical nanoSIMs and eSIMs. So, you can use one for business and another for personal calls, or for traveling abroad.",
    },
    {
      q: "Can I use eSIM in any country?",
      a: "We support 200+ countries. Always check your selected plan before purchase.",
    },
  ];

  return (
    <>
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-4 mt-10 text-black">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">
            Yaalo eSIM Compatible Devices
          </h1>

          {/* SEARCH */}
          <div className="relative h-12 sm:h-14 w-full max-w-xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search compatible phones"
              className="w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-sm sm:text-base"
            />

            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400"
              size={18}
            />
          </div>
        </div>
      </div>
      <div className="ml-20 py-12">
        <h1 className="text-5xl font-semibold mb-6">
          Compatible Devices with eSIM
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-8 max-w-4xl">
          Since most iPhone users since iPhone 11 know about the importance of
          eSIM compatibility, many people are not aware of it. Well, we have
          narrowed down all the hardwork of finding or knowing about the eSIM
          device. Yaalo eSIM works with every device that has eSIM support
          mentioned in its specs.
        </p>

        <h3 className="text-3xl font-semibold mb-5">
          Every eSIM-Supported Mobile Info at One Place!
        </h3>

        <p className="text-lg text-gray-600 mb-14">
          If your device is on the following list, you’re all set to scan,
          install, and go!
        </p>

        <h1 className="text-5xl font-semibold mb-6">
          iPhones That Support eSIM
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-8 max-w-4xl">
          Apple is one of the primary supporters of eSIM. The latest iPhone or
          the old XR, when it comes to travellers, Yaalo is the option.
        </p>

        <div className="max-w-3xl bg-gray-50  border-gray-200 rounded-2xl p-6 ">
          💡 Buying a Yaalo eSIM for the USA? Remember, since the iPhone 14
          launched, every iPhone in the USA is only eSIM with no other slots.
        </div>
      </div>
      <div className="ml-20 mt-14">
        <div className="grid grid-cols-4 gap-6 max-w-6xl">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 16 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 15 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 14 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 13 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>
        </div>
      </div>

      <div className="ml-20 mt-24">
        <h1 className="text-5xl font-semibold mb-6">
          iPads with eSIM (Cellular Models)
        </h1>

        <p className="text-lg text-gray-600 leading-8 mb-8 max-w-4xl">
          Apple’s cellular iPads make travel work easier and are perfect for
          digital nomads and frequent flyers. With Yaalo eSIM, your iPad
          connects to local 2G, 3G, 4G, or 5G networks across 200+ destinations
          just by clicking.
        </p>

        <div className="max-w-4xl bg-gray-100 border border-gray-200 rounded-2xl p-6">
          💡 All iPad models with “Wi-Fi + Cellular” and “eSIM” or “Apple SIM”
          listed in specs are compatible. Setup takes minutes! Scan Yaalo’s QR
          code under Settings → Cellular → Add eSIM.
        </div>
      </div>
      <div className="ml-20 mt-14">
        <div className="grid grid-cols-4 gap-6 max-w-6xl">
          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPad Pro 13-inch M4</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">IPad Pro 11-inch M4</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 14 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-lg">
                <Check />
              </span>
              <h3 className="font-semibold text-xl">iPhone 13 Pro</h3>
            </div>
            <p className="text-gray-600">Smart Phones</p>
          </div>
        </div>
      </div>
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
      <Footer />
    </>
  );
};

export default page;
