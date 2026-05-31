import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PixelFinds",
  description: "Read the Privacy Policy and terms of data usage for PixelFinds visitors.",
  alternates: {
    canonical: "https://pixelfinds.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg bg-background text-on-surface">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-6 leading-tight">
          Privacy Policy
        </h1>
        
        <article className="prose max-w-none leading-relaxed text-on-surface-variant text-body-lg font-sans">
          <p>
            Your privacy is extremely important to us at PixelFinds. This Privacy Policy details how we collect, store, and leverage information when you interact with our website.
          </p>

          <h2>Information Collection</h2>
          <p>
            We do not require users to create accounts to read our blog. We collect basic, anonymous analytics data (via Google Analytics, Vercel Analytics, and speed insights) regarding page views, duration, geographical region, browser type, and links clicked to improve layout speed and discover popular articles.
          </p>

          <h2>Cookies and Advertising</h2>
          <p>
            Amazon uses tracking cookies to recognize when you navigate to their store from PixelFinds. These cookies last for a standard duration (typically 24 hours) to associate qualifying purchases with our affiliate account. You can block cookies inside your individual browser preferences if you choose.
          </p>

          <h2>Updates and Contact</h2>
          <p>
            This Privacy Policy may be updated periodically. If you have any inquiries regarding data usage, cookies, or terms of service, feel free to contact us through our main channels.
          </p>
        </article>
      </div>
    </main>
  );
}
