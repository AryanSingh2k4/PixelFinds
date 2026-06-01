"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { name: "Phones", href: "/category/phones" },
  { name: "Gadgets", href: "/category/gadgets" },
  { name: "Desk Setup", href: "/category/desk-setup" },
  { name: "Productivity", href: "/category/productivity" },
  { name: "Buying Guides", href: "/category/buying-guides" },
  { name: "Quick Recommendations", href: "/category/quick-recommendations" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-outline-variant/30 sticky top-0 z-50 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-16">
        <div className="flex items-center gap-8">
          <Link 
            href="/" 
            className="hover:opacity-90 transition-all shrink-0 flex items-center gap-2.5"
            onClick={() => setIsMenuOpen(false)}
          >
            <img 
              src="/assets/branding/logo.webp" 
              alt="PixelFinds Logo" 
              className="h-9 w-auto object-contain" 
            />
            <span className="font-headline font-extrabold tracking-tight text-2xl flex items-center">
              <span className="text-[#3A57EA]">Pixel</span>
              <span className="text-[#0D0F1B]">Finds</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {categories.map((cat) => (
              <Link 
                key={cat.href}
                className="text-on-surface-variant hover:text-primary transition-colors font-headline font-semibold text-sm" 
                href={cat.href}
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <button className="p-2 text-on-surface-variant hover:text-primary transition-all flex items-center justify-center rounded-full hover:bg-surface-container" aria-label="Search">
            <span className="material-symbols-outlined">search</span>
          </button>
          
          <Link 
            href="/posts"
            className="hidden sm:inline-flex bg-primary text-on-primary px-5 py-2 rounded-lg font-headline font-bold text-sm hover:opacity-90 active:scale-95 transition-all items-center justify-center"
          >
            All Posts
          </Link>

          {/* Hamburger Menu Toggle Button (Mobile & Tablet) */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-on-surface-variant hover:text-primary transition-all flex items-center justify-center rounded-full hover:bg-surface-container" 
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Responsive Slide-Down Mobile Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-outline-variant/40 shadow-md animate-fade-in absolute w-full left-0 z-40">
          <nav className="flex flex-col py-4 px-gutter gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-on-surface-variant hover:text-primary hover:bg-surface-container-low px-4 py-3 rounded-xl transition-all font-headline font-bold text-sm flex items-center justify-between"
              >
                <span>{cat.name}</span>
                <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            ))}
            <div className="p-4 border-t border-outline-variant/20 mt-2 flex flex-col gap-3">
              <Link 
                href="/posts"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-on-primary py-3 rounded-xl font-headline font-bold text-sm text-center shadow-sm inline-block"
              >
                All Posts
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
