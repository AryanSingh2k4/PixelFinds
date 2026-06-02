import { getAllPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";

type CategoryParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: CategoryParams): Promise<Metadata> {
  const params = await props.params;
  const slug = params.slug.toLowerCase();
  const details = CATEGORY_MAP[slug];

  if (!details) {
    return notFound();
  }

  return {
    title: details.title,
    description: details.desc,
    alternates: {
      canonical: `/category/${slug}`,
    },
    openGraph: {
      title: `${details.title} | PixelFinds`,
      description: details.desc,
      url: `https://pixelfinds.vercel.app/category/${slug}`,
      images: [{ url: details.image }],
    },
  };
}


// Map URL slugs to clean titles and descriptions
const CATEGORY_MAP: Record<string, { title: string; desc: string; image: string }> = {
  gadgets: {
    title: "Gadgets",
    desc: "Expert reviews, hands-on testing, and the latest news on consumer electronics. From high-performance peripherals to smart home innovations, we help you find the best tech for your lifestyle.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600",
  },
  "study-setup": {
    title: "Study Setup",
    desc: "Boost your educational focus and cognitive performance with optimized desk layouts, task lighting, organizational tools, and ergonomic essentials tailored for student life.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
  },
  productivity: {
    title: "Productivity",
    desc: "Work smarter, not harder. Discover the best hardware accessories, keyboard setups, software hubs, and time-tracking instruments designed to maximize your daily professional workflow.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600",
  },
  "mobile-accessories": {
    title: "Mobile Accessories",
    desc: "Unleash the full potential of your smartphone. Explore ultra-fast chargers, protective armor cases, high-fidelity wireless audio, and essential everyday carry attachments.",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600",
  },
  "amazon-finds": {
    title: "Amazon Finds",
    desc: "Curated list of budget-friendly hidden treasures, ingenious desktop organization products, and high-value accessories sourced directly from Amazon with verified buyer feedback.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=600",
  },
  "desk-setup": {
    title: "Desk Setup",
    desc: "Premium home workspace design. Get inspired by minimalist aesthetics, custom lighting, cable organization setups, and wood/felt desktop enhancements.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
  },
  phones: {
    title: "Phones",
    desc: "In-depth flagship smartphone reviews, head-to-head camera comparisons, performance analyses, and buying guides covering the best Android and iOS devices.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
  },
  "buying-guides": {
    title: "Buying Guides",
    desc: "Handpicked product recommendations, critical checklists, and detailed research reports to help you purchase the best hardware and workspace accessories.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=600",
  },
  "quick-recommendations": {
    title: "Quick Recommendations",
    desc: "High-impact gadget roundups, setup checklists, and fast specifications summaries to elevate your tech setup instantly.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600",
  },
};

export default async function CategoryPage(props: CategoryParams) {
  const params = await props.params;
  const slug = params.slug.toLowerCase();

  const categoryDetails = CATEGORY_MAP[slug];
  if (!categoryDetails) {
    return notFound();
  }

  // Filter posts matching the current category
  const allPosts = getAllPosts();
  const filteredPosts = allPosts.filter(
    (post) => post.category?.toLowerCase().replace(" ", "-") === slug
  );

  // If no posts yet, fallback or show placeholders
  const featuredPost = filteredPosts[0] || allPosts[0];
  const listPosts = filteredPosts.length > 0 ? filteredPosts : allPosts.slice(0, 4);

  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg bg-background text-on-surface">
      {/* Category Header */}
      <section className="mb-stack-lg">
        <nav className="flex gap-2 text-caption font-sans text-on-surface-variant mb-4">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <span>/</span>
          <span className="text-primary font-semibold font-headline">{categoryDetails.title}</span>
        </nav>
        <h1 className="font-headline text-[40px] font-extrabold text-on-surface mb-2">{categoryDetails.title}</h1>
        <p className="text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          {categoryDetails.desc}
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-stack-lg mt-8">
        
        {/* Sticky Desktop Guide Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 shrink-0 sticky top-24 h-fit gap-stack-md p-stack-md bg-surface-container-low rounded-xl border border-outline-variant/30 shadow-soft">
          <div className="mb-2 px-1">
            <h3 className="font-headline text-lg font-bold text-primary">Explore</h3>
            <p className="font-sans text-caption text-on-surface-variant">Category Index</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <Link className="flex items-center gap-2 text-primary font-bold border-l-4 border-primary pl-2.5 font-headline text-sm py-2 hover:bg-surface-container rounded-r" href="#">
              <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
              Featured Review
            </Link>
            <Link className="flex items-center gap-2 text-on-surface-variant pl-3.5 font-headline text-sm py-2 hover:bg-surface-container rounded" href="#feed">
              <span className="material-symbols-outlined text-[20px]">feed</span>
              Recent Reviews
            </Link>
            <Link className="flex items-center gap-2 text-on-surface-variant pl-3.5 font-headline text-sm py-2 hover:bg-surface-container rounded" href="#deals">
              <span className="material-symbols-outlined text-[20px]">local_offer</span>
              Hot Deals Today
            </Link>
          </div>
          <div className="mt-4 pt-4 border-t border-outline-variant/30">
            <Link 
              href="/" 
              className="w-full bg-[#3A57EA] text-white py-3 rounded-xl font-headline font-bold text-xs flex items-center justify-center gap-2 hover:bg-[#2940B5] active:scale-95 transition-all text-center"
            >
              <span className="material-symbols-outlined text-[16px] text-white">home</span>
              Back to Home
            </Link>
          </div>
        </aside>

        {/* Dynamic Content Area */}
        <div className="flex-1 min-w-0 space-y-section-gap">
          
          {/* Featured Post Card */}
          {featuredPost && (
            <Link href={`/posts/${featuredPost.slug}`}>
              <article className="relative group h-[460px] rounded-2xl overflow-hidden shadow-soft cursor-pointer transition-all duration-500 hover:shadow-md border border-outline-variant/25">
                <img 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src={featuredPost.ogImage?.url || featuredPost.coverImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                  <div className="flex gap-2 mb-4">
                    <span className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold font-headline uppercase tracking-wider">
                      Featured Review
                    </span>
                    {featuredPost.rating && (
                      <span className="bg-primary text-on-primary px-3 py-1 rounded-full text-[10px] font-bold font-headline uppercase tracking-wider">
                        ★ {featuredPost.rating} Rating
                      </span>
                    )}
                  </div>
                  <h2 className="font-headline text-2xl md:text-3xl font-extrabold text-white mb-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-200 text-sm max-w-xl mb-4 line-clamp-2">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-white/80 font-sans text-xs">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">schedule</span> 
                      {featuredPost.readingTime || "8 min read"}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]">calendar_today</span> 
                      {new Date(featuredPost.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          )}

          {/* Filter Row */}
          <div className="flex flex-wrap items-center justify-between gap-stack-md border-b border-outline-variant/30 pb-4">
            <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
              <button className="bg-primary text-on-primary px-5 py-2 rounded-full font-headline font-bold text-xs shadow-sm">
                All {categoryDetails.title}
              </button>
              <button className="bg-surface-container-high text-on-surface-variant hover:text-primary px-5 py-2 rounded-full font-headline font-bold text-xs transition-colors">
                Buying Guides
              </button>
              <button className="bg-surface-container-high text-on-surface-variant hover:text-primary px-5 py-2 rounded-full font-headline font-bold text-xs transition-colors">
                Reviews
              </button>
            </div>
            <div className="flex items-center gap-2 text-on-surface-variant text-xs">
              <span className="font-headline font-bold">Sort by:</span>
              <select className="bg-transparent border-none font-headline font-bold focus:ring-0 cursor-pointer">
                <option>Latest Reviews</option>
                <option>Most Popular</option>
                <option>Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Recent Reviews Grid */}
          <section id="feed" className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg scroll-mt-20">
            {listPosts.map((post) => (
              <Link key={post.slug} href={`/posts/${post.slug}`} className="group block cursor-pointer">
                <div>
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-soft bg-surface-dim border border-outline-variant/20">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={post.coverImage} 
                      alt={post.title}
                    />
                    {post.rating && (
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                        <span className="material-symbols-outlined text-tertiary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        <span className="font-headline font-bold text-on-surface text-xs">{post.rating}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-headline text-lg font-bold text-on-surface mb-2 group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-on-surface-variant text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex gap-2">
                    <span className="bg-green-500/10 text-green-700 px-3 py-1 rounded-full text-[11px] font-headline font-bold">
                      Verified Review
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </section>

          {/* Hot Deals Section */}
          <section id="deals" className="bg-white rounded-2xl p-stack-lg shadow-soft border border-outline-variant/30 scroll-mt-20">
            <div className="flex items-center gap-2 mb-stack-md">
              <span className="material-symbols-outlined text-secondary">local_offer</span>
              <h2 className="font-headline text-xl font-bold text-on-surface">Hot Gadget Deals Today</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Deal 1 */}
              <div className="flex gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors group border border-outline-variant/20">
                <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 p-1 border border-outline-variant/40">
                  <img 
                    alt="Earbuds" 
                    className="w-full h-full object-contain" 
                    src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=150" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="font-headline font-bold text-xs text-on-surface truncate">AirPods Pro (2nd Gen)</p>
                    <p className="text-secondary font-headline font-bold text-xs bg-secondary/10 px-2 py-0.5 rounded w-fit mt-1">
                      Check Live Offer
                    </p>
                  </div>
                  <a className="text-primary font-headline font-bold text-[11px] flex items-center gap-1 group-hover:underline" href="https://www.amazon.com/dp/B08GP8J7N6?tag=pixelfinds-20" target="_blank" rel="nofollow noopener noreferrer">
                    View Deal <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Deal 2 */}
              <div className="flex gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors group border border-outline-variant/20">
                <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 p-1 border border-outline-variant/40">
                  <img 
                    alt="Gaming Mouse" 
                    className="w-full h-full object-contain" 
                    src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&q=80&w=150" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="font-headline font-bold text-xs text-on-surface truncate">Logitech G Pro Superlight</p>
                    <p className="text-secondary font-headline font-bold text-xs bg-secondary/10 px-2 py-0.5 rounded w-fit mt-1">
                      Check Live Offer
                    </p>
                  </div>
                  <a className="text-primary font-headline font-bold text-[11px] flex items-center gap-1 group-hover:underline" href="https://www.amazon.com/dp/B09V7M2P3G?tag=pixelfinds-20" target="_blank" rel="nofollow noopener noreferrer">
                    View Deal <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>

              {/* Deal 3 */}
              <div className="flex gap-4 p-4 rounded-xl bg-surface hover:bg-surface-container-low transition-colors group border border-outline-variant/20">
                <div className="w-16 h-16 bg-white rounded-lg flex-shrink-0 p-1 border border-outline-variant/40">
                  <img 
                    alt="Power Bank" 
                    className="w-full h-full object-contain" 
                    src="https://images.unsplash.com/photo-1609592424109-dd9892f1b17c?auto=format&fit=crop&q=80&w=150" 
                  />
                </div>
                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <p className="font-headline font-bold text-xs text-on-surface truncate">Anker 737 Power Bank</p>
                    <p className="text-secondary font-headline font-bold text-xs bg-secondary/10 px-2 py-0.5 rounded w-fit mt-1">
                      Check Live Offer
                    </p>
                  </div>
                  <a className="text-primary font-headline font-bold text-[11px] flex items-center gap-1 group-hover:underline" href="https://www.amazon.com/dp/B08GP8J7N6?tag=pixelfinds-20" target="_blank" rel="nofollow noopener noreferrer">
                    View Deal <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </a>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

// Next.js static generation parameters
export async function generateStaticParams() {
  return [
    { slug: "gadgets" },
    { slug: "study-setup" },
    { slug: "productivity" },
    { slug: "mobile-accessories" },
    { slug: "amazon-finds" },
    { slug: "desk-setup" },
    { slug: "phones" },
    { slug: "buying-guides" },
    { slug: "quick-recommendations" },
  ];
}
