import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1240px] min-h-[70vh] mx-auto px-4 sm:px-6 mt-20">
      {/* MAIN FOOTER */}
      <div className="bg-gray-50 rounded-3xl p-8 sm:p-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
        {/* LOGO + SOCIAL */}
        <div className="flex flex-col mr-20 h-full">
          <img
            className="h-14"
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="logo"
          />

          <h1 className="text-lg mt-6 font-semibold">Follow us</h1>

          <div className="mt-4 space-y-3 flex flex-col">
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
                className="flex items-center gap-3 text-gray-700 hover:text-black transition"
              >
                <img
                  src={`https://img.icons8.com/material-outlined/24/${item.icon}.png`}
                  className="w-5 h-5"
                  alt={item.name}
                />
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* DESTINATIONS */}
        <div className="flex flex-col h-full">
          <h1 className="font-semibold text-lg mb-4">Popular Destinations</h1>

          <div className="space-y-2">
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
              <a
                key={i}
                href="#"
                className="block text-sm text-gray-600 hover:text-black transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div className="flex flex-col h-full">
          <h1 className="font-semibold text-lg mb-4">Quick Links</h1>

          <div className="space-y-2">
            {["Home", "About Us", "Buy eSIM", "Affiliate Partner", "Blog"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-sm text-gray-600 hover:text-black transition"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <h1 className="font-semibold text-lg mt-8 mb-4">Support</h1>

          <div className="space-y-2">
            {["eSIM Compatible Phones", "FAQs"].map((item, i) => (
              <a
                key={i}
                href="#"
                className="block text-sm text-gray-600 hover:text-black transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div className="flex flex-col h-full">
          <h1 className="font-semibold text-lg mb-4">Contact Info</h1>

          <div className="space-y-2 text-sm text-gray-600">
            <a href="tel:+17417392256" className="hover:text-black block">
              +1 741 739 2256
            </a>

            <a
              href="mailto:support@yaloo.com"
              className="hover:text-black block"
            >
              support@yaloo.com
            </a>

            <a
              href="mailto:tickets@yaloo.com"
              className="hover:text-black block"
            >
              tickets@yaloo.com
            </a>

            <a href="mailto:sales@yaloo.com" className="hover:text-black block">
              sales@yaloo.com
            </a>
          </div>

          <h1 className="font-semibold text-lg mt-6 mb-3">Orlando, FL</h1>

          <div className="flex gap-4 flex-wrap">
            <a href="https://play.google.com">
              <img
                src="https://yaalo.com/_next/static/media/playLink.1cd75698.svg"
                className="w-28 hover:scale-105 transition"
                alt="play store"
              />
            </a>

            <a href="https://www.apple.com/app-store/">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
                className="w-28 hover:scale-105 transition"
                alt="app store"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 rounded-3xl mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">
          © 2026 Yaalo. All Rights Reserved
        </p>

        {/* PAYMENT ICONS */}
        <div className="flex items-center gap-3">
          {[
            "https://cdn-icons-png.flaticon.com/512/5977/5977576.png",
            "https://cdn-icons-png.flaticon.com/512/5968/5968299.png",
            "https://cdn-icons-png.flaticon.com/512/349/349221.png",
            "https://cdn-icons-png.flaticon.com/512/196/196561.png",
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-6 object-contain"
              alt="payment"
            />
          ))}
        </div>

        <div className="flex gap-4 text-sm text-gray-600">
          {["Terms", "Privacy", "Refund"].map((item, i) => (
            <a key={i} href="#" className="hover:text-black transition">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
