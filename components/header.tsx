"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { removeFromCart } from "@/redux/cartSlice";

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
  Globe,
  Wallet,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

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
        background: `radial-gradient(ellipse 200% 450% at 50% 50%, ${glowColor} 15%, transparent 25%)`,
        inset: "-110% -80%",
        zIndex: 0,
      }}
      aria-hidden
    />
    <div className="relative h-7 overflow-hidden z-10">
      <div className="relative transition-transform duration-500 ease-out group-hover:-translate-y-7">
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon size={18} />
          <span className="font-semibold text-sm xl:text-base">{label}</span>
        </div>
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon
            size={18}
            className={`${hoverColor} transition-colors duration-300`}
          />
          <span className="font-semibold text-sm xl:text-base">{label}</span>
        </div>
      </div>
    </div>
  </li>
);

export default function Header() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.items);

  const [cartOpen, setCartOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userToken =
      localStorage.getItem("token") || localStorage.getItem("user");
    if (userToken) {
      setIsLoggedIn(true);
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu || cartOpen ? "hidden" : "unset";
  }, [mobileMenu, cartOpen]);

  // 👑 REDUX DISPATCH FOR REMOVE
  const handleRemove = (id: string) => {
    if (removeFromCart) {
      dispatch(removeFromCart(id));
    } else {
      // Agar slice me action ka naam alag h toh fallback action dispatch hoga
      dispatch({ type: "cart/removeFromCart", payload: id });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setAccountOpen(false);
    setMobileMenu(false);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex justify-center w-full px-4 sm:px-6 md:px-8`}
      >
        <header
          className={`w-full max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-12 py-3 mt-0 transition-all duration-500 ease-out ${
            scrolled
              ? "bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg rounded-2xl mt-3 sm:mt-4"
              : "bg-transparent backdrop-blur-0 border-transparent shadow-none rounded-none"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0">
            <img
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.053tvj4_btjsj.svg"
              alt="Yaalo Logo"
              className="h-7 sm:h-8 md:h-10 lg:h-11 transition-all"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-8 font-semibold list-none m-0 p-0">
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
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm xl:text-base">
                    <span>More</span> <ChevronDown size={16} />
                  </div>
                  <div className="flex items-center gap-1 h-7 text-black font-semibold text-sm xl:text-base">
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

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            <NavItem icon={Search} label="Search" hoverColor="text-blue-400" />

            {isLoggedIn ? (
              <div
                className="relative cursor-pointer list-none"
                onMouseEnter={() => setAccountOpen(true)}
                onMouseLeave={() => setAccountOpen(false)}
              >
                <div className="relative h-7 overflow-hidden z-10 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
                  <div
                    className={`relative transition-transform duration-500 ease-out ${accountOpen ? "-translate-y-7" : ""}`}
                  >
                    <div className="flex items-center gap-2 h-7 text-black font-semibold text-sm xl:text-base">
                      <User size={18} />
                      <span>Account</span>
                      <ChevronDown
                        size={14}
                        className="transition-transform duration-300"
                      />
                    </div>
                    <div className="flex items-center gap-2 h-7 text-indigo-500 font-semibold text-sm xl:text-base">
                      <User size={18} />
                      <span>Account</span>
                      <ChevronDown
                        size={14}
                        className="rotate-180 text-indigo-500"
                      />
                    </div>
                  </div>
                </div>
                {accountOpen && (
                  <div className="absolute top-8 right-0 bg-white rounded-2xl p-3 w-48 space-y-1 border border-gray-100 shadow-xl z-20">
                    <Link
                      href="/my-esims"
                      className="flex items-center gap-2 px-4 py-2 text-xs text-black hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-all font-bold"
                    >
                      <CardSim size={14} /> My eSIM
                    </Link>
                    <Link
                      href="/wallet"
                      className="flex items-center gap-2 px-4 py-2 text-xs text-black hover:bg-indigo-50 hover:text-indigo-600 rounded-xl cursor-pointer transition-all font-bold"
                    >
                      <Wallet size={14} /> Wallet
                    </Link>
                    <hr className="border-gray-100 my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-500 hover:bg-red-50 rounded-xl cursor-pointer transition-all font-bold text-left"
                    >
                      <LogOut size={14} /> Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <NavItem
                  icon={User}
                  label="Login"
                  hoverColor="text-indigo-500"
                />
              </Link>
            )}

            <div className="flex items-center gap-4 border-l pl-4 xl:pl-6 border-gray-200">
              {/* Dynamic Redux Counter Badge */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative group p-1 flex-shrink-0"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer group-hover:text-blue-500 transition-colors" />
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartItems.length}
                </span>
              </button>

              {/* Language Dropdown */}
              <div className="relative group py-2">
                <button className="flex items-center gap-1 font-semibold text-sm xl:text-base whitespace-nowrap text-gray-700 pointer-events-none">
                  EN{" "}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute right-0 top-full mt-1 w-40 bg-white border border-gray-100 rounded-xl shadow-xl py-1.5 z-50 hidden group-hover:block">
                  {["English", "Español", "Français", "Deutsch", "العربية"].map(
                    (lang) => (
                      <button
                        key={lang}
                        className="w-full px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {lang}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-3 sm:gap-5">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-black active:scale-95 transition-transform"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-yellow-400 text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            </button>
            <button
              onClick={() => setMobileMenu(true)}
              className="p-1 text-black active:scale-95 transition-transform"
              aria-label="Open Menu"
            >
              <Menu size={28} className="sm:w-8 sm:h-8" />
            </button>
          </div>
        </header>
      </div>

      {/* CART OVERLAY */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          cartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setCartOpen(false)}
      />

      {/* CART PANEL */}
      <div
        className={`fixed right-0 bottom-0 top-0 sm:right-3 sm:top-3 sm:bottom-3 w-full sm:w-[90%] sm:max-w-[450px] h-full sm:h-[calc(100vh-24px)] bg-white z-[101] rounded-none sm:rounded-2xl shadow-2xl transition-all duration-300 ease-in-out ${
          cartOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        } flex flex-col overflow-hidden`}
      >
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 shrink-0">
          <h2 className="font-bold text-base sm:text-lg text-black">My Cart</h2>
          <button
            onClick={() => setCartOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* 👑 REDUX DYNAMIC CONDITIONAL RENDERING */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-gray-50 dark:bg-gray-900 rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-50 dark:border-gray-800">
                <ShoppingCart
                  size={24}
                  className="text-gray-400 dark:text-gray-600"
                />
              </div>
              <p className="text-gray-900 dark:text-white font-bold text-base mb-1">
                Your cart is empty
              </p>
              <p className="text-gray-500 text-xs max-w-[200px] mb-5">
                Looks like you haven't added any eSIM plans yet.
              </p>
              <Button
                onClick={() => {
                  setCartOpen(false);
                  const element = document.getElementById("packages-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl px-6 py-2 text-sm shadow-sm transition-all duration-200"
              >
                Explore Plans
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {cartItems.map((item: any, index: number) => (
                <div
                  key={`${item.id}-${index}`}
                  className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold text-base text-gray-900">
                      {item.packageName}
                    </h3>
                    <div className="mt-2 text-sm text-gray-500 space-y-0.5">
                      <p>
                        Country:{" "}
                        <span className="font-medium text-gray-800">
                          {item.country}
                        </span>
                      </p>
                      <p>
                        Quantity:{" "}
                        <span className="font-medium text-gray-800">
                          {item.quantity}
                        </span>
                      </p>
                      <p>
                        Price:{" "}
                        <span className="font-medium text-gray-800">
                          {item.price}
                        </span>
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 active:scale-95 rounded-xl transition-all duration-200 border border-transparent hover:border-red-100 flex-shrink-0"
                    title="Remove Item"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenu(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[70%] max-w-[360px] bg-white z-[120] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden flex flex-col ${mobileMenu ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-gray-100">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.43dca0d6.svg"
            alt="Yaalo"
            className="h-6 sm:h-7"
          />
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={22} className="text-gray-600" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-3">
          <nav className="flex flex-col px-3 gap-0.5">
            <Link
              href="/destinations"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-3.5 text-black font-bold hover:bg-blue-50 rounded-xl transition-all text-sm sm:text-base"
            >
              <CardSim size={20} className="text-blue-500 flex-shrink-0" /> Buy
              eSIM
            </Link>
            <Link
              href="/contact-us"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-3.5 text-black font-bold hover:bg-green-50 rounded-xl transition-all text-sm sm:text-base"
            >
              <Mail size={20} className="text-green-500 flex-shrink-0" />{" "}
              Contact Info
            </Link>
            <Link
              href="/affiliate-partner"
              onClick={() => setMobileMenu(false)}
              className="flex items-center gap-4 px-4 py-3.5 text-black font-bold hover:bg-red-50 rounded-xl transition-all text-sm sm:text-base"
            >
              <Handshake size={20} className="text-red-500 flex-shrink-0" />{" "}
              Affiliate Partner
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
