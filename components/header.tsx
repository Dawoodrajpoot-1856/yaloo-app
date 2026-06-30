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
  HelpCircle,
  FileText,
  Info,
  ArrowRight,
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
          <Icon size={18} className="shrink-0" />
          <span className="font-semibold text-sm xl:text-base whitespace-nowrap">
            {label}
          </span>
        </div>
        <div className="flex items-center gap-2 h-7 text-black">
          <Icon
            size={18}
            className={`${hoverColor} transition-colors duration-300 shrink-0`}
          />
          <span className="font-semibold text-sm xl:text-base whitespace-nowrap">
            {label}
          </span>
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

  // Calculate Subtotal (Assuming item.price is a string like "$10.00" or number)
  const calculateTotal = () => {
    return cartItems
      .reduce((total: number, item: any) => {
        const priceNum =
          typeof item.price === "string"
            ? parseFloat(item.price.replace(/[^0-9.]/g, ""))
            : item.price;
        return total + priceNum * (item.quantity || 1);
      }, 0)
      .toFixed(2);
  };

  useEffect(() => {
    const userToken =
      localStorage.getItem("token") || localStorage.getItem("user");
    if (userToken) {
      setIsLoggedIn(true);
    }

    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu || cartOpen ? "hidden" : "unset";
  }, [mobileMenu, cartOpen]);

  const handleRemove = (id: string) => {
    if (removeFromCart) {
      dispatch(removeFromCart(id));
    } else {
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
      {/* Wrapper to control screen boundaries */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full px-3 sm:px-6 lg:px-8 pointer-events-none">
        <header
          className={`w-full max-w-[1400px] mx-auto flex items-center justify-between px-5 transition-all duration-500 ease-out pointer-events-auto border ${
            scrolled
              ? "bg-white/70 backdrop-blur-md border-gray-200/50 shadow-md rounded-2xl mt-2 sm:mt-4 py-4 sm:py-5"
              : "bg-white border-transparent shadow-none rounded-none mt-0 py-5 sm:py-6"
          }`}
        >
          {/* Logo Section */}
          <Link href="/" className="flex-shrink-0 mr-4">
            <img
              src="https://yaalo.com/_next/static/media/yaalo-logo-dark.053tvj4_btjsj.svg"
              alt="Yaalo Logo"
              className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain transition-all"
            />
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex items-center gap-3 xl:gap-6 font-semibold list-none m-0 p-0">
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
                    <span className="text-orange-500">More</span>{" "}
                    <ChevronDown
                      size={16}
                      className="text-orange-500 rotate-180"
                    />
                  </div>
                </div>
              </div>
              {open && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-2xl p-2 w-56 space-y-0.5 border border-gray-100 shadow-xl z-20">
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

          {/* Desktop Right Side Utilities */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-5">
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
                    <div className="flex items-center gap-1.5 h-7 text-black font-semibold text-sm xl:text-base">
                      <User size={18} />
                      <span>Account</span>
                      <ChevronDown size={14} />
                    </div>
                    <div className="flex items-center gap-1.5 h-7 text-indigo-500 font-semibold text-sm xl:text-base">
                      <User size={18} />
                      <span>Account</span>
                      <ChevronDown size={14} className="rotate-180" />
                    </div>
                  </div>
                </div>
                {accountOpen && (
                  <div className="absolute top-full right-0 mt-1 bg-white rounded-2xl p-2 w-48 space-y-0.5 border border-gray-100 shadow-xl z-20">
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

            {/* Actions Divider */}
            <div className="flex items-center gap-4 border-l pl-4 xl:pl-5 border-gray-200">
              <button
                onClick={() => setCartOpen(true)}
                className="relative group p-1.5 flex-shrink-0 transition-transform active:scale-95"
              >
                <ShoppingCart className="w-5 h-5 cursor-pointer group-hover:text-blue-500 transition-colors" />
                <span className="absolute -top-0.5 -right-0.5 bg-yellow-400 text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                  {cartItems.length}
                </span>
              </button>

              {/* Language Dropdown */}
              <div className="relative group py-1.5">
                <button className="flex items-center gap-0.5 font-semibold text-sm xl:text-base text-gray-700">
                  EN{" "}
                  <ChevronDown
                    size={14}
                    className="transition-transform duration-200 group-hover:rotate-180"
                  />
                </button>
                <div className="absolute right-0 top-full mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50 hidden group-hover:block">
                  {["English", "Español", "Français", "Deutsch", "العربية"].map(
                    (lang) => (
                      <button
                        key={lang}
                        className="w-full px-4 py-2 text-left text-xs font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {lang}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Actions */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-4">
            <button
              onClick={() => setCartOpen(true)}
              className="relative p-2 text-black active:scale-95 transition-transform"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 h-6" />
              <span className="absolute top-0.5 right-0.5 bg-yellow-400 text-black text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold shadow-sm">
                {cartItems.length}
              </span>
            </button>
            <button
              onClick={() => setMobileMenu(true)}
              className="p-2 text-black active:scale-95 transition-transform"
              aria-label="Open Menu"
            >
              <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
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
        className={`fixed right-0 bottom-0 top-0 sm:right-3 sm:top-3 sm:bottom-3 w-full sm:w-[90%] sm:max-w-[420px] h-full sm:h-[calc(100vh-24px)] bg-white z-[101] rounded-none sm:rounded-2xl shadow-2xl transition-all duration-300 ease-in-out ${
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

        {/* REDUX CONDITIONAL RENDERING */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 flex flex-col">
          {cartItems.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 bg-gray-50 rounded-full flex items-center justify-center mb-4 border border-gray-100 shadow-sm">
                <ShoppingCart size={24} className="text-gray-400" />
              </div>
              <p className="text-gray-900 font-bold text-base mb-1">
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
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl px-6 py-2 text-sm shadow-sm transition-all"
              >
                Explore Plans
              </Button>
            </div>
          ) : (
            <div className="flex flex-col gap-3.5">
              {cartItems.map((item: any, index: number) => (
                <div
                  key={`${item.id}-${index}`}
                  className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50 flex justify-between items-center gap-4"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base text-gray-900 truncate">
                      {item.packageName}
                    </h3>
                    <div className="mt-1 text-xs sm:text-sm text-gray-500 space-y-0.5">
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
                    className="p-2 text-red-500 hover:bg-red-50 active:scale-95 rounded-xl transition-all border border-transparent hover:border-red-100 flex-shrink-0"
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

        {/* BOTTOM CHECKOUT SECTION (Sticky at bottom when items exist) */}
        {cartItems.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-gray-100 bg-white shrink-0 shadow-[0_-4px_12px_rgba(0,0,0,0.03)] rounded-b-none sm:rounded-b-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-500 text-sm font-medium">
                Subtotal
              </span>
              <span className="text-xl font-bold text-gray-900">
                ${calculateTotal()}
              </span>
            </div>
            <Link href="/cart" onClick={() => setCartOpen(false)}>
              <button className="w-full bg-yellow-400 hover:bg-black text-black hover:text-white font-bold py-3 px-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 group active:scale-[0.99]">
                <span>Proceed to Checkout</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-[110] bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileMenu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMobileMenu(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[85%] sm:w-[75%] max-w-[340px] bg-white z-[120] shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] lg:hidden flex flex-col ${
          mobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100 shrink-0">
          <img
            src="https://yaalo.com/_next/static/media/yaalo-logo-dark.053tvj4_btjsj.svg"
            alt="Yaalo"
            className="h-6 sm:h-7 w-auto object-contain"
          />
          <button
            onClick={() => setMobileMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          <div className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Main Menu
            </p>
            <nav className="flex flex-col gap-0.5">
              <Link
                href="/destinations"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-3 text-black font-bold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <CardSim size={18} className="text-blue-500 shrink-0" /> Buy
                eSIM
              </Link>
              <Link
                href="/contact-us"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-3 text-black font-bold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <Mail size={18} className="text-green-500 shrink-0" /> Contact
                Info
              </Link>
              <Link
                href="/affiliate-partner"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-3 text-black font-bold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <Handshake size={18} className="text-red-500 shrink-0" />{" "}
                Affiliate Partner
              </Link>
            </nav>
          </div>

          {/* More Items section inside Mobile Drawer */}
          <div className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Company & Info
            </p>
            <div className="flex flex-col gap-0.5">
              <Link
                href="/about-us"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <Info size={16} className="text-orange-500 shrink-0" /> About Us
              </Link>
              <Link
                href="/esim-compatible-devices"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <Globe size={16} className="text-orange-500 shrink-0" />{" "}
                Compatible Devices
              </Link>
              <Link
                href="/faq"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <HelpCircle size={16} className="text-orange-500 shrink-0" />{" "}
                FAQ
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileMenu(false)}
                className="flex items-center gap-3 px-3 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 rounded-xl transition-all text-sm"
              >
                <FileText size={16} className="text-orange-500 shrink-0" /> Blog
              </Link>
            </div>
          </div>

          {/* Mobile Auth Management */}
          <div className="border-t border-gray-100 pt-4 mt-auto">
            {isLoggedIn ? (
              <div className="space-y-1">
                <Link
                  href="/my-esims"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-indigo-50 rounded-xl"
                >
                  <CardSim size={16} className="text-indigo-500" /> My eSIM
                </Link>
                <Link
                  href="/wallet"
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-gray-800 hover:bg-indigo-50 rounded-xl"
                >
                  <Wallet size={16} className="text-indigo-500" /> Wallet
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl text-left"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-sm"
              >
                <User size={16} /> Login / Signup
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
