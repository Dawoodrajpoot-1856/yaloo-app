"use client";

import {
  CardSim,
  ChevronDown,
  Handshake,
  Mail,
  Search,
  ShoppingCart, // Wapis add kiya
  User,
  Menu,
  X,
  LogIn,
  Globe,
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
  >
    <span
      className="pointer-events-none absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{
        background: `radial-gradient(ellipse 200% 450% at 50% 50%, ${glowColor} 15%, transparent 23%)`,
        inset: "-110% -80%",
        zIndex: 0,
      }}
      aria-hidden
    />
    <div className="relative h-7 overflow-hidden z-10">
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon size={18} />
          <span className="font-semibold text-sm">{label}</span>
        </div>
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
  const [cartOpen, setCartOpen] = useState(false); // Cart state
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Scroll lock jab cart ya menu open ho
    document.body.style.overflow = mobileMenu || cartOpen ? "hidden" : "unset";
  }, [mobileMenu, cartOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center
    ${scrolled ? "pt-4 px-4 lg:px-16" : "pt-0 px-0 lg:px-16"}`}
      >
        <header
          className={`
      w-full max-w-[1200px] flex items-center justify-between
      px-6 lg:px-10 py-4
      transition-all duration-500
      ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl"
          : "bg-transparent backdrop-blur-0 border-transparent shadow-none rounded-none"
      }
    `}
        >
          {/* Logo */}
          <Link href="/">
            <img
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
              alt="Yaalo Logo"
              className="h-8 md:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 font-semibold">
            <Link href="/destinations">
              <NavItem
                icon={CardSim}
                label="Buy eSIM"
                hoverColor="text-blue-500"
                glowColor="rgba(59,130,246,0.3)"
              />
            </Link>
            <Link href="/contact-us">
              <NavItem
                icon={Mail}
                label="Contact Info"
                hoverColor="text-green-500"
                glowColor="rgba(34,197,94,0.2)"
              />
            </Link>
            <Link href="/affiliate-partner">
              <NavItem
                icon={Handshake}
                label="Affiliate Partner"
                hoverColor="text-red-500"
                glowColor="rgba(239,68,68,0.18)"
              />
            </Link>

            {/* More Dropdown */}
            <li
              className="relative cursor-pointer group list-none"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <div className="relative h-7 overflow-hidden z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.6)]">
                <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                    <span>More</span> <ChevronDown size={16} />
                  </div>
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm">
                    <span>More</span>{" "}
                    <ChevronDown
                      size={16}
                      className="text-orange-500 rotate-180"
                    />
                  </div>
                </div>
              </div>
              {open && (
                <div className="absolute top-8 left-0 bg-white rounded-2xl p-3 w-60 space-y-1 border border-gray-100 shadow-xl z-20">
                  {[
                    { name: "About Us", link: "/about-us" },
                    {
                      name: "eSIM Compatible Phones",
                      link: "/esim-compatible-devices",
                    },
                    { name: "FAQ", link: "/faq" },
                    { name: "Blog", link: "/blog" },
                  ].map((item) => (
                    <a
                      href={item.link}
                      key={item.name}
                      className="block px-4 py-2 text-xs text-black hover:bg-orange-50 hover:text-orange-600 rounded-xl cursor-pointer transition-all font-bold"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </li>
          </ul>

          {/* Right Side Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <NavItem icon={Search} label="Search" hoverColor="text-blue-400" />
            <Link href="/login">
              <NavItem icon={User} label="Login" hoverColor="text-indigo-500" />
            </Link>
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              {/* Desktop Cart Trigger */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative group p-1"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer group-hover:text-blue-500 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  0
                </span>
              </button>
              <button className="flex items-center gap-1 font-semibold text-sm">
                EN <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="flex lg:hidden items-center gap-4">
            {/* Mobile Cart Trigger */}
            <ShoppingCart
              onClick={() => setCartOpen(true)}
              className="w-6 h-6 cursor-pointer text-black"
            />
            <button onClick={() => setMobileMenu(true)} className="p-1">
              <Menu size={32} />
            </button>
          </div>
        </header>
      </div>

      {/* CART OVERLAY */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* CART PANEL (Choti Height & Clean Look) */}
      <div
        className={`fixed top-2 right-4 w-[90%] max-w-[350px] h-[570px] bg-white z-[101] rounded-2xl shadow-2xl transition-all duration-300 ease-in-out ${
          cartOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-10 opacity-0 pointer-events-none"
        } flex flex-col overflow-hidden`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-50">
          <h2 className="font-bold text-base text-black">My Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Simple Empty Content */}
        <div className="p-8 flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-3">
            <ShoppingCart size={24} className="text-gray-300" />
          </div>
          <p className="text-black font-semibold text-sm">Your cart is empty</p>
        </div>
      </div>

      {/* MOBILE MENU SIDEBAR */}
      <div
        className={`fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenu(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-[350px] bg-white z-[120] shadow-2xl transition-transform duration-500 ease-out lg:hidden flex flex-col ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header inside Sidebar */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="Yaalo"
            className="h-7"
          />
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="flex flex-col px-4 gap-1">
            {/* Primary Links */}
            <Link
              href="/destinations"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-4 text-black font-bold hover:bg-blue-50 rounded-2xl transition-all"
            >
              <CardSim size={20} className="text-blue-500" /> Buy eSIM
            </Link>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-4 text-black font-bold hover:bg-green-50 rounded-2xl transition-all"
            >
              <Mail size={20} className="text-green-500" /> Contact Info
            </Link>

            <Link
              href="/affiliate-partner"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-4 text-black font-bold hover:bg-red-50 rounded-2xl transition-all"
            >
              <Handshake size={20} className="text-red-500" /> Affiliate Partner
            </Link>

            <hr className="my-2 border-gray-100" />

            {/* Dropdown/More Items directly listed for mobile */}
            <p className="px-4 py-2 text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Quick Links
            </p>
            {[
              { name: "About Us", link: "/about-us" },
              { name: "Compatible Phones", link: "/esim-compatible-devices" },
              { name: "FAQ", link: "/faq" },
              { name: "Blog", link: "/blog" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                onClick={() => setMobileMenu(false)}
                className="block px-4 py-3 text-sm text-gray-700 hover:text-orange-600 font-bold"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-6 bg-gray-50 border-t border-gray-100 grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl font-bold text-sm shadow-sm active:scale-95 transition-all">
            <Search size={18} /> Search
          </button>
          <Link
            href="/login"
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 bg-black text-white py-3 rounded-xl font-bold text-sm shadow-lg active:scale-95 transition-all"
          >
            <User size={18} /> Login
          </Link>
          <button className="col-span-2 flex items-center justify-center gap-2 py-2 text-gray-500 font-bold text-xs">
            <Globe size={14} /> Language: EN (English)
          </button>
        </div>
      </div>
    </>
  );
}
