import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | PixelFinds",
  description: "This review or guide is currently under editorial research and will be published soon. Explore our other published tech reviews in the meantime.",
};

export default function NotFound() {
  return (
    <main className="bg-background text-on-surface min-h-[70vh] flex items-center justify-center py-16 px-gutter">
      <div className="max-w-md w-full bg-white border border-outline-variant/30 rounded-2xl p-8 md:p-10 shadow-soft text-center flex flex-col items-center">
        {/* Visual Cue */}
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary animate-pulse">
          <span className="material-symbols-outlined text-[32px] font-bold">bolt</span>
        </div>

        {/* Text Details */}
        <span className="bg-secondary-container text-on-secondary-container px-3.5 py-1 rounded-full font-headline font-bold text-[10px] uppercase tracking-wider mb-4 inline-block">
          Editorial Queue
        </span>
        
        <h1 className="font-headline text-2xl md:text-3xl font-extrabold text-on-surface mb-3 leading-tight">
          Review Coming Soon
        </h1>
        
        <p className="font-sans text-body-md text-on-surface-variant leading-relaxed mb-8">
          Our team is currently researching, specs-testing, and compiling the comparison data for this guide. We release detailed reviews every week to ensure you get the absolute best setup picks.
        </p>

        {/* Interactive Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link 
            href="/posts"
            className="bg-primary text-on-primary px-5 py-3 rounded-xl font-headline font-extrabold text-sm flex items-center justify-center gap-1.5 hover:bg-primary-container active:scale-95 transition-all shadow-sm w-full"
          >
            <span className="material-symbols-outlined text-[18px]">list_alt</span>
            All Posts
          </Link>
          <Link 
            href="/"
            className="bg-surface-container text-on-surface border border-outline-variant/30 px-5 py-3 rounded-xl font-headline font-bold text-sm flex items-center justify-center gap-1.5 hover:bg-surface-container-high active:scale-95 transition-all w-full"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            Go Home
          </Link>
        </div>
      </div>
    </main>
  );
}
