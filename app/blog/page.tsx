import { Search } from "lucide-react";
import Header from "../components/header";
import Footer from "../components/Footer";
import Link from "next/link";

const page = async () => {
  const data = await fetch("https://test.esimwhitelabel.com/api/blog");
  const res = await data.json();

  // Arrays ko nikalna
  const blogList = res.blogs.data; // Main blogs
  const categoryList = res.categories; // Filter buttons ke liye

  console.log(blogList);

  return (
    <>
      {/* HERO */}
      <div
        className="h-[60vh] bg-cover bg-center bg-no-repeat relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://yaalo.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FheroBackground.92b9c510.png&w=1920&q=100')",
        }}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute top-0 left-0 w-full z-50">
          <Header />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-5xl px-4 mt-10 text-black">
          <h1 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight">
            <span className="text-yellow-300">Yaalo eSIM</span> Roam the <br />
            World, Not the Fees
          </h1>

          {/* SEARCH */}
          <div className="relative h-12 sm:h-14 w-full max-w-xl mx-auto mt-6">
            <input
              type="text"
              placeholder="Search your blog"
              className="w-full pl-4 pr-10 py-2 sm:py-3 border border-gray-200 rounded-3xl bg-white outline-none text-sm sm:text-base"
            />

            <Search
              className="absolute right-4 top-1/2 -translate-y-1/2 text-yellow-400"
              size={18}
            />
          </div>
        </div>
      </div>

      <div className="w-[1320px]  bg-gray-50 border border-gray-200 rounded-2xl mt-5 mx-auto">
        <div className="flex gap-3 p-4 min-w-full   ">
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            All Blogs
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Info
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            eSIM
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Android
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Iphone{" "}
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            How To
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Troubleshooting
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Digital Nomads
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Travel Tips
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            Visas{" "}
          </button>
          <button className="px-5 py-3 bg-white text-black rounded-lg shadow-sm hover:shadow-md transition-shadow shrink-0">
            SIM Card Guides
          </button>
        </div>
      </div>
      <div className="w-[1320px] mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogList.map((item: any, index: any) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {item.image && (
              <img
                src={`https://test.esimwhitelabel.com/${item.image}`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            <div className="p-4">
              <h2 className="text-lg font-semibold text-black line-clamp-2">
                {item.name}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-3">
                {item.sub_content || item.content}
              </p>
              <Link href={`/blog/${item.slug}`}>
                <button className="mt-4 px-4 py-2 bg-black text-white rounded-lg text-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default page;
