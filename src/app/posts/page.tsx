import { getAllPosts } from "@/lib/api";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Articles & Reviews | PixelFinds",
  description: "Browse all detailed buying guides, tech reviews, study setups, productivity tools, and latest gadget findings on PixelFinds.",
  alternates: {
    canonical: "https://pixelfinds.vercel.app/posts",
  },
};

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <main className="bg-background text-on-surface min-h-screen py-12">
      <div className="max-w-container-max mx-auto px-gutter">
        {/* Page Header */}
        <header className="mb-12 border-b border-outline-variant/30 pb-8">
          <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-4 text-on-surface leading-tight">
            All Reviews & Buying Guides
          </h1>
          <p className="text-on-surface-variant text-body-lg max-w-2xl leading-relaxed">
            Discover thorough technical reviews, head-to-head comparisons, and handpicked product recommendations designed to elevate your daily digital setup.
          </p>
        </header>

        {/* Posts Grid */}
        {allPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post) => (
              <article 
                key={post.slug} 
                className="bg-white border border-outline-variant/30 rounded-2xl overflow-hidden shadow-soft flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] bg-[#F8FAFC] overflow-hidden border-b border-outline-variant/20">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {post.category && (
                      <span className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-headline font-bold text-[10px] uppercase tracking-wider shadow-md">
                        {post.category}
                      </span>
                    )}
                  </div>

                  {/* Card Details */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-caption text-on-surface-variant mb-3 font-sans">
                      <span>{new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span>
                      <span>•</span>
                      <span>{post.readingTime || "8 min read"}</span>
                    </div>

                    <h2 className="font-headline text-xl font-bold text-on-surface mb-3 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
                      <Link href={`/posts/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="font-sans text-body-md text-on-surface-variant line-clamp-3 leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="px-6 pb-6 pt-4 border-t border-outline-variant/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src={post.author.picture} 
                      alt={post.author.name} 
                      className="w-8 h-8 rounded-full object-cover border border-outline-variant/30"
                    />
                    <span className="font-headline font-semibold text-xs text-on-surface">
                      {post.author.name}
                    </span>
                  </div>
                  <Link 
                    href={`/posts/${post.slug}`}
                    className="bg-primary text-on-primary text-[11px] font-headline font-extrabold flex items-center gap-1.5 px-4 py-2.5 rounded-xl hover:bg-primary-container active:scale-95 transition-all shadow-sm"
                  >
                    Read Article
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-surface-container-low border border-outline-variant/30 rounded-2xl">
            <span className="material-symbols-outlined text-4xl text-on-surface-variant/50 mb-3">folder_open</span>
            <p className="font-headline text-lg font-bold text-on-surface-variant">No reviews found.</p>
          </div>
        )}
      </div>
    </main>
  );
}
