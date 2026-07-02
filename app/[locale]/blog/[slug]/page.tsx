import Header from "@/components/header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";

const BlogDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const imageBaseUrl = "https://test.esimwhitelabel.com/";

  let blogImage = "";
  let blogName = "What Happens When You Switch SIM Cards?";

  try {
    const response = await fetch("https://test.esimwhitelabel.com/api/blog", {
      cache: "no-store",
    });
    if (response.ok) {
      const res = await response.json();
      const blog = res.blogs.data.find(
        (b: any) => b.slug === slug || b.id.toString() === slug,
      );
      if (blog) {
        blogImage = blog.image;
        blogName = blog.name;
      }
    }
  } catch (error) {
    console.error("Fetch Error:", error);
  }

  // Related Blogs Data Array
  const sampleBlogs = [
    {
      id: 1,
      slug: "what-happens-when-you-switch-sim-cards-data-contacts",
      title: "What Happens When You Switch SIM Cards?",
      tag: "SIM Guide",
      image:
        "https://yaalo.com/_next/image/?url=https%3A%2F%2Fplatform.yaalo.com%2Ftenancy%2Fassets%2Fimages%2Fblogs%2Fimages%2Fwhat-happens-when-you-switch-sim-cards-data-contacts_image_1782128829.webp&w=1920&q=70",
    },
    {
      id: 2,
      slug: "wifi-vs-cellular-data-which-internet-connection-is-better",
      title: "Wi-Fi vs Cellular Data: Which Internet Connection is Better?",
      tag: "Connectivity",
      image:
        "https://yaalo.com/_next/image/?url=https%3A%2F%2Fplatform.yaalo.com%2Ftenancy%2Fassets%2Fimages%2Fblogs%2Fimages%2Fwifi-vs-cellular-data-which-internet-connection-is-better_image_1781870811.webp&w=1920&q=70",
    },
    {
      id: 3,
      slug: "what-is-stored-on-a-sim-card-data-contacts-network-info",
      title: "What is Stored on a SIM Card? Data, Contacts & Network Info",
      tag: "Tech Tips",
      image:
        "https://yaalo.com/_next/image/?url=https%3A%2F%2Fplatform.yaalo.com%2Ftenancy%2Fassets%2Fimages%2Fblogs%2Fimages%2Fwhat-is-stored-on-a-sim-card-data-contacts-network-info_image_1781762647.webp&w=1920&q=70",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pb-12 md:pb-20 bg-gray-50/50">
        {/* 1. HERO IMAGE - Dynamic Source from API */}
        <div className="w-full max-w-5xl mx-auto px-4 pt-24 md:pt-32 mb-6 md:mb-10 text-center">
          <div className="relative h-[220px] sm:h-[350px] md:h-[500px] w-full max-w-5xl mx-auto rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-sm border border-white">
            <img
              src={
                blogImage
                  ? `${imageBaseUrl}${blogImage}`
                  : "https://test.esimwhitelabel.com/uploads/blog/default.jpg"
              }
              alt={blogName}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* 2. MAIN WHITE BOX */}
        <div className="max-w-4xl mx-auto px-4 mb-16">
          <div className="bg-white rounded-2xl md:rounded-3xl border border-gray-100 p-5 sm:p-8 md:p-12 overflow-hidden">
            {/* Author Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-100 pb-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gray-100 flex-shrink-0">
                  <img
                    src="https://via.placeholder.com/100"
                    alt="Yaalo Team"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tight">
                    Written by
                  </p>
                  <p className="font-bold text-gray-800 text-sm leading-none mt-0.5">
                    Yaalo Team
                  </p>
                </div>
              </div>
              <div className="sm:text-right">
                <p className="text-[9px] text-gray-400 uppercase font-bold tracking-tight">
                  Published
                </p>
                <p className="text-sm font-bold text-gray-600 leading-none mt-0.5">
                  June 24, 2026
                </p>
              </div>
            </div>

            {/* Title Section */}
            <div className="mb-8">
              <span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest">
                SIM Guide
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-gray-900 mt-4 leading-tight">
                {blogName}
              </h1>
            </div>

            {/* Main Content Area */}
            <article className="prose prose-sm sm:prose-base md:prose-lg max-w-none blog-content-area text-gray-800">
              <p>
                Let's be honest. Most people have no idea what actually happens
                when they switch the SIM card. What about your data when you
                change your current SIM card to a new one? They may lose
                contacts, photos, and WhatsApp history. That fear makes sense.
              </p>
              <p>
                These are real confusions. Whether you're switching to a new
                carrier, upgrading your phone, or heading abroad, here's exactly
                what to expect. In this guide, I will discuss what you can
                actually lose while switching SIM cards.
              </p>

              <h2>What Is a SIM Card Doing in There?</h2>
              <p>
                Your SIM card doesn’t store the whole data of your mobile phone.
                It's not holding your photos, apps, or texts. SIM's major
                function is to tell the network who you are and keep your device
                connected to the data.
              </p>
              <p>
                It's basically your phone's membership card to your carrier's
                network. When you insert it in your phone, the network
                recognizes it and allows calling, texting, and data connection.
                When you pull it out of the device, the connection drops.
              </p>
              <p>
                The technical name is{" "}
                <strong>Subscriber Identity Module</strong>. Which means “this
                chip proves you're a paying customer on this network."
              </p>

              <h2>What Actually Happens When You Switch?</h2>
              <p>
                When you switch the SIM card, your phone number changes. That's
                the major event that happens.
              </p>
              <p>
                The number is not linked to your mobile phone; it directly lives
                on the SIM card. So wherever that SIM goes, your number follows.
                If you switch from your current phone to a new phone with the
                same SIM card, the old number still rings.
              </p>
              <p>
                The most obvious question people ask about switching the SIM is,{" "}
                <em>"Will switching the SIM affect my photos and apps?"</em>{" "}
                Your notes, music, WhatsApp chats, and photos all remain the
                same.
              </p>
              <p>
                If you are wondering what is stored on a SIM card, it only has
                somewhere between 8KB and 256KB of storage. It is not designed
                to carry your digital life around, as it mainly carries your
                network identity, and that's all it does.
              </p>

              <h2>What Does (and Doesn't) Transfer?</h2>
              <p>Here is what transfers when you switch SIM cards:</p>
              <ul>
                <li>Your phone number</li>
                <li>Your carrier's network access</li>
                <li>Contacts saved directly on the SIM</li>
                <li>
                  Your data plan and billing information associated with that
                  SIM
                </li>
              </ul>

              <p>What stays behind on your old phone:</p>
              <ul>
                <li>Photos and videos</li>
                <li>Apps and app data</li>
                <li>
                  Text message history (SMS is stored on the device, not the
                  SIM)
                </li>
                <li>Wi-Fi passwords and settings</li>
                <li>
                  WhatsApp, Signal, and other chat app history (unless you back
                  them up separately)
                </li>
              </ul>
              <p>
                Switching SIM cards won't move your Instagram archive or your
                saved Spotify playlists.
              </p>

              <h2>
                Your Contacts Situation Is Probably Fine: But Check Anyway
              </h2>
              <p>
                iPhones store contacts in the cloud, not on the SIM. iCloud,
                Google, Samsung account, whatever you're using. If your contacts
                are synced there, they'll show up on any device you sign into.
                SIM swap doesn't touch them.
              </p>
              <p>
                If you are saving contacts directly to the SIM, it might be
                risky. Some people still do this, especially if they've had the
                same phone for years. In that case, go into your contacts app,
                check where they're saved, and import them to your Google or
                iCloud account first.
              </p>

              <h2>Switching Carriers? Here's What Changes</h2>
              <p>
                If you're switching to a completely different carrier, that's a
                different process.
              </p>
              <p>
                You'll get a new physical SIM card from the new provider. Your
                old SIM goes inactive. And your plan data allowance, call
                minutes, and shifts on the new network.
              </p>
              <p>
                Now, the network part matters more than people realize. If your
                new carrier offers a 5G network in your area and your phone
                supports it, you might have faster speeds. If you're downgrading
                to a smaller carrier with patchier coverage, you'll notice that
                too.
              </p>
              <p>
                One thing more to remember is that you should not cancel your
                old account before your number finishes porting. That is a real
                mistake people make. Transferring your existing number to the
                new carrier takes time, maybe a few hours or a day. If you shut
                off your old account mid-port, the whole process can get messy.
              </p>

              <h2>
                WhatsApp, iMessage, and the Apps That Make Things Complicated
              </h2>
              <p>
                WhatsApp ties to your phone number. So if you're keeping the
                same number, just switching phones or carriers, WhatsApp keeps
                working. You just need to back up your chat history before the
                switch. Otherwise, the messages may be gone.
              </p>
              <p>
                If you are switching from iPhone to Android, turn off iMessage
                before you remove the SIM. If you don't, messages from iPhone
                users will still try to route to your old iMessage address. And
                it led to disappearing messages.
              </p>

              <h2>
                Traveling Internationally? Your SIM Card Becomes a Cost Decision
              </h2>
              <p>
                International roaming charges are high for the data connection.
                Leave your home carrier's SIM in while abroad. You can end up
                paying per megabyte for data, or per minute for calls.
              </p>
              <p>
                The alternative is a local SIM at the destination. Your home
                number goes offline while it's out, but you get local rates and
                a working local number.
              </p>
              <p>
                <strong>eSIM</strong> is a modern and more effective approach
                you can use to access a fast network connection. You add the
                plan digitally, and your phone handles two numbers
                simultaneously. <strong>Yaalo</strong> is a trusted global
                network carrier that offers eSIM plans for 200+ countries. You
                can get your eSIM and stay connected in your destination country
                throughout the trip.
              </p>

              <h2>Does Switching a SIM Affect Your Phone's Performance?</h2>
              <p>
                No, the SIM does nothing to your processor. Your camera quality,
                battery life, Wi-Fi connection, or operating system performance
                remains stable. It's purely a network authentication tool.
                Swapping SIM cards is the key to a different front door while
                the house stays exactly the same.
              </p>
              <p>
                Your Wi-Fi still works without a SIM. You can still take photos
                and edit them, and do everything except make cellular calls or
                use mobile data.
              </p>

              <h2>Before You Switch: A Quick Checklist</h2>
              <p>Takes five minutes and saves a lot of frustration.</p>
              <ul>
                <li>
                  Back up your contacts to Google or iCloud; don't rely on the
                  SIM card alone.
                </li>
                <li>
                  Back up WhatsApp and any other chat apps you care about.
                </li>
                <li>
                  If switching from iPhone to Android, turn off iMessage first.
                </li>
                <li>
                  Check that your phone is unlocked if you're changing carriers.
                </li>
                <li>Confirm the SIM card size matches your new phone.</li>
                <li>
                  Keep your old SIM active until your number has fully ported.
                </li>
              </ul>

              <h2>Conclusion</h2>
              <p>
                Switching SIM cards sounds more complicated than it is. The
                actual process is pop out, slide in, power on, and it just takes
                under a minute. Before switching the SIM, ensure to back up your
                data. Check your unlock status. Understand that the SIM carries
                your number and network access, not your memories. Do that, and
                you're genuinely fine.
              </p>

              <h2>FAQs</h2>
              <p>
                <strong>
                  Does my phone number change when I get a new SIM?
                </strong>
                <br />
                If a new number is assigned to it, the number changes. Moving
                your existing SIM to a different phone keeps your number.
              </p>
              <p>
                <strong>Will I still get 5G after switching SIM cards?</strong>
                <br />
                It depends on the carrier and your phone, not the SIM card. If
                your new carrier has 5G network coverage where you are and your
                phone's hardware supports 5G, you'll get it.
              </p>
              <p>
                <strong>
                  What should I do if I lose my phone and someone finds the SIM?
                </strong>
                <br />
                You need to call your carrier immediately. They can deactivate
                the SIM remotely. This matters because whoever has your SIM has
                your number, which means they can receive SMS verification codes
                for banking apps, WhatsApp, and other services.
              </p>
            </article>
          </div>
        </div>

        {/* 3. RELATED BLOG CARDS GRID SECTION */}
        <div className="max-w-6xl mx-auto px-4 py-12 border-t border-gray-100">
          <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-8 px-2">
            Recommended Reads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleBlogs.map((item) => (
              <a
                href={`/blog/${item.slug}`}
                key={item.id}
                className="group block rounded-2xl bg-white overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-lg hover:shadow-gray-100"
              >
                {/* Image Wrap */}
                <div className="relative p-2 h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-yellow-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-sm">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Text Wrap */}
                <div className="p-5 flex flex-row items-start justify-between gap-3">
                  <h3 className="font-black text-base md:text-lg text-gray-900 leading-snug line-clamp-3 transition-colors duration-300 group-hover:text-yellow-600">
                    {item.title}
                  </h3>
                  <div className="mt-1 flex items-center flex-shrink-0 bg-gray-50 p-2 rounded-full transition-colors group-hover:bg-yellow-400">
                    <span className="text-black transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:rotate-45">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .blog-content-area h2 { font-size: 1.3rem; font-weight: 900; margin: 30px 0 15px; color: #111; }
        @media (min-width: 768px) { .blog-content-area h2 { font-size: 1.75rem; } }
        
        .blog-content-area p { margin-bottom: 16px; font-size: 1rem; line-height: 1.75; color: #374151; }
        @media (min-width: 768px) { .blog-content-area p { margin-bottom: 20px; font-size: 1.05rem; line-height: 1.8; } }
        
        .blog-content-area ul { list-style-type: none; padding-left: 0; margin-bottom: 20px; }
        .blog-content-area li { position: relative; padding-left: 20px; margin-bottom: 8px; font-size: 1rem; color: #374151; line-height: 1.6; }
        .blog-content-area li::before { content: "•"; position: absolute; left: 0; color: #eab308; font-weight: 900; }
        
        .blog-content-area strong { color: #11151c; font-weight: 700; }
        .blog-content-area a { color: #eab308; font-weight: 700; text-decoration: underline; }
      `,
        }}
      />
    </>
  );
};

export default BlogDetail;
