import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Adventures = async () => {
  const data = await fetch(
    "https://test.esimwhitelabel.com/api/packages/country",
    { next: { revalidate: 3600 } },
  );
  const res = await data.json();

  const rawData = res.data || [];

  const uniqueCountries = Array.from(
    new Map(rawData.map((item: any) => [item.name, item])).values(),
  );

  const CountryList = uniqueCountries.sort(() => 0.5 - Math.random());

  return (
    <section className="max-w-[1450px] mx-auto px-4 sm:px-6 py-16">
      <h1 className="font-semibold text-3xl ml-4 sm:text-5xl">
        Pick Your Adventure
      </h1>

      <p className="mt-4 ml-4 font-medium text-gray-700">
        Find Yaalo eSIMs built for your route
      </p>

      {/* TABS & SEARCH */}
      <div className="flex flex-col ml-4 lg:flex-row lg:justify-between gap-6 mt-8">
        <div className="border border-gray-200 p-1 rounded-2xl flex flex-wrap gap-1 w-full sm:w-[415px]">
          <button className="bg-yellow-300 font-medium p-2 w-33 rounded-2xl">
            Local
          </button>
          <button className="font-medium p-3 w-33 rounded-2xl hover:bg-gray-50 transition">
            Regional
          </button>
          <button className="font-medium p-3 w-33 rounded-2xl hover:bg-gray-50 transition">
            Global
          </button>
        </div>

        <Link href="/destinations">
          <div className="group inline-flex items-center justify-center mr-5 gap-2 px-4 h-12 rounded-2xl bg-yellow-300 hover:bg-black transition-all duration-300 cursor-pointer w-full sm:w-fit">
            <span className="text-sm font-medium text-black group-hover:text-white">
              Search your destination
            </span>
            <span className="relative w-5 h-5 flex items-center justify-center overflow-hidden">
              <ArrowUpRight
                size={16}
                className="absolute text-black group-hover:opacity-0 group-hover:-translate-y-3 transition-all"
              />
              <ArrowRight
                size={16}
                className="absolute opacity-0 translate-y-3 text-white group-hover:opacity-100 group-hover:translate-y-0 transition-all"
              />
            </span>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 px-4">
        {CountryList.slice(0, 20).map((item: any, i: number) => (
          <Link key={item.id || i} href={String(item.id)}>
            <div
              /* items-center yahan se hata diya hai taake content niche align ho sake */
              className="w-full border border-gray-200 rounded-2xl p-5 flex justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-white group cursor-pointer"
            >
              <div className="flex flex-col items-start">
                <img
                  src={
                    item.image ||
                    `https://flagcdn.com/w80/${item.slug?.slice(0, 2).toLowerCase()}.png`
                  }
                  className="h-7 w-10 rounded object-cover shadow-sm mb-3"
                  alt={item.name}
                />
                <p className="text-sm font-bold text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-500 font-medium">
                  Starts at {item.starting_price || "$5"}
                </p>
              </div>

              {/* self-end add kiya hai arrow ko niche lane ke liye */}
              <span className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center self-end transition-colors">
                <ChevronRight size={18} className="text-black" />
              </span>
            </div>
          </Link>
        ))}
      </div>
      {/* INFO FOOTER */}
      <div className="mt-20 px-4">
        <h2 className="text-3xl sm:text-5xl font-semibold leading-tight text-gray-900">
          How Yaalo eSIM Works? <br />
          <span className="text-gray-400">
            (Spoiler: It’s Ridiculously Simple)
          </span>
        </h2>
        <p className="text-base text-gray-600 mt-6 max-w-3xl leading-relaxed">
          Users often assume that technical processes are complex. But
          activating{" "}
          <span className="font-semibold text-black underline decoration-yellow-400">
            Yaalo eSIM
          </span>{" "}
          is like 1, 2, 3 and connected!
        </p>
      </div>
    </section>
  );
};

export default Adventures;

// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/Footer";

// interface Package {
//   id: string | number;
//   name: string;
//   data: string;
//   validity: string;
//   price: number;
// }

// interface CountryData {
//   country_name: string;
//   packages: Package[];
// }

// interface PageProps {
//   params: Promise<{ id: string }>;
// }

// // Data fetching function
// async function getCountryPackages(id: string): Promise<CountryData | null> {
//   try {
//     const res = await fetch(
//       `https://test.esimwhitelabel.com/api/packages/country/${id}`,
//     );

//     if (!res.ok) {
//       console.log(`API response error! Status: ${res.status}`);
//       return null;
//     }

//     const data = await res.json();

//     // 🔴 DEBUGGING: Terminal/Console mein check karein data kaisa aa raha hai
//     console.log("API Response Data:", data);

//     return data;
//   } catch (error) {
//     console.log("Error fetching packages:", error);
//     return null;
//   }
// }

// export default async function Page({ params }: PageProps) {
//   const { id } = await params;
//   const data = await getCountryPackages(id);

//   // Agar data nahi mila ya packages khali hain
//   if (!data || !data.packages || data.packages.length === 0) {
//     return (
//       <>
//         <Header />
//         <div className="flex min-h-screen items-center justify-center">
//           <p className="text-xl font-semibold text-gray-500">
//             No packages found for country ID: "{id}".
//           </p>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   // Agar data mil gaya to poora page data ke sath
//   return (
//     <>
//       <Header />
//       <main className="container mx-auto px-4 py-8 min-h-screen">
//         <div className="mb-8 border-b pb-4">
//           <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
//             {data.country_name || `Country: ${id}`} Packages
//           </h1>
//           <p className="mt-2 text-sm text-gray-500">
//             Choose the best eSIM plan for your travel needs.
//           </p>
//         </div>

//         {/* Packages Grid */}
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {data.packages.map((pkg) => (
//             <div
//               key={pkg.id}
//               className="flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950"
//             >
//               <div>
//                 <h3 className="text-lg font-bold text-gray-900 dark:text-white">
//                   {pkg.name}
//                 </h3>

//                 <div className="mt-4 space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-500">Data:</span>
//                     <span className="font-semibold text-gray-800 dark:text-gray-200">
//                       {pkg.data}
//                     </span>
//                   </div>
//                   <div className="flex justify-between text-sm">
//                     <span className="text-gray-500">Validity:</span>
//                     <span className="font-semibold text-gray-800 dark:text-gray-200">
//                       {pkg.validity}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
//                 <div className="flex items-baseline justify-between">
//                   <span className="text-2xl font-extrabold text-gray-900 dark:text-white">
//                     ${pkg.price}
//                   </span>
//                   <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition-colors">
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }
