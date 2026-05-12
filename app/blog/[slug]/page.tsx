import Header from "@/app/components/header";
import Footer from "@/app/components/Footer";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const imageBaseUrl = "https://test.esimwhitelabel.com/";

  let blog = null;
  let res: any = null;

  try {
    const response = await fetch("https://test.esimwhitelabel.com/api/blog", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch blogs");
    res = await response.json();
    blog = res.blogs.data.find(
      (b: any) => b.slug === slug || b.id.toString() === slug,
    );
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  if (!blog) {
    return (
      <>
        <Header />
        <div className="flex flex-col items-center justify-center h-[70vh] text-center px-4">
          <h1 className="text-6xl font-black text-gray-200">404</h1>
          <p className="text-xl text-gray-600 mt-4 font-semibold">
            Maazrat! Ye blog post mojud nahi hai.
          </p>
          <a
            href="/blog"
            className="mt-8 px-8 py-3 bg-yellow-400 text-black font-bold rounded-xl"
          >
            Wapas Blogs
          </a>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pb-20 bg-gray-50/50">
        {/* 1. HERO IMAGE - Smaller & Centered */}
        <div className="w-full max-w-5xl mx-auto px-4 pt-32 mb-10 text-center">
          <div className="relative h-[250px] md:h-[100vh] w-full max-w-5xl mx-auto rounded-[2.5rem] overflow-hidden shadow-sm border border-white">
            <img
              src={`${imageBaseUrl}${blog.image}`}
              alt={blog.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. MAIN WHITE BOX (CONTENT ONLY) */}
        <div className="max-w-4xl mx-auto px-4">
          <div
            className="bg-white r
           border border-gray-100 p-6 md:p-12 overflow-hidden"
          >
            {/* Author Bar */}
            <div className="flex items-center justify-between border-b border-gray-50 pb-8 mb-10">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-100">
                  <img
                    src={
                      blog.author_image
                        ? `${imageBaseUrl}${blog.author_image}`
                        : "https://via.placeholder.com/100"
                    }
                    alt={blog.author_name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tight">
                    Written by
                  </p>
                  <p className="font-bold text-gray-800 text-sm leading-none">
                    {blog.author_name || "Yaalo Team"}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tight">
                  Published
                </p>
                <p className="text-sm font-bold text-gray-600 leading-none">
                  {new Date(blog.created_at).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>

            {/* Header Section */}
            <div className="mb-10">
              <span className="bg-yellow-400 text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
                {blog.category?.name || "Travel Tips"}
              </span>
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-6 leading-tight">
                {blog.name}
              </h1>
            </div>

            {/* Main Content */}
            <article
              className="prose prose-lg max-w-none blog-content-area text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          {res?.relateds && res.relateds.length > 0 && (
            <div className="mt-12 mb-10 max-w-3xl mx-auto px-2">
              {" "}
              {/* Yahan width control ki hai */}
              <h3 className="text-2xl font-black mb-8 text-gray-900 text-center  md:text-center">
                Mazeed Dilchasp Blogs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {" "}
                {res.relateds.slice(0, 2).map((rel: any) => (
                  <a
                    href={`/blog/${rel.slug}`}
                    key={rel.id}
                    className="group block min-h-[440px] rounded-2xl bg-white overflow-hidden border border-gray-100 transition-all duration-500"
                  >
                    {/* Image Section */}
                    <div className="relative p-2 h-64 w-full overflow-hidden">
                      <img
                        src={`${imageBaseUrl}${rel.image}`}
                        alt={rel.name}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      />
                      {/* Tag Overlay */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/90 backdrop-blur-sm text-yellow-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
                          Recommended
                        </span>
                      </div>
                    </div>

                    {/* Text Content Section */}
                    <div className="p-6 flex flex-row items-start justify-between gap-3">
                      <h3 className="font-black text-lg text-gray-900 leading-tight line-clamp-3 transition-transform duration-500 group-hover:scale-105">
                        {rel.name}
                      </h3>

                      <div className="mt-1 flex items-center flex-shrink-0">
                        <span className="text-black transition-all duration-300  group-hover:translate-x-2 group-hover:rotate-45">
                          <ArrowUpRight size={22} />
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .blog-content-area h2 { font-size: 1.5rem; font-weight: 900; margin: 30px 0 15px; color: #111; }
        .blog-content-area p { margin-bottom: 20px; font-size: 1.05rem; line-height: 1.8; color: #374151; }
        .blog-content-area ul { list-style-type: none; padding-left: 0; margin-bottom: 20px; }
        .blog-content-area li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 1rem; }
        .blog-content-area li::before { content: "•"; position: absolute; left: 0; color: #eab308; font-weight: 900; }
        /* Smaller inline images within content */
        .blog-content-area img { border-radius: 1.5rem; margin: 25px auto; width: 15%; max-width: 450px; display: block; shadow: none; }
        .blog-content-area a { color: #eab308; font-weight: 700; text-decoration: underline; }
      `,
        }}
      />
    </>
  );
};

export default BlogDetail;
