"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  DollarSign,
  Filter,
  Globe2,
  Handshake,
  Plane,
  Smartphone,
  Timeline,
  UserRound,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Faqs from "@/components/Faqs";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

type Props = {
  country: any;
  data: any;
  selectedPackage: any;
  setSelectedPackage: (pkg: any) => void;
};

export function SheetDemo({
  country,
  data,
  selectedPackage,
  setSelectedPackage,
}: Props) {
  const packagesArray = Array.isArray(data?.data) ? data.data : [];
  const cards = [
    {
      title: "Budget-Friendly, Borderless",
      desc: "Track usage, top-up anywhere, switch plans on the fly. Travel-tech made it easy with the Yaalo App Dashboard.",
      icon: Globe2,
    },
    {
      title: "Tether & Hotspot",
      desc: "People care for their planet, and Yaalo makes sure you go green. So, no more plastic waste from physical SIM cards. Stress-free purchasing and usage.",
      icon: UserRound,
    },
    {
      title: "Your Data Passport",
      desc: "Track usage, top-up anywhere, switch plans on the fly. Travel-tech made it easy with the Yaalo App Dashboard. Available on Apple and Google Play Stores!",
      icon: Plane,
    },
    {
      title: "Travel Light, Stay Connected",
      desc: "Instant coverage in 200+ countries. Get online in seconds anywhere.",
      icon: Handshake,
    },
    {
      title: "Best Pricing",
      desc: "Affordable dynamic local plans with premium network carriers globally without hidden structural fees.",
      icon: DollarSign,
    },
    {
      title: "Real-time Tracking",
      desc: "Monitor your high-speed internet data packages consumption and timeline straight on your fingertips.",
      icon: Timeline,
    },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="gap-1 border border-gray-200 dark:border-gray-800 rounded-2xl text-sm text-gray-600 dark:text-gray-400 hover:bg-transparent hover:text-gray-900 dark:hover:text-white"
        >
          Plan
          <ArrowUpRight className="h-3 w-3" />
        </Button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-4xl">
        <SheetHeader>
          <SheetTitle>{country?.name || "Destination"} Plans</SheetTitle>
          <SheetDescription>
            Check available eSIM plans for {country?.name || "this country"}.
          </SheetDescription>
        </SheetHeader>

        {country?.flag && (
          <div className="flex items-center gap-3 px-4 mt-4">
            <img
              src={country.flag}
              className="w-10 h-10 rounded-full"
              alt="Flag"
            />
            <h2 className="font-semibold">{country?.name}</h2>
          </div>
        )}

        <div className="grid gap-4 px-4 my-6 overflow-y-auto max-h-[60vh]">
          {packagesArray.length > 0 ? (
            packagesArray.map((pkg: any, i: number) => (
              <div
                key={pkg.id || i} // Fixed 'index' reference to 'i'
                onClick={() => setSelectedPackage(pkg)}
                className={`rounded-2xl border p-4 cursor-pointer ${
                  selectedPackage?.id === pkg.id
                    ? "border-yellow-400 bg-yellow-50"
                    : ""
                }`}
              >
                <h2 className="font-bold text-gray-900 dark:text-white">
                  {pkg?.name || "Standard Plan"}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Data: {pkg?.data || "N/A"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Price: {pkg?.price || "N/A"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Validity: {pkg?.package_validity || "N/A"}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Connectivity: {pkg?.connectivity || "N/A"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm px-4">
              No packages available for this country.
            </p>
          )}
        </div>

        <SheetFooter>
          <SheetClose asChild>
            <Button className="w-full sm:w-auto">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem
          value="default"
          id="r1"
          className="border-yellow-400 text-yellow-400 fill-yellow-400 focus-visible:ring-yellow-400 data-[state=checked]:border-yellow-400 data-[state=checked]:bg-yellow-400"
        />
      </div>
    </RadioGroup>
  );
}

const cards = [
  {
    title: "Budget-Friendly, Borderless",
    desc: "Track usage, top-up anywhere, switch plans on the fly.",
    icon: Globe2,
  },
  {
    title: "Tether & Hotspot",
    desc: "People care for their planet, and Yaalo makes sure you go green.",
    icon: UserRound,
  },
  {
    title: "Your Data Passport",
    desc: "Available on Apple and Google Play Stores!",
    icon: Plane,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries.",
    icon: Handshake,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries.",
    icon: DollarSign,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries.",
    icon: Timeline,
  },
];

export default function Page({ params }: PageProps) {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null,
  );
  const [data, setData] = useState<any>(null);
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  // Cart States shared globally across the page
  const [quantity, setQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  // Unwrap params safely in client
  useEffect(() => {
    params.then((res) => setUnwrappedParams(res));
  }, [params]);

  // Fetch Data Client-side safely
  useEffect(() => {
    if (!unwrappedParams?.id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const packageRes = await fetch(
          `https://test.esimwhitelabel.com/api/packages/country/${unwrappedParams.id}`,
        );
        const packageData = await packageRes.json();
        setData(packageData);

        // Pre-select the first package if available
        if (packageData?.data && packageData.data.length > 0) {
          setSelectedPackage(packageData.data[0]);
        }

        const countryRes = await fetch(
          "https://test.esimwhitelabel.com/api/packages/country",
        );
        const countryResult = await countryRes.json();
        const matchedCountry = countryResult?.data?.find(
          (item: any) => item.id === Number(unwrappedParams.id),
        );
        setCountry(matchedCountry);
      } catch (error) {
        console.error("Fetch Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [unwrappedParams]);

  const addToCart = () => {
    if (!selectedPackage) {
      alert("Please select a plan first!");
      return;
    }

    const cartItem = {
      id: selectedPackage.id,
      packageName: selectedPackage.name,
      country: country?.name || "Unknown Country",
      quantity,
      price: selectedPackage.price,
    };

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));
    alert("Added to cart successfully!");
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading or Data Not Found... 😒
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="mt-30 max-w-[1220px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="w-full md:w-[500px] shrink-0 bg-white dark:bg-gray-900 rounded-4xl border border-gray-100 dark:border-gray-800">
            {country?.banner && (
              <img
                className="rounded-xl w-full h-[600px] object-cover"
                src={country.banner}
                alt="eSIM Destination"
              />
            )}
          </div>

          <div className="flex flex-col gap-4 flex-1">
            <h1 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">
              Select the Best eSIM Plans for {country?.name}
            </h1>
            <div className="flex flex-row flex-wrap gap-3 justify-end items-center h-fit">
              <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900 transition-colors whitespace-nowrap h-fit">
                <Smartphone className="text-black dark:text-white h-4 w-4" />
                Check eSIM Device
              </button>
              <button className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-200 px-4 py-2 text-sm font-semibold text-black transition-colors whitespace-nowrap h-fit">
                <Filter className="text-black h-4 w-4" />
                Filter
              </button>
            </div>

            <div className="flex-1">
              <div className="h-[500px] bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="h-full overflow-y-auto p-4 flex flex-col gap-3">
                  {data?.data?.map((pkg: any, index: number) => (
                    <div
                      key={pkg.id || index}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`rounded-2xl border p-4 bg-white dark:bg-gray-900 cursor-pointer ${
                        selectedPackage?.id === pkg.id
                          ? "border-yellow-400 bg-yellow-50/40"
                          : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 flex-wrap">
                        <h1>{country?.name}</h1>
                        <span className="text-xl font-semibold">
                          {pkg?.data_unit || ""}
                        </span>
                        <SheetDemo
                          country={country}
                          data={{ data: [pkg] }}
                          selectedPackage={selectedPackage}
                          setSelectedPackage={setSelectedPackage}
                        />
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-4 mt-4">
                        <div className="flex items-center gap-3">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className="rounded-xl font-semibold"
                              >
                                {pkg?.package_validity || "1 Day"}
                                <ChevronDown />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-44">
                              <DropdownMenuLabel>
                                Validity Period
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup>
                                <DropdownMenuItem>
                                  {pkg?.package_validity}
                                </DropdownMenuItem>
                              </DropdownMenuGroup>
                            </DropdownMenuContent>
                          </DropdownMenu>

                          {country?.flag && (
                            <img
                              src={country.flag}
                              alt=""
                              className="rounded-full h-6 w-6"
                            />
                          )}
                        </div>

                        <div className="flex items-center gap-3">
                          <h1 className="font-bold text-2xl text-gray-900 dark:text-white">
                            {pkg?.price || "N/A"}
                          </h1>
                          <RadioGroupDemo />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center gap-5 font-sans ml-6">
              <div className="flex w-40 items-center border border-gray-300 rounded-md overflow-hidden h-12">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-full w-1/3 bg-gray-100 hover:bg-gray-200 text-lg font-bold transition-colors flex items-center justify-center select-none"
                >
                  -
                </button>
                <span className="w-1/3 font-semibold text-center text-gray-800 text-base flex items-center justify-center h-full">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="h-full w-1/3 bg-gray-100 hover:bg-gray-200 text-lg font-bold transition-colors flex items-center justify-center select-none"
                >
                  +
                </button>
              </div>

              <button
                onClick={addToCart}
                className="h-10 w-50 p-7 bg-white hover:bg-yellow-100 shadow-sm text-black font-semibold rounded-xl transition-colors flex items-center justify-center"
              >
                Add to Cart
              </button>

              <button className="h-10 w-50 p-7 bg-yellow-400 font-semibold rounded-xl transition-colors flex items-center justify-center">
                Buy Now <ArrowUpRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-3xl ml-10 sm:text-5xl font-semibold leading-tight text-gray-900">
        How Yaalo eSIM Works? <br />
        <span className="text-black">(Spoiler: It’s Ridiculously Simple)</span>
      </h2>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pb-20">
        <div className="max-w-[1220px] mx-auto px-4 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: "1",
                title: "Buy a data plan",
                desc: "Search your destination and explore available eSIM plans designed for your needs.",
                img: "step1.5f190939.png",
              },
              {
                num: "2",
                title: "Install the eSIM",
                desc: "Follow the simple installation guide sent to your email or scan the QR code.",
                img: "step2.865ddb77.png",
              },
              {
                num: "3",
                title: "Activate your plan",
                desc: "Once you arrive, activate your data plan and stay connected instantly.",
                img: "step3.4035cfb6.png",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white w-full rounded-2xl p-7 shadow-sm border border-gray-100 hover:border-amber-300 transition-all duration-500 flex flex-col group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="w-10 h-10 rounded-full bg-gray-50 text-gray-400  flex items-center justify-center text-xl font-bold transition-all">
                    {item.num}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="h-52 flex items-end justify-center mt-auto overflow-hidden">
                  <img
                    src={`https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2F${item.img}&w=640&q=75`}
                    className="max-h-full w-auto object-contain group-hover:scale-105 transition duration-500"
                    alt={item.title}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-5xl ml-12">
        What advantages does Yaalo bring for the <br /> Rwanda travel eSIM?
      </h1>
      <section className="w-full py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1470px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
                Why Are Travellers Switching to Yaalo?
              </h2>
              <p className="mt-4 text-gray-600 text-sm sm:text-base">
                Because of zero roaming fees and international travel eSIM for
                200+ destinations, Yaalo is the best choice.
              </p>
            </div>
          </div>

          {/* 👑 FIXED GRID: Carousel khatam, ek line mein 3 div daal diye */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="h-full min-h-[260px] rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl hover:border-yellow-300 transition-all duration-300"
                >
                  <div className="flex flex-col gap-5">
                    <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="w-full max-w-[1220px] mt-10 mx-auto px-4">
        {/* 👑 Rounded corners ko idhar sahi kar diya hai aur padding ke beech space daal di hai */}
        <div className="bg-[#1a1a1ad5] rounded-[2rem] px-6 sm:px-12 py-12 w-full mx-auto flex justify-center shadow-lg">
          <div className="w-full max-w-[1000px] flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden">
            {/* Text Container */}
            <div className="max-w-xl text-center lg:text-left z-10">
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Yaalo eSIM Arrives Instantly without any Hassle!
              </h2>
              <p className="text-gray-200 text-sm sm:text-base max-w-3xl leading-relaxed">
                Once you complete your order, your Yaalo eSIM lands straight in
                your inbox or inside the Yaalo App. Just open, scan, and you’re
                online—that’s it. Within minutes, you’ll be connected across
                Rwanda with fast, reliable data that keeps you sharing,
                navigating, and streaming wherever your trip takes you.
              </p>
            </div>

            {/* Image Container */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
              <img
                src="https://yaalo.com/_next/static/media/email-yellow.07mwl5kb.gdwj.svg"
                className="max-w-full xs:max-w-[260px] md:max-w-[300px] h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                alt="Compatibility Check"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className=" mt-10
  bg-[#393a36]
  w-full max-w-[1200px]
  mx-auto mb-10
  px-6 md:px-16
  py-12 md:py-20
  overflow-hidden
  rounded-none md:rounded-[40px]
  "
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
          {/* LEFT CONTENT */}
          <div className="max-w-xl text-center lg:text-left">
            {/* badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-5 md:mb-6">
              <img
                className="h-5"
                src="https://yaalo.com/_next/static/media/5Star.a8d15048.svg"
                alt=""
              />
              <h1 className="text-white text-xs sm:text-sm md:text-base font-medium">
                50000+ Downloads
              </h1>
            </div>

            {/* heading */}
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
              Download The <br />
              App Now
            </h1>

            {/* paragraph */}
            <p className="text-white mt-4 md:mt-6 text-xs sm:text-sm md:text-lg leading-6">
              To use virtual number & international calling features. Buy, setup
              and manage your eSIMs easily.
            </p>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 md:gap-4 mt-6 md:mt-8">
              <a href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo">
                <img
                  src="https://yaalo.com/_next/static/media/playLink.0hhnjxn3~uuaj.svg"
                  alt="Google Play"
                  className="h-10 md:h-12 hover:scale-105 transition"
                />
              </a>

              <a href="https://apps.apple.com/app/id6753675047">
                <img
                  src="https://yaalo.com/_next/static/media/appleLink.0jfeh4f2_t3bl.svg"
                  alt="App Store"
                  className="h-10 md:h-12 hover:scale-105 transition"
                />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FappInstallSS.729e81b9.png&w=1920&q=75"
              alt="App preview"
              className="w-full max-w-[420px] md:max-w-[500px] object-contain"
            />
          </div>
        </div>
      </div>
      <Faqs />
      <Footer />
    </>
  );
}
