import React from "react";

const App = () => {
  return (
    <div className="bg-[#393a36] w-full max-w-[1200px] mx-auto mb-10 rounded-[40px] px-6 md:px-16 py-12 md:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center lg:text-left">
          {/* badge */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
            <img
              className="h-5"
              src="https://yaalo.com/_next/static/media/5Star.a8d15048.svg"
              alt=""
            />
            <h1 className="text-white text-sm md:text-base font-medium">
              50000+ Downloads
            </h1>
          </div>

          {/* heading */}
          <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight">
            Download The <br />
            App Now
          </h1>

          {/* paragraph */}
          <p className="text-white mt-6 text-sm md:text-lg leading-6">
            To use virtual number & international calling features. Buy, setup
            and manage your eSIMs easily.
          </p>

          {/* buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
            <a href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo">
              <img
                src="https://yaalo.com/_next/static/media/playLink.1cd75698.svg"
                alt="Google Play"
                className="h-12 hover:scale-105 transition"
              />
            </a>

            <a href="https://apps.apple.com/app/id6753675047">
              <img
                src="https://yaalo.com/_next/static/media/appleLink.9011278c.svg"
                alt="App Store"
                className="h-12 hover:scale-105 transition"
              />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FappInstallSS.729e81b9.png&w=1920&q=75"
            alt="App preview"
            className="w-full max-w-[500px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
