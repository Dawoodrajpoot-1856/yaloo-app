"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/redux/cartSlice";
import { Trash2, ShoppingCart, Wallet, Minus, Plus, Lock } from "lucide-react";

export default function Page() {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const walletBalance = 0.0;

  // 1. Safe Price Converter Function (Taaki code bar bar repeat na ho aur crash safe rahe)
  const getNumericPrice = (price: any): number => {
    const priceString = String(price || "0");
    return parseFloat(priceString.replace(/[^0-9.]/g, "")) || 0;
  };

  // 2. Subtotal Calculation
  const subtotal = cartItems.reduce((sum: number, item: any) => {
    return sum + getNumericPrice(item.price) * item.quantity;
  }, 0);

  const total = subtotal;
  const payFromWallet = Math.min(walletBalance, total);
  const toPayOnCheckout = total - payFromWallet;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* ================= LEFT SIDE: PRODUCTS ================= */}
            <div className="space-y-8">
              {/* Wallet Section */}
              <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Current Balance</p>
                    <h1 className="mt-2 text-4xl font-bold">
                      ${walletBalance.toFixed(2)}
                    </h1>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl ">
                    <Wallet className="h-8 w-8" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="flex items-center gap-3">
                <ShoppingCart className="h-7 w-7 " />
                <h2 className="text-2xl font-bold">Order Summary</h2>
              </div>

              {/* Redux Data List */}
              {cartItems.length === 0 ? (
                <div className="rounded-3xl border border-dashed p-10 text-center text-gray-500">
                  Aapka cart khali hai. Koi package add karein! 🛒
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item: any) => {
                    // FIX: Yahan safe function use kiya hai jo crash nahi karega
                    const singleItemPrice = getNumericPrice(item.price);
                    const itemTotal = singleItemPrice * item.quantity;

                    return (
                      <div
                        key={item.id}
                        className="rounded-3xl border bg-gray-100 p-4"
                      >
                        <div className="flex flex-col gap-6 items-center sm:flex-row">
                          <img
                            src={`https://flagcdn.com/w80/${item.country}`}
                            alt={item.country}
                            className="h-20 w-20 rounded-2xl border object-cover"
                          />

                          <div className="flex flex-1 flex-col justify-between w-full">
                            <div>
                              <h3 className="font-bold text-lg text-gray-800">
                                {item.packageName}
                              </h3>
                              <p className="mt-1 text-sm text-gray-500">
                                Destination:{" "}
                                <span className="font-semibold uppercase">
                                  {item.country}
                                </span>
                              </p>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                  }
                                  className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white hover:bg-red-50 text-red-500 transition"
                                >
                                  <Trash2 size={18} />
                                </button>

                                <button className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white hover:bg-gray-50">
                                  <Minus size={16} />
                                </button>

                                <span className="w-8 text-center font-bold">
                                  {item.quantity}
                                </span>

                                <button className="flex h-10 w-10 items-center justify-center rounded-xl border bg-white hover:bg-gray-50">
                                  <Plus size={16} />
                                </button>
                              </div>

                              <div className="text-right">
                                <h2 className="text-xl font-bold text-gray-800">
                                  ${itemTotal.toFixed(2)}
                                </h2>
                                <p className="text-xs text-gray-400">
                                  ${singleItemPrice.toFixed(2)} each
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* ================= RIGHT SIDE: SUMMARY ================= */}
            <div>
              <div className="sticky top-28 rounded-3xl p-8 border bg-white ">
                <h2 className="text-2xl font-bold">Summary</h2>

                <div className="mt-8 space-y-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-semibold">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="border-t pt-5">
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-bold">Total</span>
                      <span className="font-black text-xl">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Pay from Wallet</span>
                    <span className="font-semibold text-gray-700">
                      -${payFromWallet.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between border-t border-dashed pt-4">
                    <span className="font-bold text-gray-800">
                      To Pay on Checkout
                    </span>
                    <span className="font-bold ">
                      ${toPayOnCheckout.toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button
                  disabled={cartItems.length === 0}
                  className="group relative mt-8 h-14 w-full overflow-hidden rounded-2xl border border-yellow-300 bg-yellow-300 text-base font-semibold text-black disabled:opacity-50"
                >
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full"></span>
                  <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                    <Lock className="mr-2 h-5 w-5" />
                    Go to Secure Checkout
                  </span>
                </Button>

                <div className="mt-6 flex gap-4 rounded-2xl p-2">
                  <p className="text-xs text-gray-400 leading-relaxed">
                    By clicking 'Go to Secure Checkout' you agree to our Terms
                    of Use and Privacy Policy and will be redirected to Stripe
                    for secure payment.
                  </p>
                </div>

                {/* Trust Seal & Payments */}
                <div className="mt-6 shadow-sm rounded-2xl border bg-gray-50 p-5">
                  <div className="mb-3 font-semibold flex flex-wrap items-center gap-2 text-sm text-gray-700">
                    <Lock size={16} /> Guaranteed safe & secure checkout
                    <img
                      className="h-4"
                      src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FstripeImg.0hq-ei-blzbcb.png&w=1920&q=75"
                      alt="Stripe"
                    />
                  </div>

                  <div className="flex gap-2 justify-center mt-4 flex-wrap">
                    <img
                      src="https://yaalo.com/_next/static/media/applePay.123km-kkjusoj.svg"
                      alt="Apple Pay"
                    />
                    <img
                      src="https://yaalo.com/_next/static/media/googlePay.0n3is1ts00unt.svg"
                      alt="Google Pay"
                    />
                    <img
                      src="https://yaalo.com/_next/static/media/americanExpressPay.08-posjpft3a2.svg"
                      alt="Amex"
                    />
                    <img
                      src="https://yaalo.com/_next/static/media/visaPay.0suj__9aszg59.svg"
                      alt="Visa"
                    />
                    <img
                      src="https://yaalo.com/_next/static/media/masterPay.050lo5~g~s8ia.svg"
                      alt="MasterCard"
                    />
                    <img
                      src="https://yaalo.com/_next/static/media/discoverPay.15jm574f4x.b_.svg"
                      alt="Discover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
