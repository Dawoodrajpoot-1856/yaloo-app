import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      {/* HERO */}
      <div
        className="h-[70vh] brightness-110 bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* FIXED HEADER */}

        {/* Content */}
        <div className="relative z-10 w-full text-center px-4">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl mt-6 leading-tight text-black">
            Roam the World With Yaalo - Seamless Connectivity Worldwide!
          </h1>

          <div className="text-black mt-4 p-2 rounded-2xl text-xl w-fit mx-auto sm:text-lg">
            Buying an eSIM online was never that easy before
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default page;
