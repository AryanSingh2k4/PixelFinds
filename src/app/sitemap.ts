import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/api";

const baseUrl = "https://pixelfinds.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-06-01"),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/category/gadgets`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/phones`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/desk-setup`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/productivity`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/buying-guides`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/quick-recommendations`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/study-setup`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/mobile-accessories`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category/amazon-finds`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/category`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/disclosure`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/posts`,
      lastModified: new Date("2026-06-02"),
      changeFrequency: "daily",
      priority: 0.8,
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
