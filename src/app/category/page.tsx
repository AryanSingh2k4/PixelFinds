import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Browse Tech Categories | PixelFinds",
  description: "Explore all buying guides, tech reviews, study setup ideas, and amazon finds categorized by topic on PixelFinds.",
  alternates: {
    canonical: "https://pixelfinds.vercel.app/category",
  },
};

const CATEGORY_MAP: Record<string, { title: string; desc: string; image: string }> = {
  phones: {
    title: "Phones",
    desc: "In-depth flagship smartphone reviews, head-to-head camera comparisons, performance analyses, and buying guides covering the best Android and iOS devices.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=600",
  },
  gadgets: {
    title: "Gadgets",
    desc: "Expert reviews, hands-on testing, and the latest news on consumer electronics. From high-performance peripherals to smart home innovations, we help you find the best tech.",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600",
  },
  "desk-setup": {
    title: "Desk Setup",
    desc: "Premium home workspace design. Get inspired by minimalist aesthetics, custom lighting, cable organization setups, and wood/felt desktop enhancements.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
  },
  "study-setup": {
    title: "Study Setup",
    desc: "Boost your educational focus and cognitive performance with optimized desk layouts, task lighting, organizational tools, and ergonomic essentials.",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=600",
  },
  productivity: {
    title: "Productivity",
    desc: "Work smarter, not harder. Discover the best hardware accessories, keyboard setups, software hubs, and time-tracking instruments designed to maximize your workflow.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=600",
  },
  "mobile-accessories": {
    title: "Mobile Accessories",
    desc: "Unleash the full potential of your smartphone. Explore ultra-fast chargers, protective armor cases, high-fidelity wireless audio, and essential everyday carry attachments.",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=600",
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
  "amazon-finds": {
    title: "Amazon Finds",
    desc: "Curated list of budget-friendly hidden treasures, ingenious desktop organization products, and high-value accessories sourced directly from Amazon.",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=600",
  },
};

export default function CategoryIndexPage() {
  const allPosts = getAllPosts();

  // Get dynamic post count for each category
  const categoryCounts = allPosts.reduce<Record<string, number>>((acc, post) => {
    if (post.category) {
      const slug = post.category.toLowerCase().replace(/ /g, "-");
      acc[slug] = (acc[slug] || 0) + 1;
    }
    return acc;
  }, {});

  const categoriesList = Object.entries(CATEGORY_MAP).map(([slug, details]) => {
    return {
      slug,
      ...details,
      count: categoryCounts[slug] || 0,
    };
  });

  return (
    <main className="bg-background text-on-surface min-h-screen py-12">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-on-surface-variant mb-6 font-sans">
          <Link className="hover:text-primary transition-colors" href="/">Home</Link>
          <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          <span className="text-on-surface truncate font-semibold">Categories</span>
        </nav>

        {/* Page Header */}
        <header className="mb-12 border-b border-outline-variant/30 pb-8">
          <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-4 text-on-surface leading-tight">
            Explore All Categories
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl leading-relaxed">
            Choose a tech hub below to discover premium hardware reviews, optimized work/study setup checklists, and curated Amazon ecosystem findings.
          </p>
        </header>

        {/* Categories Bento/Grid list */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesList.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/category/${cat.slug}`}
              className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-soft flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div>
                {/* Image Wrapper */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-outline-variant/20">
                  <Image 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width={400}
                    height={250}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur text-white px-3.5 py-1 rounded-full font-headline font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    {cat.count} {cat.count === 1 ? "Article" : "Articles"}
                  </div>
                </div>

                {/* Info Wrapper */}
                <div className="p-6">
                  <h2 className="font-headline text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
                    {cat.title}
                  </h2>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="px-6 pb-6 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-[11px] font-headline font-bold text-primary tracking-wider uppercase">
                  View Category Feed
                </span>
                <span className="material-symbols-outlined text-primary text-[18px] transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
