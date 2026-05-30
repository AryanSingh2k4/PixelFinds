import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/api";

export async function GET() {
  const posts = getAllPosts();
  const baseUrl = "https://pixelfinds.vercel.app";

  // Only include pages that actually exist
  const staticRoutes = [
    { path: "", priority: "1.0", changefreq: "daily" },
    { path: "/category/phones", priority: "0.7", changefreq: "weekly" },
    { path: "/category/gadgets", priority: "0.7", changefreq: "weekly" },
    { path: "/category/desk-setup", priority: "0.7", changefreq: "weekly" },
    { path: "/category/productivity", priority: "0.7", changefreq: "weekly" },
    { path: "/category/buying-guides", priority: "0.7", changefreq: "weekly" },
    { path: "/category/quick-recommendations", priority: "0.7", changefreq: "weekly" },
  ];

  // Static lastmod — today's date, fixed (not dynamic new Date() which causes useless re-crawls)
  const siteLastmod = "2026-05-30T00:00:00.000Z";

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Add static routes
  staticRoutes.forEach(({ path, priority, changefreq }) => {
    xml += `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${siteLastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  });

  // Add dynamic posts — articles get highest priority after homepage
  posts.forEach((post) => {
    xml += `
  <url>
    <loc>${baseUrl}/posts/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
  });

  xml += `\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=43200",
      "X-Robots-Tag": "noindex", // Sitemap itself should not be indexed as a page
    },
  });
}
