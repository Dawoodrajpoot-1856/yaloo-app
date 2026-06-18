import React from "react";
import Header from "../components/header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  ArrowDown,
  ArrowDownLeft,
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
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Cards from "../components/Cards";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Faqs from "../components/Faqs";

interface PageProps {
  params: Promise<{ id: string }>;
}

// ✅ Props ki Sahi definition
type Props = {
  country: any;
  data: any;
};

// ✅ 1. SheetDemo ko Page ke UPAR shift kar diya taake "not found" ka error khatam ho jaye
export function SheetDemo({ country, data }: Props) {
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
                key={pkg?.id || i}
                className="border rounded-xl p-4 hover:shadow-md transition bg-white dark:bg-gray-950"
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

// ✅ 2. Radio Group component bhi upar kar diya
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
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries. Get online in seconds anywhere.",
    icon: DollarSign,
  },
  {
    title: "Travel Light, Stay Connected",
    desc: "Instant coverage in 200+ countries. Get online in seconds anywhere.",
    icon: Timeline,
  },
];

// ✅ 3. Main default export function
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  console.log("Fetching data for ID on server:", id);

  let data: any = null;
  try {
    let res = await fetch(
      `https://test.esimwhitelabel.com/api/packages/country/${id}`,
    );
    data = await res.json();
  } catch (error) {
    console.error("API Fetch Error:", error);
  }

  let country: any = null;
  try {
    const response = await fetch(
      "https://test.esimwhitelabel.com/api/packages/country",
    );
    const result = await response.json();
    country = result?.data?.find((item: any) => item.id === Number(id));
  } catch (error) {
    console.log("Country Fetch Error:", error);
  }

  if (!country || !data) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-semibold text-gray-500">
          Loading or Data Not Found...
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <div className="mt-30 max-w-[1220px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-[550px] shrink-0 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 ">
            {country?.banner && (
              <img
                className="rounded-2xl w-full h-[500px] object-cover"
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
              <button className="flex items-center justify-center gap-2 rounded-xl bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-semibold text-black transition-colors whitespace-nowrap h-fit">
                <Filter className="text-black h-4 w-4" />
                Filter
              </button>
            </div>

            <div className="flex-1 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="flex flex-col gap-4 rounded-2xl border p-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1>{country?.name}</h1>
                  <span className="text-xl font-semibold">
                    {data?.data?.[0]?.data_unit || ""}
                  </span>

                  {/* ✅ Yahan SheetDemo smoothly render ho jayega */}
                  <SheetDemo country={country} data={data} />
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="outline"
                          className="rounded-xl font-semibold"
                        >
                          1 Day <ChevronDown />
                        </Button>
                      </DropdownMenuTrigger>

                      <DropdownMenuContent className="w-44">
                        <DropdownMenuLabel>Validity Period</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                          <DropdownMenuItem>1 Day</DropdownMenuItem>
                          <DropdownMenuItem>3 Days</DropdownMenuItem>
                          <DropdownMenuItem>7 Days</DropdownMenuItem>
                          <DropdownMenuItem>15 Days</DropdownMenuItem>
                          <DropdownMenuItem>30 Days</DropdownMenuItem>
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
                      {data?.data?.[0]?.price || "N/A"}
                    </h1>

                    <RadioGroupDemo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-3 w-full max-w-[1220px] rounded-xl mx-auto mt-5 border border-gray-300 px-4">
        <div className="flex flex-row gap-2">
          <button className="p-3 rounded-2xl font-semibold  bg-yellow-400">
            Technical Specs
          </button>
          <button className="p-3 rounded-2xl bg-gray-100 font-semibold ">
            Features
          </button>
          <button className="p-3 rounded-2xl font-semibold  bg-gray-100">
            Description
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[1220px] p-6 border border-gray-300 mx-auto rounded-xl my-5 px-4">
        <h1 className="font-semibold text-lg">
          Our Virtual SIM Specifications
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Internet Speed:</h1>
        <h1 className="font-semibold text-gray-600 text-sm">
          Tethering / Mobile Hotspot:
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">
          Data Options: {data?.activation_type_description || "N/A"}
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Usage Duration</h1>
        <h1 className="font-semibold text-gray-600 text-sm">Phone Number:</h1>
        <h1 className="font-semibold text-gray-600 text-sm">
          Subscription Type:
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Text Messages:</h1>
        <h1 className="font-semibold text-gray-600 text-sm">
          Activation/Start-Up:{" "}
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Service Area: </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Delivery Time: </h1>
        <h1 className="font-semibold text-gray-600 text-sm">
          ID/eKYC Required:
        </h1>
        <h1 className="font-semibold text-gray-600 text-sm">Shipping: </h1>
      </div>

      <div className="max-w-[1220px] mx-auto px-4 mt-10">
        <h1 className="font-semibold text-3xl md:text-5xl">
          How Yaalo eSIM Works? <br />
          (Spoiler: It’s Ridiculously Simple)
        </h1>
        <p className="mt-4 font-medium text-gray-600 ">
          Users often assume that technical processes are complex. But
          activating Yaalo eSIM is like 1, 2, 3 and connected!
        </p>
      </div>

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

      <div className="max-w-[1220px] mx-auto px-4 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-3xl border border-gray-200 bg-white p-6 min-h-[240px] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-yellow-50 text-yellow-500 flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-10 bg-[#393a36] w-full max-w-[1220px] mx-auto px-6 md:px-14 py-12 md:py-16 rounded-[32px] overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="max-w-[600px] text-center lg:text-left">
            <h2 className="text-white text-2xl md:text-4xl font-semibold leading-tight">
              Your Yaalo eSIM Arrives Instantly Without Any Hassle!
            </h2>
            <p className="text-gray-300 mt-5 text-sm md:text-lg leading-7">
              Once you complete your order, your Yaalo eSIM lands straight in
              your inbox or inside the Yaalo App. Just open, scan, and you're
              online. Within minutes, you'll be connected across Bermuda with
              fast and reliable data that keeps you sharing, navigating, and
              streaming wherever your trip takes you.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://yaalo.com/_next/static/media/email-yellow.07mwl5kb.gdwj.svg"
              alt="Email Delivery"
              className="w-full max-w-[350px] object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 bg-[#393a36] w-full max-w-[1220px] mx-auto px-6 md:px-14 py-12 md:py-16 rounded-[32px] overflow-hidden mb-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
          <div className="max-w-xl text-center lg:text-left">
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
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
              Download The <br /> App Now
            </h1>
            <p className="text-white mt-4 md:mt-6 text-xs sm:text-sm md:text-lg leading-6">
              To use virtual number & international calling features. Buy, setup
              and manage your eSIMs easily.
            </p>
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
