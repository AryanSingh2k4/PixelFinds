import { AffiliateProduct } from "@/interfaces/post";
import Image from "next/image";

interface AffiliateProductCardProps {
  product: AffiliateProduct;
  index: number;
}

export default function AffiliateProductCard({ product, index }: AffiliateProductCardProps) {
  const isBest = product.isBest;

  return (
    <div 
      className={`bg-white border rounded-[1.5rem] overflow-hidden shadow-soft flex flex-col md:flex-row transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative ${
        isBest ? "border-2 border-primary" : "border-outline-variant"
      }`}
    >
      {/* Best Choice Badge */}
      {isBest && (
        <div className="absolute top-0 right-0 bg-primary text-on-primary px-4 py-1.5 rounded-bl-2xl font-headline text-[12px] font-bold tracking-wider uppercase z-10">
          {product.badge || "EDITOR'S CHOICE"}
        </div>
      )}

      {/* Image Container */}
      <div className="md:w-1/3 relative min-h-[240px] bg-[#F8FAFC] flex items-center justify-center p-6 border-r border-outline-variant/20">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-auto h-auto max-w-full max-h-[200px] md:max-h-[240px] object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 rounded-full font-headline font-bold text-xs shadow-md">
          {product.rating} / 10
        </div>
      </div>

      {/* Details Container */}
      <div className="md:w-2/3 p-stack-lg flex flex-col justify-between">
        <div>
          <h3 className="font-headline text-2xl font-bold text-on-surface mb-2">
            {index}. {product.title}
          </h3>
          <p className="font-sans text-body-md text-on-surface-variant mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Pros */}
            <div className="space-y-2">
              <h4 className="font-headline text-sm font-semibold text-green-700 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">check_circle</span> Pros
              </h4>
              <ul className="text-[13px] space-y-1">
                {product.pros.map((pro, i) => (
                  <li key={i} className="bg-green-500/10 text-on-surface px-2.5 py-1 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-600 shrink-0"></span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="space-y-2">
              <h4 className="font-headline text-sm font-semibold text-red-700 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">cancel</span> Cons
              </h4>
              <ul className="text-[13px] space-y-1">
                {product.cons.map((con, i) => (
                  <li key={i} className="bg-red-500/10 text-on-surface px-2.5 py-1 rounded flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0"></span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 border-t border-outline-variant/30 pt-4">
          <div className="flex flex-col">
            <span className="font-headline text-sm font-bold text-secondary">
              Price Status
            </span>
            <span className="text-[11px] font-sans text-on-surface-variant">
              Updated live on Amazon
            </span>
          </div>
          <a 
            href={product.affiliateUrl} 
            target="_blank" 
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-headline font-extrabold text-sm text-white bg-gradient-to-r from-[#FF9900] to-[#FF7A00] hover:from-[#FFAB24] hover:to-[#FF8F24] hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto shadow-md hover:shadow-lg"
            style={{ animation: 'pulse-glow-orange 2s infinite ease-in-out' }}
          >
            <span className="material-symbols-outlined text-[20px] font-bold text-white">shopping_cart</span>
            <span className="text-white">Check Live Price on Amazon</span>
            <span className="material-symbols-outlined text-[18px] text-white">open_in_new</span>
          </a>
        </div>
        <div className="mt-3 text-center sm:text-left">
          <p className="text-[10px] text-on-surface-variant/80 italic leading-none">
            *As an Amazon Associate, PixelFinds earns from qualifying purchases.
          </p>
        </div>
      </div>
    </div>
  );
}
