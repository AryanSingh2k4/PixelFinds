import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/api";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://pixelfinds.vercel.app";

  const routes = [
    "",
    "/category/phones",
    "/category/gadgets",
    "/category/desk-setup",
    "/category/productivity",
    "/category/buying-guides",
    "/category/top-picks",
    "/about",
    "/disclosure",
    "/privacy-policy",
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  routes.forEach((route) => {
    xml += `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route === "" ? "daily" : "weekly"}</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`;
  });

  // Add dynamic posts
  posts.forEach((post) => {
    xml += `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  xml += `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
    },
  });
}
