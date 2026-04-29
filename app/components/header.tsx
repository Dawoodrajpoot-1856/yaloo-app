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
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";

const NavItem = ({
  icon: Icon,
  label,
  hoverColor = "text-yellow-400",
  shadowClass = "group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]",
}: any) => (
  <div
    className={`group relative h-7 cursor-pointer overflow-hidden list-none transition-all duration-300 ${shadowClass}`}
  >
    <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
      <div className="flex items-center gap-2 h-7 text-black">
        <Icon size={18} />
        <span className="font-semibold text-sm">{label}</span>
      </div>

      <div className="flex items-center gap-2 h-7 text-black">
        <Icon size={18} className={`${hoverColor}`} />
        <span className="font-semibold text-sm">{label}</span>
      </div>
    </div>
  </div>
);

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "pt-4 px-4 md:px-10 lg:px-20" : "pt-0 px-4 md:px-10 lg:px-20"
      }`}
    >
      <header
        className={`flex items-center justify-between w-full max-w-[1600px] mx-auto px-6 lg:px-12 py-5 bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl transition-all duration-500 ${
          scrolled ? "shadow-xl" : "shadow-none"
        }`}
      >
        {/* LOGO */}
        <Link href="/">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="logo"
            className="h-9 md:h-11"
          />
        </Link>

        {/* NAV */}
        <ul className="hidden lg:flex items-center gap-8 font-semibold">
          <Link href="/destinations">
            <NavItem
              icon={CardSim}
              label="Buy eSIM"
              hoverColor="text-blue-500"
            />
          </Link>

          <Link href="/contact-us">
            <NavItem
              icon={Mail}
              label="Contact Info"
              hoverColor="text-green-500"
            />
          </Link>

          <Link href="/affiliate-partner">
            <NavItem
              icon={Handshake}
              label="Affiliate Partner"
              hoverColor="text-red-500"
            />
          </Link>

          {/* MORE */}
          <li
            className="relative cursor-pointer group"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
          >
            <div className="h-7 overflow-hidden">
              <div className="relative transition-transform duration-500 group-hover:-translate-y-7">
                <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                  <span>More</span>
                  <ChevronDown size={16} />
                </div>

                <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                  <span>More</span>
                  <ChevronDown size={16} className="text-orange-500" />
                </div>
              </div>
            </div>

            {open && (
              <div className="absolute top-8 left-0 bg-white rounded-2xl p-3 w-60 border border-gray-300">
                {[
                  { label: "About", href: "/about-us" },
                  {
                    label: "eSIM compatible Phones",
                    href: "/esim-compatible-devices",
                  },
                  { label: "FAQ", href: "/faq" },
                  { label: "Blog", href: "/blog" },
                ].map((item) => (
                  <Link href={item.href} key={item.label}>
                    <div className="px-4 py-2 text-xs font-bold hover:bg-orange-50 rounded-xl">
                      {item.label}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/search">
            <NavItem icon={Search} label="Search" hoverColor="text-blue-400" />
          </Link>

          <Link href="/login">
            <NavItem icon={User} label="Login" hoverColor="text-indigo-500" />
          </Link>

          <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <Moon className="w-5 h-5 cursor-pointer" />

            <button className="flex items-center gap-1 font-semibold text-sm">
              <Languages size={18} />
              EN
              <ChevronDown size={14} />
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex lg:hidden items-center gap-4">
          <Search size={22} />
          <ShoppingCart size={22} />
          <Menu size={32} />
        </div>
      </header>
    </div>
  );
}
