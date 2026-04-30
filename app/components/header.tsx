"use client";

import {
  CardSim,
  ChevronDown,
  Handshake,
  Mail,
  Search,
  ShoppingCart,
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
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "unset";
  }, [mobileMenu]);

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
          {/* Baki saara logo aur nav ka code yahan aayega... */}
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
                <div className="absolute top-8 left-0 bg-white rounded-2xl p-3 w-60 space-y-1 border border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300 z-20">
                  {[
                    { label: "About", href: "/about-us" },
                    {
                      label: "Compatible Phones",
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

          {/* Right Side Desktop */}
          <div className="hidden lg:flex items-center gap-6">
            <NavItem icon={Search} label="Search" hoverColor="text-blue-400" />
            <Link href="/login">
              <NavItem icon={User} label="Login" hoverColor="text-indigo-500" />
            </Link>
            <div className="flex items-center gap-4 border-l pl-6 border-gray-200">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-500 transition-colors" />
              <button className="flex items-center gap-1 font-semibold text-sm">
                EN <ChevronDown size={14} />
              </button>
            </div>
          </div>

          {/* Mobile UI */}
          <div className="flex lg:hidden items-center gap-4">
            <ShoppingCart size={22} className="cursor-pointer" />
            <button onClick={() => setMobileMenu(true)} className="p-1">
              <Menu size={32} />
            </button>
          </div>
        </header>
      </div>

      {/* MOBILE MENU (SAME AS BEFORE) */}
      <div
        className={`fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenu(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-[350px] bg-white z-[101] shadow-2xl transition-transform duration-500 ease-out lg:hidden p-6 flex flex-col ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* ... Sidebar Content ... */}
        <div className="flex items-center justify-between mb-10">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="Yaalo"
            className="h-8"
          />
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 overflow-y-auto">
          {[
            { label: "Buy eSIM", href: "/destinations", icon: CardSim },
            { label: "Contact Info", href: "/contact-us", icon: Mail },
            {
              label: "Affiliate Partner",
              href: "/affiliate-partner",
              icon: Handshake,
            },
            { label: "About Us", href: "/about-us", icon: User },
            { label: "FAQ", href: "/faq", icon: Globe },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-4 text-gray-700 font-bold hover:bg-gray-50 rounded-2xl transition-all"
            >
              <item.icon size={20} className="text-orange-500" />
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-gray-100 space-y-4">
          <Link
            href="/login"
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 w-full py-4 bg-black text-white font-bold rounded-2xl"
          >
            <LogIn size={20} /> Login
          </Link>
        </div>
      </div>
    </>
  );
}
