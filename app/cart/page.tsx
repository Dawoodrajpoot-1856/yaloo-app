"use client";

import Footer from "@/components/Footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Trash2,
  ShoppingCart,
  Wallet,
  CreditCard,
  ShieldCheck,
  Minus,
  Plus,
  Lock,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen  flex flex-col">
      <Header />

      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-10">
          {/* 50 / 50 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* ================= LEFT ================= */}
            <div className="space-y-8">
              {/* Wallet */}
              <div className="rounded-3xl border border-yellow-100 bg-yellow-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Current Balance</p>

                    <h1 className="mt-2 text-4xl font-bold">$0.00</h1>
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

              {/* Product */}
              <div className="rounded-3xl border bg-gray-100 p-2 ">
                <div className="flex flex-col gap-6 items-center  sm:flex-row">
                  <img
                    src="https://yaalo.com/_next/image/?url=https%3A%2F%2Fflagcdn.com%2Fw80%2Fca.png&w=1920&q=75"
                    alt="Canada"
                    className="h-20 w-20 rounded-2xl border object-cover"
                  />

                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="mt-2 text-gray-500">
                        Unlimited internet for 1 day with instant activation.
                      </p>
                    </div>

                    <div className="mt-8 flex flex-wrap  items-center justify-between gap-5">
                      <div className="flex items-center gap-2">
                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-gray-50">
                          <Trash2 size={18} />
                        </button>

                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-gray-50">
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center font-bold">1</span>

                        <button className="flex h-10 w-10 items-center justify-center rounded-xl border hover:bg-gray-50">
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <h2 className=" text-gray-600">$11.50</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================= RIGHT ================= */}
            <div>
              <div className="sticky top-28 rounded-3xl   p-8 ">
                <h2 className="text-2xl font-bold"> Summary</h2>

                <div className="mt-8 space-y-5">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Subtotal</span>

                    <span className="font-semibold">$11.50</span>
                  </div>
                  <div className="border-t pt-5">
                    <div className="flex items-end justify-between">
                      <span className="text-lg font-bold">Total</span>

                      <span className=" font-black">$11.50</span>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Pay from Wallet</span>

                    <span className="font-semibold ">$0.00</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="font-semibold">To Pay on Checkout</span>

                    <span className="font-semibold">$0.00</span>
                  </div>
                </div>

                <Button className="group relative mt-8 h-14 w-full overflow-hidden rounded-2xl border border-yellow-300 bg-yellow-300 text-base font-semibold text-black">
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-black transition-all duration-300 ease-out group-hover:h-full"></span>

                  <span className="relative z-10 flex items-center justify-center transition-colors duration-300 group-hover:text-white">
                    <Lock className="mr-2 h-5 w-5" />
                    Go to Secure Checkout
                  </span>
                </Button>

                <div className="mt-6 flex gap-4 rounded-2xl    p-5">
                  <div>
                    <p className="mt-1 text-sm text-gray-500">
                      By clicking 'Go to Secure Checkout' you agree to our Terms
                      of Use and Privacy Policy and will be redirected to Stripe
                      for secure payment.
                    </p>
                  </div>
                </div>
                {/* {hfhfhf} */}

                <div className="mt-6 shadow ml-10 rounded-2xl border bg-gray-50 p-5">
                  <p className="mb-3 font-semibold flex flex-row gap-2">
                    <Lock /> Guaranteed safe & secure checkout{" "}
                    <img
                      className="h-5 mt-1"
                      src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FstripeImg.0hq-ei-blzbcb.png&w=1920&q=75"
                      alt=""
                    />
                  </p>

                  <div className="flex gap-2">
                    <div className="flex flex-row gap-3 m-auto mt-4">
                      <img
                        src="https://yaalo.com/_next/static/media/applePay.123km-kkjusoj.svg"
                        alt=""
                      />
                      <img
                        src="https://yaalo.com/_next/static/media/googlePay.0n3is1ts00unt.svg"
                        alt=""
                      />
                      <img
                        src="https://yaalo.com/_next/static/media/americanExpressPay.08-posjpft3a2.svg"
                        alt=""
                      />
                      <img
                        src="https://yaalo.com/_next/static/media/visaPay.0suj__9aszg59.svg"
                        alt=""
                      />
                      <img
                        src="https://yaalo.com/_next/static/media/masterPay.050lo5~g~s8ia.svg"
                        alt=""
                      />
                      <img
                        src="https://yaalo.com/_next/static/media/discoverPay.15jm574f4x.b_.svg"
                        alt=""
                      />
                    </div>
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
