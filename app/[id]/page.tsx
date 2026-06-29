"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

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
                key={pkg.id || i}
                onClick={() => setSelectedPackage(pkg)}
                className={`rounded-2xl border p-4 cursor-pointer transition-all ${
                  selectedPackage?.id === pkg.id
                    ? "border-yellow-400 bg-yellow-50 dark:bg-yellow-950/20"
                    : ""
                }`}
              >
                <h2 className="font-bold text-gray-900 dark:text-white">
                  {pkg?.name || "Standard Plan"}
                </h2>
                <div className="grid grid-cols-2 gap-2 mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <p>Data: {pkg?.data || "N/A"}</p>
                  <p>Price: {pkg?.price || "N/A"}</p>
                  <p>Validity: {pkg?.package_validity || "N/A"}</p>
                  <p>Connectivity: {pkg?.connectivity || "N/A"}</p>
                </div>
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

export default function Page({ params }: PageProps) {
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(
    null,
  );
  const [data, setData] = useState<any>(null);
  const [country, setCountry] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const dispatch = useDispatch();

  useEffect(() => {
    params.then((res) => setUnwrappedParams(res));
  }, [params]);

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

  const handleAddToCart = () => {
    if (!selectedPackage) {
      alert("Please select a plan first!");
      return;
    }

    const cartItem = {
      id: selectedPackage.id,
      packageName: selectedPackage.package_name,
      country: country?.name,
      quantity,
      price: selectedPackage.price,
    };

    dispatch(addToCart(cartItem));
  };

  return (
    <>
      <Header />

      {/* Main Container updated to max-w-[1400px] */}
      <div className="mt-24 max-w-[1400px] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Left Banner Image */}
          <div className="w-full lg:w-[450px] xl:w-[500px] shrink-0 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 overflow-hidden">
            {country?.banner && (
              <img
                className="w-full h-[400px] lg:h-[600px] object-cover"
                src={country.banner}
                alt="eSIM Destination"
              />
            )}
          </div>

          {/* Right Content Column */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white max-w-xl">
                Select the Best eSIM Plans for{" "}
                {country?.name || "Your Destination"}
              </h1>
              <div className="flex flex-wrap gap-3 items-center w-full sm:w-auto">
                <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 px-4 py-2.5 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300 dark:hover:bg-gray-900 transition-colors whitespace-nowrap">
                  <Smartphone className="text-black dark:text-white h-4 w-4" />
                  Check eSIM Device
                </button>
                <button className="flex flex-1 sm:flex-none items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 px-4 py-2.5 text-sm font-semibold text-black transition-colors whitespace-nowrap">
                  <Filter className="text-black h-4 w-4" />
                  Filter
                </button>
              </div>
            </div>

            {/* Packages Selector */}
            <div className="flex-1">
              <div className="h-[450px] lg:h-[500px] bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">
                <div className="h-full overflow-y-auto p-4 flex flex-col gap-3">
                  {data?.data?.map((pkg: any, index: number) => (
                    <div
                      key={pkg.id || index}
                      onClick={() => setSelectedPackage(pkg)}
                      className={`rounded-2xl border p-4 bg-white dark:bg-gray-900 cursor-pointer transition-all ${
                        selectedPackage?.id === pkg.id
                          ? "border-yellow-400 bg-yellow-50/40 dark:bg-yellow-950/10"
                          : "hover:border-gray-300 dark:hover:border-gray-700"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <h1 className="font-medium text-gray-700 dark:text-gray-300">
                            {country?.name}
                          </h1>
                          <span className="text-xl font-bold text-gray-950 dark:text-white">
                            {pkg?.data_unit || "Data Plan"}
                          </span>
                        </div>
                        <SheetDemo
                          country={country}
                          data={{ data: [pkg] }}
                          selectedPackage={selectedPackage}
                          setSelectedPackage={setSelectedPackage}
                        />
                      </div>

                      <div className="flex items-center justify-between flex-wrap gap-4 mt-4 pt-2 border-t border-gray-50 dark:border-gray-800">
                        <div className="flex items-center gap-3">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="outline"
                                className="rounded-xl font-semibold"
                              >
                                {pkg?.package_validity || "1 Day"}
                                <ChevronDown className="ml-1 h-4 w-4" />
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
                              alt="Flag"
                              className="rounded-full h-6 w-6 object-cover"
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

            {/* Quantity and Actions */}
            <div className="flex w-full flex-wrap items-center gap-4 sm:gap-5 mt-2">
              <div className="flex w-36 sm:w-40 items-center border border-gray-300 dark:border-gray-700 rounded-xl overflow-hidden h-12">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="h-full w-1/3 bg-gray-100 dark:bg-gray-800 text-lg font-bold transition-colors flex items-center justify-center select-none"
                >
                  -
                </button>
                <span className="w-1/3 font-semibold text-center text-gray-800 dark:text-gray-200 text-base flex items-center justify-center h-full">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="h-full w-1/3 bg-gray-100 dark:bg-gray-800 text-lg font-bold transition-colors flex items-center justify-center select-none"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="h-12 flex-1 sm:flex-none sm:w-48 bg-white hover:bg-yellow-50 dark:bg-transparent dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-black dark:text-white font-semibold rounded-xl transition-colors flex items-center justify-center shadow-sm"
              >
                Add to Cart
              </button>

              <button className="h-12 flex-1 sm:flex-none sm:w-48 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-xl transition-colors flex items-center justify-center gap-1 shadow-sm">
                Buy Now <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 mt-16">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white mb-8">
          How Yaalo eSIM Works? <br />
          <span className="text-gray-500 dark:text-gray-400 text-xl sm:text-2xl lg:text-3xl font-medium">
            (Spoiler: It’s Ridiculously Simple)
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-20">
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
              className="bg-white dark:bg-gray-900 w-full rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-amber-400 dark:hover:border-amber-400 transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center gap-4 mb-5">
                <span className="w-10 h-10 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400 flex items-center justify-center text-xl font-bold">
                  {item.num}
                </span>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8">
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

      {/* Advantages Section */}
      <section className="w-full bg-gray-50/50 dark:bg-transparent py-16 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <div className="text-center lg:text-left max-w-3xl mb-12">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900 dark:text-white">
              What advantages does Yaalo bring for the Rwanda travel eSIM?
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
              Because of zero roaming fees and international travel eSIM for
              200+ destinations, Yaalo is the best choice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cards.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6 shadow-sm hover:shadow-lg hover:border-yellow-400 dark:hover:border-yellow-400 transition-all duration-300"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 dark:bg-yellow-950/30 text-yellow-500 flex items-center justify-center shrink-0">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
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

      {/* Instant Delivery Banner */}
      <div className="w-full max-w-[1440px] mt-10 mx-auto px-4 md:px-6">
        <div className="bg-[#393a36] rounded-[2rem] p-8 md:p-12 lg:p-16 flex justify-center shadow-xl">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-2xl text-center lg:text-left">
              <h2 className="text-white text-2xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Your Yaalo eSIM Arrives Instantly without any Hassle!
              </h2>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Once you complete your order, your Yaalo eSIM lands straight in
                your inbox or inside the Yaalo App. Just open, scan, and you’re
                online—that’s it. Within minutes, you’ll be connected across
                Rwanda with fast, reliable data that keeps you sharing,
                navigating, and streaming wherever your trip takes you.
              </p>
            </div>
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
              <img
                src="https://yaalo.com/_next/static/media/email-yellow.07mwl5kb.gdwj.svg"
                className="max-w-[240px] md:max-w-[280px] h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                alt="Compatibility Check"
              />
            </div>
          </div>
        </div>
      </div>

      {/* App Download Section */}
      <div className="mt-16 bg-[#393a36] w-full max-w-[1400px] mx-auto mb-16 px-6 md:px-12 lg:px-16 py-12 lg:py-16 overflow-hidden rounded-3xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <img
                className="h-5"
                src="https://yaalo.com/_next/static/media/5Star.a8d15048.svg"
                alt="5 Stars"
              />
              <h1 className="text-white text-xs sm:text-sm font-medium">
                50000+ Downloads
              </h1>
            </div>

            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Download The <br /> App Now
            </h1>

            <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
              To use virtual number & international calling features. Buy, setup
              and manage your eSIMs easily.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <a
                href="https://play.google.com/store/apps/details?id=com.activatewireless.app.yaalo"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://yaalo.com/_next/static/media/playLink.0hhnjxn3~uuaj.svg"
                  alt="Google Play"
                  className="h-12 hover:scale-105 transition"
                />
              </a>
              <a
                href="https://apps.apple.com/app/id6753675047"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://yaalo.com/_next/static/media/appleLink.0jfeh4f2_t3bl.svg"
                  alt="App Store"
                  className="h-12 hover:scale-105 transition"
                />
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FappInstallSS.729e81b9.png&w=1920&q=75"
              alt="App preview"
              className="w-full max-w-[400px] lg:max-w-[450px] object-contain"
            />
          </div>
        </div>
      </div>

      <Faqs />
      <Footer />
    </>
  );
}
