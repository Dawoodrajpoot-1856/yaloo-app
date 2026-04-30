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

const NavItem = ({
  icon: Icon,
  label,
  hoverColor = "text-yellow-400",
  shadowClass = "group-hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]",
  glowColor = "rgba(250,204,21,0.25)",
}: {
  icon: any;
  label: string;
  hoverColor?: string;
  shadowClass?: string;
  glowColor?: string;
}) => (
  <li
    className={`group relative cursor-pointer list-none transition-all duration-300 ${shadowClass}`}
    style={{ position: "relative" }}
  >
    {/* Glow bg — lives OUTSIDE overflow-hidden wrapper */}
    <span
      className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `radial-gradient(ellipse 200% 450% at 50% 50%, ${glowColor} 15%, transparent 23%)`,
        inset: "-110% -80%",

        zIndex: 0,
      }}
      aria-hidden
    />

    {/* overflow-hidden wrapper handles the slide animation */}
    <div className="relative h-7 overflow-hidden z-10">
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
        {/* Default state */}
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon size={18} />
          <span className="font-semibold text-sm">{label}</span>
        </div>
        {/* Hover state (slides up into view) */}
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon
            size={18}
            className={`${hoverColor} transition-colors duration-300`}
          />
          <span className="font-semibold text-sm">{label}</span>
        </div>
      </div>
    </div>
  </li>
);

export default function Header() {
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
        className={`fixed top-0 left-0  w-full z-50 px-4 md:px-8 lg:px-14 transition-all duration-500 ${
          scrolled ? "pt-4" : "pt-0"
        }`}
      >
        <header
          className={`
    flex items-center justify-between
    px-6 lg:px-8 py-5
    transition-all duration-500
    ${
      scrolled
        ? "bg-white/30 backdrop-blur-xl border border-white/40  rounded-2xl scale-[0.98]"
        : "bg-transparent backdrop-blur-0 border-transparent shadow-none rounded-none scale-100"
    }
  `}
        >
          {/* Logo */}
          <Link href="/">
            <img
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
              alt="Yaalo Logo"
              className="h-8  ml-10 md:h-10"
            />
          </Link>

          {/* Main Navigation */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold">
            <Link href="/destinations">
              <NavItem
                icon={CardSim}
                label="Buy eSIM"
                hoverColor="text-blue-500"
                shadowClass="group-hover:drop-shadow-[0_0_5px_rgba(59,130,246,0.3)]"
                glowColor="rgba(59,130,246,0.3)"
              />
            </Link>
            <Link href="/contact-us">
              <NavItem
                icon={Mail}
                label="Contact Info"
                hoverColor="text-green-500"
                shadowClass="group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                glowColor="rgba(34,197,94,0.2)"
              />
            </Link>
            <Link href="/affiliate-partner">
              <NavItem
                icon={Handshake}
                label="Affiliate Partner"
                hoverColor="text-red-500"
                shadowClass="group-hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
                glowColor="rgba(239,68,68,0.18)"
              />
            </Link>

            {/* More dropdown */}
            <li
              className="relative cursor-pointer group list-none"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              {/* Glow bg */}
              <span
                className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(ellipse 200% 300% at 50% 50%, rgba(249,115,22,0.18) 0%, transparent 65%)",
                  inset: "-120% -80%",
                  borderRadius: "9999px",
                  zIndex: 0,
                }}
                aria-hidden
              />

              {/* Slide animation wrapper */}
              <div className="relative h-7 overflow-hidden z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                    <span>More</span>
                    <ChevronDown size={16} />
                  </div>
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                    <span>More</span>
                    <ChevronDown
                      size={16}
                      className="text-orange-500 transition-transform duration-500 group-hover:rotate-180"
                    />
                  </div>
                </div>
              </div>

              {open && (
                <div className="absolute top-8 left-0 bg-white rounded-2xl p-3 w-60 space-y-1 border border-gray-300 animate-in fade-in slide-in-from-top-2 duration-300 z-20">
                  {[
                    { label: "About", href: "/about-us" },
                    {
                      label: "eSIM Compatible Phones",
                      href: "/esim-compatible-devices",
                    },
                    { label: "FAQ", href: "/faq" },
                    { label: "Blog", href: "/blog" },
                  ].map((item) => (
                    <Link href={item.href} key={item.label}>
                      <div className="px-4 py-2 text-xs text-black hover:bg-orange-50 hover:text-orange-600 rounded-xl cursor-pointer transition-all font-bold">
                        {item.label}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Right Side Icons */}
          <div className="hidden lg:flex items-center gap-6">
            <NavItem
              icon={Search}
              label="Search"
              hoverColor="text-blue-400"
              shadowClass="group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
              glowColor="rgba(96,165,250,0.2)"
            />

            <Link href="/login">
              <NavItem
                icon={User}
                label="Login"
                hoverColor="text-indigo-500"
                shadowClass="group-hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]"
                glowColor="rgba(99,102,241,0.2)"
              />
            </Link>

            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              <Moon className="w-5 h-5 cursor-pointer hover:text-indigo-500 transition-colors" />
              <button className="flex items-center gap-1 hover:text-orange-500 transition-colors font-semibold text-sm">
                <Languages size={18} />
                EN
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-4">
            <Search size={22} className="cursor-pointer" />
            <ShoppingCart size={22} className="cursor-pointer" />
            <button onClick={() => setMobileMenu(true)}>
              <Menu size={32} />
            </button>
          </div>
        </header>
      </div>
    </>
  );
}
