"use client";

import { ChevronDown } from "lucide-react";

export default function Faqs() {
  const faqs = [
    {
      q: "Is eSIM good for travel?",
      a: "Yes! Yaalo eSIM is built for travellers with 200+ destinations and no roaming issues.",
    },
    {
      q: "Which eSIM is best for travelling?",
      a: "Yaalo offers flexible data plans including local, regional and global options.",
    },
    {
      q: "Can you install eSIM before travelling?",
      a: "Yes, you can install it before travel and it activates once you land.",
    },
    {
      q: "Can I use eSIM in any country?",
      a: "We support 200+ countries. Always check your selected plan before purchase.",
    },
    {
      q: "Which devices are eSIM compatible?",
      a: "Most modern Apple, Samsung and Google devices support eSIM.",
    },
    {
      q: "How do I know if my eSIM is active?",
      a: "When mobile data works after landing, your eSIM is active.",
    },
    {
      q: "What if Yaalo eSIM can't work?",
      a: "Contact support, we’ll fix it or provide a refund if needed.",
    },
    {
      q: "Can I top up or extend a plan?",
      a: "Yes, you can extend directly from the Yaalo app instantly.",
    },
    {
      q: "Is my eSIM secure?",
      a: "Yes, we use encrypted secure profile delivery.",
    },
  ];

  return (
    <div className="bg-[#fafaf6] py-20">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14">
        <h1 className="text-3xl sm:text-5xl font-medium leading-tight">
          Any Ambiguity in Mind? These FAQs Will Help!
        </h1>

        <p className="mt-5 text-gray-600 text-base sm:text-lg">
          Find quick answers to common queries.
        </p>
      </section>

      {/* FAQ LIST */}
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
  );
}
