import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | PixelFinds",
  description: "Read the transparent Amazon Associates affiliate program disclosure for PixelFinds.",
  alternates: {
    canonical: "https://pixelfinds.vercel.app/disclosure",
  },
};

export default function Disclosure() {
  return (
    <main className="max-w-container-max mx-auto px-gutter py-stack-lg bg-background text-on-surface">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-headline text-3xl md:text-[44px] font-extrabold mb-6 leading-tight">
          Affiliate Disclosure
        </h1>
        
        <article className="prose max-w-none leading-relaxed text-on-surface-variant text-body-lg font-sans">
          <p>
            In order to maintain editorial standards and provide free, high-quality, and detailed hardware reviews, we participate in the Amazon Services LLC Associates Program and Amazon Associates India.
          </p>

          <p>
            This is an affiliate advertising program designed to provide a reliable way for web publishers to earn advertising fees by linking directly to products on Amazon.com, Amazon.in, and affiliated marketplaces.
          </p>

          <h2>What This Means For You</h2>
          <p>
            When you click on one of our recommended product links or checkout cards on PixelFinds and complete a purchase on Amazon, we receive a small percentage of that sale as a commission.
          </p>
          <p>
            <strong>This process does not cost you anything extra.</strong> The prices you see on Amazon are exactly the same whether you visit their store directly or navigate through PixelFinds. It is a win-win system that lets us keep our blog online and fully funded without annoying ad pop-ups.
          </p>

          <h2>Our Commitment to Editorial Honesty</h2>
          <p>
            We take pride in our integrity. Product suggestions on our website are completely chosen based on merits, rating standards, user feedback, and specs. We never receive direct compensation from manufacturers to give biased reviews or put low-grade items at the top of our lists. Our readers' trust is our most valuable asset.
          </p>
        </article>
      </div>
    </main>
  );
}
