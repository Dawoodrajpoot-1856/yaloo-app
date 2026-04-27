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
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 ml-20 w-295 z-50 transition-all duration-400 ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <header
        className={`flex items-center justify-between px-6 py-6 
  bg-white/30 backdrop-blur-xl border border-white/40 
  shadow-lg mx-auto max-w-7xl rounded-2xl transition-all duration-500
  ${scrolled ? "scale-[0.98]" : "scale-100"}`}
      >
        <Link href="/">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="logo"
            className="h-10"
          />
        </Link>

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li className="flex items-center gap-1">
            <CardSim />
            Buy eSIM
          </li>
          <li className="flex items-center gap-1">
            <Mail />
            Contact Info
          </li>
          <li className="flex items-center gap-1">
            <Handshake size={18} /> Affiliate
          </li>

          <li
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer flex items-center gap-1"
          >
            More <ChevronDown size={16} />
            {open && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl p-3 w-60">
                <div className="p-2 hover:bg-gray-100 rounded">About</div>
                <div className="p-2 hover:bg-gray-100 rounded">
                  eSIM Compatible Phones
                </div>
                <div className="p-2 hover:bg-gray-100 rounded">FAQ</div>
                <div className="p-2 hover:bg-gray-100 rounded">Blog</div>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <div className="flex flex-row gap-2">
            <Search className="mt-1 hover:text-green-300" size={20} />
            <h4 className="font-semibold">Search</h4>
          </div>
          <Link href="/login">
            <div className="flex flex-row gap-2">
              <User className="mt-1 hover:text-blue-400" size={20} />
              <h4 className="font-semibold ">Login</h4>
            </div>
          </Link>
          <ShoppingCart size={20} />
          <Moon size={20} />
          <div className="flex items-center gap-3">
            {/* LANGUAGE BUTTON */}
            <div className="relative">
              <button className="flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-gray-100 transition">
                <Languages size={18} />
                <span className="text-sm font-medium">EN</span>
                <ChevronDown size={16} />
              </button>

              {/* DROPDOWN */}
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-xl shadow-lg hidden group-hover:block">
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  English
                </div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">Urdu</div>
                <div className="p-2 hover:bg-gray-100 cursor-pointer">
                  Spanish
                </div>
              </div>
            </div>
          </div>{" "}
        </div>
      </header>
    </div>
  );
};

export default Header;
