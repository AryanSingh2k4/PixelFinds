import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import AffiliateProductCard from "@/app/_components/affiliate-product-card";
import ReadingProgressBar from "@/app/_components/reading-progress-bar";
import Link from "next/link";

type PostParams = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Post(props: PostParams) {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const htmlContent = await markdownToHtml(post.content || "");

  // Create JSON-LD Product/Article Schema for Advanced SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.ogImage?.url || post.coverImage,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author.name
    },
    "description": post.excerpt,
    "publisher": {
      "@type": "Organization",
      "name": "PixelFinds",
      "logo": {
        "@type": "ImageObject",
        "url": "https://pixelfinds.vercel.app/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://pixelfinds.vercel.app/posts/${post.slug}`
    }
  };

  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg bg-background text-on-surface">
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Reading Progress Indicator */}
      <ReadingProgressBar />


      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-caption text-on-surface-variant mb-6 font-sans">
        <Link className="hover:text-primary transition-colors" href="/">Home</Link>
        <span className="material-symbols-outlined text-[14px]">chevron_right</span>
        {post.category && (
          <>
            <Link className="hover:text-primary transition-colors" href={`/category/${post.category.toLowerCase().replace(" ", "-")}`}>
              {post.category}
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </>
        )}
        <span className="text-on-surface truncate font-semibold">{post.title}</span>
      </nav>

      <div className="lg:flex gap-stack-lg">
        
        {/* Main Content Column */}
        <div className="flex-1 min-w-0">
          
          {/* Header Section */}
          <section className="mb-stack-lg border-b border-outline-variant/30 pb-6">
            {post.category && (
              <span className="bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-full font-headline font-bold text-[10px] uppercase mb-4 inline-block tracking-wider">
                {post.category}
              </span>
            )}
            <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-4 text-on-surface leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 py-4 border-t border-outline-variant/20">
              <img 
                alt={post.author.name} 
                className="w-12 h-12 rounded-full object-cover shadow-sm border border-outline-variant/30" 
                src={post.author.picture} 
              />
              <div>
                <p className="font-headline font-bold text-on-surface text-sm">By {post.author.name}</p>
                <p className="text-caption text-on-surface-variant font-sans">
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} • {post.readingTime || "8 min read"}
                </p>
              </div>
            </div>
          </section>

          {/* Amazon Affiliate Compliance Disclosure */}
          <div className="bg-surface-container-lowest border border-outline-variant/60 rounded-2xl p-4 mb-8 flex items-start gap-3 shadow-sm">
            <span className="material-symbols-outlined text-primary shrink-0 text-xl mt-0.5">info</span>
            <div className="text-xs font-sans text-on-surface-variant leading-relaxed">
              <strong className="font-headline font-bold text-on-surface">Affiliate Disclosure:</strong> PixelFinds is a participant in the Amazon Services LLC Associates Program and Amazon Associates India, affiliate advertising programs designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com and Amazon.in. As an Amazon Associate, we earn from qualifying purchases. This means if you click on one of our recommendation links and make a purchase, we may receive a small commission at zero extra cost to you.
            </div>
          </div>

          {/* Quick Recommendations Summary Card */}
          {post.quickPicks && post.quickPicks.length > 0 && (
            <div id="quick-picks" className="bg-surface-container-low border border-primary-fixed-dim/50 rounded-2xl p-6 mb-8 shadow-soft">
              <div className="flex items-center gap-2 mb-4 text-primary">
                <span className="material-symbols-outlined font-bold text-2xl">bolt</span>
                <h3 className="font-headline text-lg font-bold">Quick Recommendations</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {post.quickPicks.map((pick, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-outline-variant/30 flex flex-col justify-between shadow-sm">
                    <p className="text-[10px] font-headline font-bold text-primary uppercase tracking-wider">{pick.type}</p>
                    <p className="font-headline font-bold text-sm text-on-surface my-2">{pick.title}</p>
                    <a 
                      className="text-primary font-headline font-bold text-xs flex items-center hover:underline hover:gap-1.5 transition-all w-fit" 
                      href={pick.url}
                    >
                      View Details 
                      <span className="material-symbols-outlined text-[16px]">arrow_right</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Core Markdown Body */}
          <article className="prose max-w-none mb-12 font-sans leading-relaxed text-on-surface-variant text-body-lg">
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
          </article>

          {/* Product Head-to-Head Comparison Table */}
          {post.comparisonTable && (
            <section className="my-12 overflow-hidden rounded-2xl border border-outline-variant/40 shadow-soft bg-white">
              <div className="p-4 bg-surface-container border-b border-outline-variant/30">
                <h3 className="font-headline text-lg font-bold text-on-surface">Head-to-Head Specifications</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[500px]">
                  <thead>
                    <tr className="bg-surface-container-low">
                      <th className="p-4 font-headline text-xs font-bold text-on-surface-variant border-b border-outline-variant/30">Product Model</th>
                      {post.comparisonTable.features.map((feat, i) => (
                        <th key={i} className="p-4 font-headline text-xs font-bold text-on-surface-variant border-b border-outline-variant/30">{feat}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {post.comparisonTable.products.map((prod, i) => (
                      <tr key={i} className="hover:bg-surface-container-low transition-colors duration-200 border-b border-outline-variant/20 last:border-b-0">
                        <td className="p-4 font-headline font-bold text-sm text-on-surface">{prod.name}</td>
                        {prod.values.map((val, idx) => (
                          <td key={idx} className="p-4 text-sm font-sans text-on-surface-variant">{val}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {/* Detailed Product Review Sections */}
          {post.products && post.products.length > 0 && (
            <section className="space-y-8 my-12">
              <h2 className="font-headline text-2xl font-extrabold text-on-surface mb-6 border-b border-outline-variant/20 pb-2">
                Detailed Product Reviews
              </h2>
              {post.products.map((product, idx) => (
                <div key={idx} id={`product-${idx + 1}`}>
                  <AffiliateProductCard product={product} index={idx + 1} />
                </div>
              ))}
            </section>
          )}

          {/* FAQ Accordion Section */}
          {post.faqs && post.faqs.length > 0 && (
            <section className="my-12 bg-surface-container rounded-2xl p-6 md:p-8 shadow-soft border border-outline-variant/10">
              <h2 className="font-headline text-2xl font-extrabold text-center mb-6 text-on-surface">Common Questions & FAQs</h2>
              <div className="space-y-4">
                {post.faqs.map((faq, i) => (
                  <details key={i} className="bg-white rounded-xl border border-outline-variant/30 p-4 group [&_summary::-webkit-details-marker]:hidden shadow-sm">
                    <summary className="font-headline font-bold text-sm cursor-pointer list-none flex justify-between items-center text-on-surface">
                      {faq.question}
                      <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-200">expand_more</span>
                    </summary>
                    <p className="text-sm font-sans text-on-surface-variant mt-3 leading-relaxed border-t border-outline-variant/20 pt-3">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          )}

        </div>

        {/* Desktop Sticky Table of Contents Sidebar */}
        <aside className="hidden lg:flex flex-col w-80 sticky top-24 h-fit gap-stack-md p-stack-md bg-surface-container-low rounded-2xl border border-outline-variant/30 shadow-soft">
          <div className="mb-2 px-1 border-b border-outline-variant/30 pb-3">
            <h3 className="font-headline text-lg font-bold text-primary">On This Page</h3>
            <p className="font-sans text-caption text-on-surface-variant">Quick Navigation</p>
          </div>
          <nav className="flex flex-col gap-1">
            <a className="text-primary font-bold border-l-4 border-primary pl-2.5 py-2 flex items-center gap-3 bg-surface-container rounded-r" href="#quick-picks">
              <span className="material-symbols-outlined text-[20px]">list_alt</span>
              <span className="text-xs font-headline">Overview & Picks</span>
            </a>
            {post.products?.map((prod, idx) => (
              <a 
                key={idx} 
                className="text-on-surface-variant hover:text-primary pl-4 py-2 flex items-center gap-3 hover:bg-surface-container rounded transition-all" 
                href={`#product-${idx + 1}`}
              >
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant/75">star</span>
                <span className="text-xs font-headline truncate max-w-[200px]">{idx + 1}. {prod.title}</span>
              </a>
            ))}
          </nav>
          {/* Dynamic Sidebar Widgets */}
          <div className="flex flex-col gap-4 mt-6">
            {/* Quick Recommendations Widget */}
            {post.quickPicks && post.quickPicks.length > 0 && (
              <div className="p-5 bg-surface-container-low border border-outline-variant/30 rounded-2xl shadow-soft">
                <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px] text-primary">workspace_premium</span> Quick Recommendations
                </h4>
                <div className="flex flex-col gap-2.5">
                  {post.quickPicks.map((pick, idx) => (
                    <a 
                      key={idx}
                      href={pick.url}
                      className="flex flex-col p-2.5 rounded-xl bg-white hover:bg-surface-container border border-outline-variant/20 hover:border-primary/20 transition-all group"
                    >
                      <span className="text-[9px] font-headline font-bold text-primary uppercase tracking-wider mb-0.5">
                        {pick.type}
                      </span>
                      <div className="flex items-center justify-between min-w-0 w-full">
                        <span className="text-[11px] font-headline font-bold text-on-surface truncate group-hover:text-primary transition-colors">
                          {pick.title}
                        </span>
                        <span className="material-symbols-outlined text-primary text-[14px] shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">arrow_right</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Buying Checklist Widget */}
            <div className="p-5 bg-surface-container-low border border-outline-variant/30 rounded-2xl shadow-soft">
              <h4 className="font-headline font-bold text-xs uppercase tracking-wider text-primary mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-primary">fact_check</span> Buying Checklist
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-[11px] font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-green-600 text-[16px] font-bold">check_circle</span>
                  <span>Active Noise Cancellation (ANC)</span>
                </li>
                <li className="flex items-center gap-2 text-[11px] font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-green-600 text-[16px] font-bold">check_circle</span>
                  <span>Battery Life & Charging Speed</span>
                </li>
                <li className="flex items-center gap-2 text-[11px] font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-green-600 text-[16px] font-bold">check_circle</span>
                  <span>Low-Latency Gaming Mode</span>
                </li>
                <li className="flex items-center gap-2 text-[11px] font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-green-600 text-[16px] font-bold">check_circle</span>
                  <span>Call Quality & Microphone Count</span>
                </li>
                <li className="flex items-center gap-2 text-[11px] font-sans text-on-surface-variant">
                  <span className="material-symbols-outlined text-green-600 text-[16px] font-bold">check_circle</span>
                  <span>Bluetooth Version & Codecs</span>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </main>
  );
}

export async function generateMetadata(props: PostParams): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = post.title;

  return {
    title,
    description: post.excerpt,
    alternates: {
      canonical: `/posts/${post.slug}`,
    },
    openGraph: {
      title,
      description: post.excerpt,
      url: `https://pixelfinds.vercel.app/posts/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.ogImage?.url || post.coverImage,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.excerpt,
      images: [post.ogImage?.url || post.coverImage],
    },
  };
}


export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
