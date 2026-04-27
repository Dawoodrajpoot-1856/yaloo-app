"use client";

import {
  ChevronDown,
  Handshake,
  Languages,
  Moon,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-400 ${
        scrolled ? "pt-4" : "pt-0"
      }`}
    >
      <header
        className={`flex items-center justify-between px-6 py-6 bg-white shadow-md mx-auto max-w-7xl rounded-2xl transition-all duration-500 ${
          scrolled ? "scale-[0.98] shadow-lg" : "scale-100 shadow-sm"
        }`}
      >
        {/* LOGO */}
        <img
          src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
          alt="logo"
          className="h-10"
        />

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li className="flex items-center gap-1">Buy eSIM</li>
          <li className="flex items-center gap-1">Contact Info</li>
          <li className="flex items-center gap-1">
            <Handshake size={18} /> Affiliate
          </li>

          <li
            onClick={() => setOpen(!open)}
            className="relative cursor-pointer flex items-center gap-1"
          >
            More <ChevronDown size={16} />
            {open && (
              <div className="absolute top-10 left-0 bg-white shadow-lg rounded-xl p-3 w-40">
                <div className="p-2 hover:bg-gray-100 rounded">About</div>
                <div className="p-2 hover:bg-gray-100 rounded">FAQ</div>
                <div className="p-2 hover:bg-gray-100 rounded">Blog</div>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          <Search size={18} />
          <User size={18} />
          <ShoppingCart size={18} />
          <Moon size={18} />
          <Languages size={18} />
        </div>
      </header>
    </div>
  );
};

export default Header;
