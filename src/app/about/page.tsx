import Container from "@/app/_components/container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | PixelFinds",
  description: "Learn more about PixelFinds, our mission, and our dedicated team of tech enthusiasts and setups review editors.",
  alternates: {
    canonical: "https://pixelfinds.vercel.app/about",
  },
};

export default function About() {
  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg bg-background text-on-surface">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-6 leading-tight">
          About PixelFinds
        </h1>
        
        <article className="prose max-w-none leading-relaxed text-on-surface-variant text-body-lg font-sans">
          <p>
            Welcome to <strong>PixelFinds</strong>! We are a dedicated community of setup curators, gadget reviewers, and tech enthusiasts on a mission to simplify product discovery for modern workspaces, desk setups, and daily productivity routines.
          </p>

          <h2>Our Mission</h2>
          <p>
            With thousands of tech choices and accessories flooded into marketplaces like Amazon every single day, finding genuine, high-performing hardware can be overwhelming. We spend hours researching, comparing, and summarizing the best digital gears so you can save time and make informed purchasing decisions with confidence.
          </p>

          <h2>How We Work</h2>
          <p>
            Our process is simple: we identify the most loved, highly-rated setup gear and gadgets across desks, offices, study layouts, and everyday audio. We analyze actual hands-on reviews, check specifications, contrast benefits, and boil them down into straightforward head-to-head articles. We believe in providing editorial clarity and transparent pros and cons for every product we showcase.
          </p>

          <h2>Affiliate Transparency</h2>
          <p>
            PixelFinds is fully supported by our audience. When you read our reviews and click through to purchase via our links, we may earn a small associate commission from Amazon's affiliate program. This fee has zero extra cost to you and helps us pay our researchers and maintain our website. Thank you for your continued trust and support!
          </p>
        </article>
      </div>
    </main>
  );
}
