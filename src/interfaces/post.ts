import { type Author } from "./author";

export interface AffiliateProduct {
  title: string;
  image: string;
  affiliateUrl: string;
  amazonIndiaUrl?: string;
  amazonUsaUrl?: string;
  description: string;
  rating: string;
  pros: string[];
  cons: string[];
  price?: string;
  isBest?: boolean;
  badge?: string;
}

export interface QuickRecommendation {
  title: string;
  type: string;
  url: string;
}

export interface ComparisonProduct {
  name: string;
  values: string[];
}

export interface ComparisonTable {
  features: string[];
  products: ComparisonProduct[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
  
  // Custom Affiliate SEO extensions
  category?: string;
  rating?: number;
  pros?: string[];
  cons?: string[];
  amazonUrl?: string;
  amazonPrice?: string;
  readingTime?: string;
  quickPicks?: QuickRecommendation[];
  comparisonTable?: ComparisonTable;
  products?: AffiliateProduct[];
  faqs?: FAQItem[];
  buyingChecklist?: string[];
};
