"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="max-w-[1230px] mx-auto px-4 sm:px-6 mt-14 sm:mt-20 pb-10">
      {/* MAIN FOOTER */}
      <div className="bg-gray-200 rounded-[2.5rem] p-8 sm:p-10 lg:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {/* COL 1: LOGO + SOCIAL */}
        <div className="flex flex-col items-start">
          <Link href="/">
            <img
              className="h-10 sm:h-12"
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
              alt="Yaalo logo"
            />
          </Link>

          <h3 className="text-base sm:text-lg mt-8 font-bold text-gray-900">
            Follow us
          </h3>

          <div className="mt-4 space-y-4">
            {[
              { name: "Twitter", icon: "twitterx" },
              { name: "Instagram", icon: "instagram-new" },
              { name: "Facebook", icon: "facebook-new" },
              { name: "LinkedIn", icon: "linkedin" },
              { name: "Pinterest", icon: "pinterest" },
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group"
              >
                <div className="p-1.5 bg-white/50 rounded-lg group-hover:bg-white transition-all">
                  <img
                    src={`https://img.icons8.com/material-outlined/24/${item.icon}.png`}
                    className="w-4 h-4"
                    alt={item.name}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* COL 2: DESTINATIONS */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-6 text-gray-900">
            Popular Destinations
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {[
              "United States",
              "Canada",
              "United Kingdom",
              "Japan",
              "Indonesia",
              "Turkey",
              "France",
              "Spain",
            ].map((item, i) => (
              <Link
                key={i}
                href={`/destinations/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-xs sm:text-sm text-gray-600 hover:text-black hover:translate-x-1 transition-all block"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* COL 3: QUICK LINKS & SUPPORT */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-6 text-gray-900">
            Quick Links
          </h3>
          <div className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about-us" },
              { name: "Buy eSIM", path: "/destinations" },
              { name: "Affiliate Partner", path: "/affiliate-partner" },
              { name: "Blog", path: "/blog" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="block text-xs sm:text-sm text-gray-600 hover:text-black hover:translate-x-1 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <h3 className="font-bold text-base sm:text-lg mt-5 mb-6 text-gray-900">
            Support
          </h3>
          <div className="space-y-3">
            {[
              {
                name: "eSIM Compatible Phones",
                path: "/esim-compatible-devices",
              },
              { name: "FAQs", path: "/faq" },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.path}
                className="block text-xs sm:text-sm text-gray-600 hover:text-black hover:translate-x-1 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* COL 4: CONTACT & APP LINKS */}
        <div>
          <h3 className="font-bold text-base sm:text-lg mb-6 text-gray-900">
            Contact Info
          </h3>
          <div className="space-y-3 text-xs sm:text-sm text-gray-600 font-medium">
            <a
              href="tel:+17417392256"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400">P:</span> +1 741 739 2256
            </a>
            <a
              href="mailto:support@yaloo.com"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400">E:</span> support@yaloo.com
            </a>
          </div>

          <h3 className="font-bold text-base sm:text-lg mt-10 mb-5 text-gray-900">
            Orlando, FL
          </h3>
          <div className="flex gap-3 flex-wrap sm:flex-nowrap">
            <a href="#" className="hover:opacity-80 transition active:scale-95">
              <img
                src="https://yaalo.com/_next/static/media/playLink.1cd75698.svg"
                className="w-28 sm:w-32"
                alt="Google Play"
              />
            </a>
            <a href="#" className="hover:opacity-80 transition active:scale-95">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
                className="w-28 sm:w-32"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-50 border border-gray-100 rounded-[1.5rem] mt-6 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs sm:text-sm text-gray-500 font-medium">
          © 2026 Yaalo. All Rights Reserved
        </p>

        {/* PAYMENT ICONS */}
        <div className="flex items-center gap-4 flex-wrap justify-center bg-white/50 px-4 py-2 rounded-xl">
          {[
            "https://cdn-icons-png.flaticon.com/512/5977/5977576.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968299.png",
            "https://cdn-icons-png.flaticon.com/512/349/349221.png",
            "https://cdn-icons-png.flaticon.com/512/196/196561.png",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-4 sm:h-5 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
              alt="payment provider"
            />
          ))}
        </div>

        {/* LEGAL LINKS */}
        <div className="flex gap-6 text-xs sm:text-sm text-gray-500">
          {["Terms", "Privacy", "Refund"].map((item, i) => (
            <Link
              key={i}
              href={`/${item.toLowerCase()}`}
              className="hover:text-black font-medium transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
