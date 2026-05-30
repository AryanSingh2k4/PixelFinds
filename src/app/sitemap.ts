import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

const baseUrl = "https://pixelfinds.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/category/gadgets`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/phones`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/desk-setup`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/productivity`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/buying-guides`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/quick-recommendations`,
      lastModified: new Date("2026-05-30"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  const postRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...postRoutes];
}
