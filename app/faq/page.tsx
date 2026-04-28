import React from "react";
import Header from "../components/header";
import { ChevronDown } from "lucide-react";
import Footer from "../components/Footer";

const page = () => {
  const faqs = [
    {
      q: "What is Yaalo?",
      a: "Yaalo is a travel eSIM provider built for people who want to stay connected without the fuss of roaming or plastic SIM cards. We make mobile data simple. At Yaalo, we care about your connectivity needs and let you roam the world (200+ destinations) without roaming charges.",
    },
    {
      q: "WHat does Yaalo offers travellers?",
      a: "Yaalo offers a wide range of data-only (Fixed & Unlimited) and data + voice + SMS eSIM plans. After buying the plan, whenever you land at a destination, you are automatically connected to the local carrier network. You can install it in minutes, manage it from your phone, and top up anytime through the Yaalo app",
    },
    {
      q: "Why choose Yaalo over other eSIM providers?",
      a: "Because Yaalo keeps things honest and human, our prepaid plans come with transparent pricing, high-speed data, and live support that actually responds 24/7. With our growing coverage and instant activation, Yaalo has become a trusted name for travellers, even locals who care about convenience, security, and cost-saving connectivity.",
    },
  ];
  const faqs2 = [
    {
      q: "How much do Yaalo eSIM plan cost?",
      a: "Yaalo keeps it simple. There is a transparent and easy pay-as-you-go policy. Whatever the data requirements, you can choose from the range of plans. Since all plans are prepaid, there are no sudden charges or thefts from your account. You will get pure connectivity with no restrictions on hotspot sharing and tethering. You can read details under every eSIM plan.",
    },
    {
      q: "What is eSIM profile?",
      a: "An eSIM profile is your digital SIM identity. Like if you buy an eSIM for the USA, your plan information will be saved in the form of a profile. When the eSIM is activated, everything will work like a normal SIM does. As you are travelling internationally, you are still connected with local rates, not kilometre-long roaming charges.",
    },
    {
      q: "How can I purchase or active a Yaalo eSIM?",
      a: "Buying and activating your Yaalo eSIM takes less than a minute. Pick your destination, select a data plan, and you’ll receive a QR code instantly by email. Scan it from your device’s settings to install. Prefer manual setup? You can enter the details manually, too. All the steps are mentioned in the Yaalo Blogs.",
    },
    {
      q: "How are Yaalo eSIMs deliverd after purchase? ",
      a: "After selection of suited eSIM plan and paying for it, enter your details, and you will receive an email. This email has a QR code to scan for automatic installation and an SM- DP Address for manual installation. Whatever you prefer, perform the steps and get connected in minutes.",
    },
    {
      q: "What type of Yaalo eSIMs are available?",
      a: "Keeping in mind the globetrotters, the business lads, remote workers & digital nomads, a perfect range of Local, Regional, and Global eSIM plans is what you get. The plans are designed with data-only (Fixed and Unlimited) for short-termers with different styles of consuming data. But for people with heavy consumption and never missing a call or sms, Yaalo offers Data + Voice + SMS plans in selective destinations. Via Website or via Yaalo App, you can easily manage & top-up your eSIM profiles and plans.",
    },
    {
      q: "Can I reuse my Yaalo eSIM for future trip?",
      a: "Each Yaalo eSIM is linked to a specific plan and destination, so it can’t be reused for another trip. However, you can easily buy a new eSIM for your next destination in seconds through the Yaalo app or website.",
    },
  ];
  const faqs3 = [
    {
      q: "What is Yaalo?",
      a: "Yaalo is a travel eSIM provider built for people who want to stay connected without the fuss of roaming or plastic SIM cards. We make mobile data simple. At Yaalo, we care about your connectivity needs and let you roam the world (200+ destinations) without roaming charges.",
    },
    {
      q: "WHat does Yaalo offers travellers?",
      a: "Yaalo offers a wide range of data-only (Fixed & Unlimited) and data + voice + SMS eSIM plans. After buying the plan, whenever you land at a destination, you are automatically connected to the local carrier network. You can install it in minutes, manage it from your phone, and top up anytime through the Yaalo app",
    },
    {
      q: "Why choose Yaalo over other eSIM providers?",
      a: "Because Yaalo keeps things honest and human, our prepaid plans come with transparent pricing, high-speed data, and live support that actually responds 24/7. With our growing coverage and instant activation, Yaalo has become a trusted name for travellers, even locals who care about convenience, security, and cost-saving connectivity.",
    },
  ];
  return (
    <>
      <div className="min-h flex flex-col relative overflow-x-hidden">
        {/* HERO */}
        <div
          className="min-h-[70vh] bg-cover bg-center bg-no-repeat relative px-6 flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
          }}
        >
          <div>
            <Header />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-3xl md:text-6xl font-semibold text-black leading-tight">
              Frequently Asked Questions
            </h1>

            <p className="text-base md:text-xl text-gray-800 mt-4">
              Find quick answers to common queries
            </p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold mt-10 text-5xl text-center ">
        Tell me more about Yaalo
      </h1>
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
      <h1 className="font-semibold text-5xl text-center mt-10">
        Plans and Workings
      </h1>
      <div className="mt-10">
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-5">
            {faqs2.map((item, i) => (
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
      <h1 className="font-semibold text-5xl text-center mt-10">
        Tell me more about eSIMs
      </h1>
      <div className="mt-10">
        <section className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-4 sm:space-y-5">
            {faqs2.map((item, i) => (
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
