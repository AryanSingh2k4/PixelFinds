import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  // Find editor's choice post (specifically target earbuds review)
  const editorChoice = allPosts.length > 0 ? (allPosts.find(p => p.slug === "best-wireless-earbuds-under-2500") || allPosts[0]) : null;

  // Latest articles (excluding the main featured hero if possible, or listing all)
  const latestArticles = allPosts.length > 0 ? allPosts.slice(0, 5) : [];

  return (
    <main className="bg-background text-on-surface pb-16">
      {/* Hero Section */}
      <section className="max-w-container-max mx-auto px-gutter pt-8 pb-12">
        {editorChoice ? (
          <div className="relative w-full h-[420px] sm:h-[480px] lg:h-auto lg:aspect-[21/9] rounded-2xl overflow-hidden group shadow-md">
            <img 
              alt={editorChoice.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={editorChoice.ogImage.url || editorChoice.coverImage} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-12">
              <div className="max-w-3xl">
                <span className="bg-[#3A57EA] text-white px-3 py-1 rounded-full font-headline text-[11px] font-bold tracking-wider inline-block mb-4 uppercase">
                  EDITOR'S CHOICE
                </span>
                <h1 className="font-headline text-2xl md:text-[40px] font-extrabold text-white mb-4 leading-tight">
                  {editorChoice.title}
                </h1>
                <p className="text-white/80 text-body-md md:text-body-lg mb-6 line-clamp-2">
                  {editorChoice.excerpt}
                </p>
                <Link 
                  href={`/posts/${editorChoice.slug}`} 
                  className="bg-[#3A57EA] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm flex items-center gap-2 hover:bg-[#3A57EA]/90 hover:shadow-xl transition-all w-fit"
                >
                  Read More 
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative w-full min-h-[380px] lg:aspect-[21/9] rounded-2xl overflow-hidden group shadow-md bg-surface-container-low flex items-center justify-center text-center p-6 md:p-12 border border-outline-variant/30">
            <div className="max-w-2xl">
              <span className="bg-[#3A57EA] text-white px-3.5 py-1.5 rounded-full font-headline text-[10px] font-bold tracking-wider inline-block mb-4 uppercase">
                Welcome to PixelFinds
              </span>
              <h1 className="font-headline text-3xl md:text-[44px] font-extrabold text-on-surface mb-4 leading-tight">
                Your High-Performance Tech Review Companion
              </h1>
              <p className="text-on-surface-variant text-sm md:text-base mb-6 max-w-xl mx-auto leading-relaxed">
                Discover the best gadgets, productivity tools, study setup accessories, and trending Amazon finds with curated recommendations and detailed buying guides.
              </p>
              <Link 
                href="#categories" 
                className="bg-[#3A57EA] text-white px-6 py-3 rounded-xl font-headline font-bold text-sm flex items-center gap-2 hover:bg-[#3A57EA]/90 hover:shadow-xl transition-all mx-auto w-fit"
              >
                Explore Categories
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Main Grid Content */}
      <div className="max-w-container-max mx-auto px-gutter flex flex-col lg:flex-row gap-stack-lg relative">
        
        {/* Sticky Desktop Guide Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 sticky top-24 h-fit gap-stack-md p-stack-md bg-surface-container-low rounded-2xl border border-outline-variant/30 shadow-soft">
          <div className="px-2 border-b border-outline-variant/30 pb-3">
            <h3 className="font-headline text-lg font-bold text-primary">Navigation</h3>
            <p className="text-on-surface-variant text-[11px] uppercase tracking-wider font-semibold">Article Guide</p>
          </div>
          <nav className="flex flex-col gap-1.5 mt-2">
            <Link className="text-primary font-bold border-l-4 border-primary pl-2.5 flex items-center gap-3 py-2 hover:bg-surface-container rounded-r-lg transition-all" href="#">
              <span className="material-symbols-outlined text-[20px]">list_alt</span> 
              <span className="text-sm font-headline">Table of Contents</span>
            </Link>
            <Link className="text-on-surface-variant hover:text-primary pl-3.5 flex items-center gap-3 py-2 hover:bg-surface-container rounded-lg transition-all" href="#trending">
              <span className="material-symbols-outlined text-[20px]">trending_up</span> 
              <span className="text-sm font-headline">Trending Articles</span>
            </Link>
            <Link className="text-on-surface-variant hover:text-primary pl-3.5 flex items-center gap-3 py-2 hover:bg-surface-container rounded-lg transition-all" href="#categories">
              <span className="material-symbols-outlined text-[20px]">grid_view</span> 
              <span className="text-sm font-headline">Top Categories</span>
            </Link>
            <Link className="text-on-surface-variant hover:text-primary pl-3.5 flex items-center gap-3 py-2 hover:bg-surface-container rounded-lg transition-all" href="#latest">
              <span className="material-symbols-outlined text-[20px]">local_offer</span> 
              <span className="text-sm font-headline">Latest Reviews</span>
            </Link>
          </nav>
          <button className="mt-4 bg-secondary text-on-secondary py-3 rounded-xl font-headline font-bold text-xs hover:opacity-90 active:scale-95 transition-all">
            Check Latest Prices
          </button>
        </aside>

        {/* Dynamic Center Feed */}
        <div className="flex-1 space-y-section-gap">
          
          {/* Trending Gadgets Slider */}
          <section id="trending">
            <div className="flex items-center justify-between mb-stack-lg">
              <h2 className="font-headline text-3xl font-extrabold text-on-background flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-3xl">trending_up</span>
                Trending Now
              </h2>
            </div>
            <div className="flex gap-6 overflow-x-auto pb-6 hide-scrollbar">
              {allPosts.map((post) => (
                <div key={post.slug} className="flex-none w-72 bg-white rounded-2xl overflow-hidden shadow-soft border border-outline-variant/40 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                  <div className="h-44 relative bg-slate-100">
                    <img 
                      alt={post.title} 
                      className="w-full h-full object-cover" 
                      src={post.coverImage} 
                    />
                  </div>
                  <div className="p-stack-md flex flex-col justify-between h-44">
                    <div>
                      <p className="text-secondary font-headline font-bold text-[11px] uppercase tracking-wider mb-1">{post.category || "TECH"}</p>
                      <h3 className="font-headline font-bold text-[17px] text-on-surface mb-2 leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between">
                      <Link href={`/posts/${post.slug}`} className="bg-primary text-on-primary font-headline font-bold text-xs flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-primary/90 active:scale-95 transition-all">
                        Read Review <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Bento Grid Category Explorer */}
          <section id="categories">
            <h2 className="font-headline text-3xl font-extrabold text-on-background mb-stack-lg">Explore Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[500px]">
              <div className="md:col-span-2 md:row-span-2 relative group rounded-2xl overflow-hidden shadow-soft">
                <img 
                  alt="Gadgets" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?auto=format&fit=crop&q=80&w=600" 
                />
                <div className="absolute inset-0 bg-black/45 flex flex-col justify-end p-stack-lg group-hover:bg-black/55 transition-all">
                  <h3 className="text-white font-headline text-2xl font-extrabold">Gadgets</h3>
                  <p className="text-white/85 text-sm">Latest hardware innovations and reviews.</p>
                  <Link href="/category/gadgets" className="bg-[#3A57EA] text-white hover:bg-[#3A57EA]/90 active:scale-95 text-[11px] font-bold px-4 py-2.5 rounded-xl font-headline flex items-center gap-1.5 w-fit shadow-md mt-4 transition-all">
                    Explore reviews <span className="material-symbols-outlined text-[15px]">arrow_right_alt</span>
                  </Link>
                </div>
              </div>

              <div className="md:col-span-2 relative group rounded-2xl overflow-hidden shadow-soft">
                <img 
                  alt="Study Setup" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400" 
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 group-hover:bg-black/50 transition-all">
                  <h3 className="text-white font-headline text-lg font-bold">Study Setup</h3>
                  <Link href="/category/study-setup" className="bg-[#3A57EA] text-white hover:bg-[#3A57EA]/90 active:scale-95 text-[10px] font-bold px-3.5 py-1.5 rounded-lg font-headline flex items-center gap-1 w-fit shadow-md mt-2 transition-all">
                    View setup gear <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                  </Link>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden shadow-soft">
                <img 
                  alt="Productivity" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=200" 
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 group-hover:bg-black/50 transition-all">
                  <h3 className="text-white font-headline text-[15px] font-bold">Productivity</h3>
                  <Link href="/category/productivity" className="bg-[#3A57EA] text-white hover:bg-[#3A57EA]/90 active:scale-95 text-[10px] font-bold px-3 py-1.5 rounded-lg font-headline flex items-center gap-1 w-fit shadow-md mt-2 transition-all">
                    Go <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                  </Link>
                </div>
              </div>

              <div className="relative group rounded-2xl overflow-hidden shadow-soft">
                <img 
                  alt="Accessories" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&q=80&w=200" 
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 group-hover:bg-black/50 transition-all">
                  <h3 className="text-white font-headline text-[15px] font-bold">Accessories</h3>
                  <Link href="/category/mobile-accessories" className="bg-[#3A57EA] text-white hover:bg-[#3A57EA]/90 active:scale-95 text-[10px] font-bold px-3 py-1.5 rounded-lg font-headline flex items-center gap-1 w-fit shadow-md mt-2 transition-all">
                    Go <span className="material-symbols-outlined text-[14px]">arrow_right_alt</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Articles */}
          <section id="latest">
            <h2 className="font-headline text-3xl font-extrabold text-on-background mb-stack-lg">Latest Reviews</h2>
            <div className="space-y-stack-lg">
              {latestArticles.length > 0 ? (
                latestArticles.map((post) => (
                  <article key={post.slug} className="flex flex-col md:flex-row gap-6 group cursor-pointer border-b border-outline-variant/20 pb-stack-lg">
                    <div className="w-full md:w-64 h-44 rounded-xl overflow-hidden shrink-0 shadow-soft bg-surface-dim relative">
                      <img 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        src={post.coverImage} 
                      />
                    </div>
                    <div className="flex flex-col justify-center flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-primary/10 text-primary px-2.5 py-0.5 rounded font-headline font-bold text-[10px] uppercase tracking-wider">
                          {post.category || "TECH"}
                        </span>
                        <span className="text-on-surface-variant text-[11px] font-sans">
                          {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })} • {post.readingTime || "5 min read"}
                        </span>
                      </div>
                      <Link href={`/posts/${post.slug}`} className="font-headline text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </Link>
                      <p className="text-on-surface-variant text-sm line-clamp-2 mb-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-2">
                        <img 
                          src={post.author.picture} 
                          alt={post.author.name} 
                          className="w-6 h-6 rounded-full object-cover" 
                        />
                        <span className="text-[12px] font-headline font-semibold text-on-surface">By {post.author.name}</span>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="p-8 text-center bg-surface-container-low rounded-2xl border border-outline-variant/30 max-w-lg mx-auto">
                  <span className="material-symbols-outlined text-primary text-4xl mb-2">reviews</span>
                  <h3 className="font-headline text-lg font-bold text-on-surface">Reviews Coming Soon</h3>
                  <p className="text-on-surface-variant text-sm mt-1">We are currently preparing high-performance gadget reviews and curated tech setups. Stay tuned!</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>

      {/* Newsletter capture block */}
      <section className="bg-primary-container text-on-primary-container mt-section-gap py-16">
        <div className="max-w-3xl mx-auto px-gutter text-center flex flex-col items-center">
          <span className="material-symbols-outlined text-6xl mb-4 text-white">mail_outline</span>
          <h2 className="font-headline text-3xl font-extrabold text-white mb-3">Stay Ahead of the Curve</h2>
          <p className="text-white/80 text-sm max-w-xl mb-8">
            Join 50,000+ tech enthusiasts. Get weekly comprehensive reviews, setup inspiration, and exclusive Amazon finds straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required
              className="flex-1 px-4 py-3.5 rounded-xl text-on-surface border-none focus:ring-4 focus:ring-primary-fixed-dim outline-none font-sans text-sm" 
            />
            <button type="submit" className="bg-on-background hover:bg-black text-white px-6 py-3.5 rounded-xl font-headline font-bold text-sm transition-all shrink-0">
              Subscribe Now
            </button>
          </form>
          <p className="mt-3 text-[11px] text-white/60">No spam. Ever. Unsubscribe at any time.</p>
        </div>
      </section>
    </main>
  );
}
