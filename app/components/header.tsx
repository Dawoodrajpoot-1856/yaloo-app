"use client";

import {
  CardSim,
  ChevronDown,
  Handshake,
  Languages,
  Mail,
  Moon,
  Search,
  ShoppingCart,
  User,
  Menu,
  X,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-8 lg:px-14 ${
          scrolled ? "pt-4" : "pt-0"
        }`}
      >
        <header
          className={`flex items-center justify-between px-5 lg:px-8 py-5
          bg-white/30 backdrop-blur-xl border border-white/40
          shadow-lg rounded-3xl transition-all duration-500
          ${scrolled ? "scale-[0.98]" : "scale-100"}`}
        >
          {/* Logo */}
          <Link href="/">
            <img
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
              alt="logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6 font-semibold">
            <li className="flex items-center gap-2">
              <CardSim size={18} />
              Buy eSIM
            </li>

            <li className="flex items-center gap-2">
              <Mail size={18} />
              Contact Info
            </li>

            <li className="flex items-center gap-2">
              <Handshake size={18} />
              Affiliate
            </li>

            <li
              onClick={() => setOpen(!open)}
              className="relative cursor-pointer flex items-center gap-1"
            >
              More <ChevronDown size={16} />
              {open && (
                <div className="absolute top-12 left-0 bg-white shadow-xl rounded-2xl p-3 w-60">
                  <div className="p-2 hover:bg-gray-100 rounded">About</div>
                  <div className="p-2 hover:bg-gray-100 rounded">
                    Compatible Phones
                  </div>
                  <div className="p-2 hover:bg-gray-100 rounded">FAQ</div>
                  <div className="p-2 hover:bg-gray-100 rounded">Blog</div>
                </div>
              )}
            </li>
          </ul>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Search size={20} />
              <span>Search</span>
            </div>

            <Link href="/login">
              <div className="flex items-center gap-2">
                <User size={20} />
                <span>Login</span>
              </div>
            </Link>

            <ShoppingCart size={20} />
            <Moon size={20} />

            <button className="flex items-center gap-1">
              <Languages size={18} />
              EN
              <ChevronDown size={16} />
            </button>
          </div>

          {/* Mobile Right */}
          <div className="flex lg:hidden items-center gap-4">
            <Search size={20} />
            <ShoppingCart size={20} />

            <button onClick={() => setMobileMenu(true)}>
              <Menu size={30} />
            </button>
          </div>
        </header>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[90] transition-all duration-500 ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      {/* Bottom Slide Mobile Menu */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-white z-[100]
        rounded-t-[35px] p-8 shadow-2xl transition-all duration-500
        ${mobileMenu ? "translate-y-0" : "translate-y-full"}`}
      >
        <div className="flex justify-between mb-8">
          <h2 className="text-2xl font-bold">Menu</h2>

          <button onClick={() => setMobileMenu(false)}>
            <X size={30} />
          </button>
        </div>

        <div className="space-y-6 text-lg font-semibold">
          <div className="flex items-center gap-3">
            <CardSim />
            Buy eSIM
          </div>

          <div className="flex items-center gap-3">
            <Mail />
            Contact Info
          </div>

          <div className="flex items-center gap-3">
            <Handshake />
            Affiliate
          </div>

          <div className="flex items-center gap-3">
            <User />
            Login
          </div>

          <div className="flex items-center gap-3">
            <Languages />
            Language
          </div>

          <div className="flex items-center gap-3">
            <Moon />
            Dark Mode
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
