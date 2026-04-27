import React from "react";

const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto px-4 sm:px-6 mt-16">
      {/* MAIN FOOTER */}
      <div className="bg-gray-100 rounded-3xl p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO + SOCIAL */}
        <div>
          <img
            className="h-14"
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt=""
          />

          <h1 className="text-lg mt-4 font-medium">Follow us</h1>

          <div className="mt-3 space-y-3">
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
                className="flex items-center gap-2 text-black hover:opacity-80"
              >
                <img
                  src={`https://img.icons8.com/material-outlined/24/${item.icon}.png`}
                  className="w-5 h-5"
                />
                <span className="text-sm">{item.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* DESTINATIONS */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Popular Destinations</h1>

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
                className="block text-sm text-gray-600 hover:text-black"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* LINKS */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Links</h1>

          <div className="space-y-2">
            {["Home", "About Us", "Buy eSIM", "Affiliate Partner", "Blog"].map(
              (item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block text-sm text-gray-600 hover:text-black"
                >
                  {item}
                </a>
              ),
            )}
          </div>

          <h1 className="font-semibold text-lg mt-6 mb-3">Support</h1>

          <div className="space-y-2">
            <a className="block text-sm text-gray-600 hover:text-black">
              eSIM Compatible Phones
            </a>
            <a className="block text-sm text-gray-600 hover:text-black">FAQs</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h1 className="font-semibold text-lg mb-3">Contact Info</h1>

          <div className="space-y-2 text-sm">
            <a
              href="tel:+17417392256"
              className="text-gray-600 hover:text-black"
            >
              +1 741 739 2256
            </a>

            <a
              href="mailto:support@yaloo.com"
              className="block text-gray-600 hover:text-black"
            >
              support@yaloo.com
            </a>

            <a
              href="mailto:tickets@yaloo.com"
              className="block text-gray-600 hover:text-black"
            >
              tickets@yaloo.com
            </a>

            <a
              href="mailto:sales@yaloo.com"
              className="block text-gray-600 hover:text-black"
            >
              sales@yaloo.com
            </a>
          </div>

          <h1 className="font-semibold text-lg mt-5 mb-2">Orlando, FL</h1>

          <div className="flex gap-4 mt-2 flex-wrap">
            <a href="https://play.google.com">
              <img
                src="https://yaalo.com/_next/static/media/playLink.1cd75698.svg"
                className="w-28"
              />
            </a>

            <a href="https://www.apple.com/app-store/">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
                className="w-28"
              />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gray-100 rounded-3xl mt-6 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center md:text-left">
          © 2026 Yaalo. All Rights Reserved
        </p>

        <div className="flex items-center gap-3">
          <img
            src="https://yaalo.com/_next/static/media/applePay.ad4c59e4.svg"
            className="h-6"
          />
          <img
            src="https://yaalo.com/_next/static/media/googlePay.5b97f311.svg"
            className="h-6"
          />
          <img
            src="https://yaalo.com/_next/static/media/visaPay.cbb93ca2.svg"
            className="h-6"
          />
          <img
            src="https://yaalo.com/_next/static/media/masterPay.062679df.svg"
            className="h-6"
          />
        </div>

        <div className="flex gap-4 text-sm text-gray-600">
          <a className="hover:text-black">Terms</a>
          <a className="hover:text-black">Privacy</a>
          <a className="hover:text-black">Refund</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
