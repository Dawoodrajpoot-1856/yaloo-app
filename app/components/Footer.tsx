"use client";

import React from "react";
import Link from "next/link";

const socialLinks = [
  { name: "Twitter", icon: "twitterx", href: "#" },
  { name: "Instagram", icon: "instagram-new", href: "#" },
  { name: "Facebook", icon: "facebook-new", href: "#" },
  { name: "LinkedIn", icon: "linkedin", href: "#" },
  { name: "Pinterest", icon: "pinterest", href: "#" },
];

const destinations = [
  "United States",
  "Canada",
  "United Kingdom",
  "Japan",
  "Indonesia",
  "Turkey",
  "France",
  "Spain",
];

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about-us" },
  { name: "Buy eSIM", path: "/destinations" },
  { name: "Affiliate Partner", path: "/affiliate-partner" },
  { name: "Blog", path: "/blog" },
];

const supportLinks = [
  {
    name: "eSIM Compatible Phones",
    path: "/esim-compatible-devices",
  },
  {
    name: "FAQs",
    path: "/faq",
  },
];

const paymentIcons = [
  "https://yaalo.com/_next/static/media/applePay.123km-kkjusoj.svg",
  "https://yaalo.com/_next/static/media/googlePay.0n3is1ts00unt.svg",
  "https://yaalo.com/_next/static/media/americanExpressPay.08-posjpft3a2.svg",
  "https://yaalo.com/_next/static/media/visaPay.0suj__9aszg59.svg",
  "https://yaalo.com/_next/static/media/masterPay.050lo5~g~s8ia.svg",
];

const Footer = () => {
  return (
    <footer className="max-w-[1440px] mx-auto px-4 sm:px-6 mt-14 sm:mt-20 pb-10">
      <div className="bg-gray-100 rounded-[2.5rem] p-6 sm:p-10 lg:p-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        <div className="flex flex-col items-start">
          <Link href="/">
            <img
              className="h-10 sm:h-12"
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.053tvj4_btjsj.svg"
              alt="Yaalo Logo"
            />
          </Link>

          <h3 className="text-lg sm:text-xl mt-8 font-bold text-gray-900">
            Follow us
          </h3>

          <div className="mt-4 space-y-4">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group"
              >
                <div className="p-1 bg-yellow-100 rounded-lg  transition-all">
                  <img
                    src={`https://img.icons8.com/material-outlined/24/${item.icon}.png`}
                    className="w-5 h-5 "
                    alt={item.name}
                  />
                </div>

                <span className="text-sm sm:text-base font-medium">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Destinations */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-6 text-gray-900">
            Popular Destinations
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {destinations.map((item) => (
              <Link
                key={item}
                href={`/destinations/${item.toLowerCase().replace(/ /g, "-")}`}
                className="text-sm sm:text-base text-gray-600 hover:text-black hover:translate-x-1 transition-all block"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links + Support */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-6 text-gray-900">
            Quick Links
          </h3>

          <div className="space-y-4">
            {quickLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-sm sm:text-base text-gray-600 hover:text-black hover:translate-x-1 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <h3 className="font-bold text-lg sm:text-xl mt-8 mb-6 text-gray-900">
            Support
          </h3>

          <div className="space-y-4">
            {supportLinks.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="block text-sm sm:text-base text-gray-600 hover:text-black hover:translate-x-1 transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg sm:text-xl mb-6 text-gray-900">
            Contact Info
          </h3>

          <div className="space-y-4 text-sm sm:text-base text-gray-600 font-medium">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-bold">L:</span>
              Yaalo LLC
            </div>

            <a
              href="tel:+17417392256"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400 font-bold">P:</span>
              +1 741 739 2256
            </a>

            <a
              href="mailto:support@yaalo.com"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400 font-bold">E:</span>
              support@yaalo.com
            </a>

            <a
              href="mailto:tickets@yaalo.com"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400 font-bold">T:</span>
              tickets@yaalo.com
            </a>

            <a
              href="mailto:sales@yaalo.com"
              className="hover:text-black flex items-center gap-2"
            >
              <span className="text-gray-400 font-bold">S:</span>
              sales@yaalo.com
            </a>

            <div className="flex items-center gap-2">
              <span className="text-gray-400 font-bold">O:</span>
              Orlando, FL
            </div>
          </div>

          <div className="flex gap-3 mt-8 flex-row">
            <a href="#" className="hover:opacity-80 transition active:scale-95">
              <img
                src="https://yaalo.com/_next/static/media/playLink.0hhnjxn3~uuaj.svg"
                className="w-32 sm:w-36"
                alt="Google Play"
              />
            </a>

            <a href="#" className="hover:opacity-80 transition active:scale-95">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.0jfeh4f2_t3bl.svg"
                className="w-32 sm:w-36"
                alt="App Store"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-100 border border-gray-100 rounded-[1.5rem] mt-6 p-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm sm:text-base text-gray-500 font-medium">
          © {new Date().getFullYear()} Yaalo. All Rights Reserved
        </p>

        <div className="flex items-center gap-5 flex-wrap justify-center px-6 py-3 rounded-xl">
          {paymentIcons.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Payment Provider"
              className="h-6 sm:h-7 transition-all"
            />
          ))}
        </div>

        <div className="flex gap-8 text-sm sm:text-base text-gray-500">
          {["Terms", "Privacy", "Refund"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="hover:text-black font-semibold transition-colors"
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
