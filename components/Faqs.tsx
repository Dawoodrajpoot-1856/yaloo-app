"use client";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Faqs() {
  const t = useTranslations();

  const faqs = [
    {
      q: t("faqs.items.0.q"),
      a: t("faqs.items.0.a"),
    },
    {
      q: t("faqs.items.1.q"),
      a: t("faqs.items.1.a"),
    },
    {
      q: t("faqs.items.2.q"),
      a: t("faqs.items.2.a"),
    },
    {
      q: t("faqs.items.3.q"),
      a: t("faqs.items.3.a"),
    },
    {
      q: t("faqs.items.4.q"),
      a: t("faqs.items.4.a"),
    },
    {
      q: t("faqs.items.5.q"),
      a: t("faqs.items.5.a"),
    },
    {
      q: t("faqs.items.6.q"),
      a: t("faqs.items.6.a"),
    },
    {
      q: t("faqs.items.7.q"),
      a: t("faqs.items.7.a"),
    },
    {
      q: t("faqs.items.8.q"),
      a: t("faqs.items.8.a"),
    },
  ];

  return (
    <div className="bg-[#fafaf6] py-20">
      {/* HEADER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14">
        <h1 className="text-3xl sm:text-5xl font-medium leading-tight">
          {t("faqs.heading")}
        </h1>

        <p className="mt-5 text-gray-600 text-base sm:text-lg">
          {t("faqs.subHeading")}
        </p>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
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
