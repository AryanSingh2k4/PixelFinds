import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Inter, Geist } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geist = Geist({ subsets: ["latin"], variable: "--font-headline" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelfinds.vercel.app"),
  title: {
    default: "PixelFinds | Best Gadgets, Tech Accessories & Amazon Finds",
    template: "%s | PixelFinds",
  },
  description: "Discover the best gadgets, productivity tools, study setup accessories, and trending Amazon finds with curated recommendations and detailed buying guides from PixelFinds.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "PixelFinds | Best Gadgets, Tech Accessories & Amazon Finds",
    description: "Discover the best gadgets, productivity tools, study setup accessories, and trending Amazon finds with curated recommendations and detailed buying guides from PixelFinds.",
    url: "https://pixelfinds.vercel.app",
    siteName: "PixelFinds",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: HOME_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "PixelFinds Editorial Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PixelFinds | Best Gadgets, Tech Accessories & Amazon Finds",
    description: "Discover the best gadgets, productivity tools, study setup accessories, and trending Amazon finds with curated recommendations and detailed buying guides from PixelFinds.",
    images: [HOME_OG_IMAGE_URL],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "bDf0ZCX2UcPHt41g9hjYxxO34VMPzKbep6fZmZUeEhU",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#3525cd"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#3525cd" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#f8f9ff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          inter.variable,
          geist.variable,
          inter.className,
          "bg-background text-on-surface min-h-screen flex flex-col"
        )}
      >
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

