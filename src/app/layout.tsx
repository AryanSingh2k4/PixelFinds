import Footer from "@/app/_components/footer";
import Header from "@/app/_components/header";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/lib/constants";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import cn from "classnames";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelfinds.com"),
  title: {
    default: "PixelFinds | Premium Gadget Guides & Product Reviews",
    template: "%s | PixelFinds",
  },
  description: "Highly optimized, expert technical analysis, editorial clarity, and comprehensive hardware reviews. We help you make informed decisions for your setup.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "PixelFinds | Premium Gadget Guides & Product Reviews",
    description: "Highly optimized, expert technical analysis, editorial clarity, and comprehensive hardware reviews.",
    url: "https://pixelfinds.com",
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
    title: "PixelFinds | Premium Gadget Guides & Product Reviews",
    description: "Highly optimized, expert technical analysis, editorial clarity, and comprehensive hardware reviews.",
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
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#3525cd"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#3525cd" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#f8f9ff" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(inter.className, "bg-background text-on-surface min-h-screen flex flex-col")}
      >
        <Header />
        <div className="flex-1 w-full">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

