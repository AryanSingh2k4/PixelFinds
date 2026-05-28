import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const baseUrl = "https://pixelfinds.vercel.app";

  // Base routes
  const routes = [
    "",
    "/category/gadgets",
    "/category/study-setup",
    "/category/productivity",
    "/category/mobile-accessories",
    "/category/amazon-finds",
    "/category/desk-setup",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic posts
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...routes, ...postRoutes];
}
