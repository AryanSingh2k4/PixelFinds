import Container from "@/app/_components/container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant full-width mt-auto">
      <div className="w-full py-stack-lg px-gutter max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-stack-md">
        <div className="max-w-md">
          <a className="hover:opacity-90 transition-all mb-4 flex items-center gap-2" href="/">
            <img 
              src="/assets/branding/logo.webp" 
              alt="PixelFinds Logo" 
              className="h-8 w-auto object-contain" 
            />
            <span className="font-headline font-extrabold tracking-tight text-xl flex items-center">
              <span className="text-[#3A57EA]">Pixel</span>
              <span className="text-[#0D0F1B]">Finds</span>
            </span>
          </a>
          <p className="text-on-surface-variant text-body-md mb-6">
            Expert technical analysis, editorial clarity, and the most comprehensive hardware reviews on the web. We help you make informed decisions for your digital setup.
          </p>
          <div className="flex gap-4">
            <a 
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
              href="#"
              aria-label="Website"
            >
              <span className="material-symbols-outlined">public</span>
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
              href="#"
              aria-label="Email"
            >
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
            <a 
              className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-all" 
              href="#"
              aria-label="RSS Feed"
            >
              <span className="material-symbols-outlined">rss_feed</span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-on-surface font-headline">Links</h4>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/about">About</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/disclosure">Disclosure</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/privacy-policy">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-on-surface font-headline">Categories</h4>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/phones">Phones</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/gadgets">Gadgets</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/desk-setup">Desk Setup</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/productivity">Productivity</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/buying-guides">Buying Guides</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors" href="/category/quick-recommendations">Quick Recommendations</a>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-outline-variant/30 py-8 px-gutter max-w-container-max mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-[12px] text-on-surface-variant font-sans">
            © {currentYear} PixelFinds. As an Amazon Associate I earn from qualifying purchases.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <p className="text-[12px] text-on-surface-variant font-bold font-headline uppercase">
              SERVER STATUS: OPTIMIZED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
