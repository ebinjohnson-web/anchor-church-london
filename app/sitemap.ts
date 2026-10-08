import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://anchorchurchlondonca.com";
  const routes = ["", "/about", "/visit", "/ministries", "/church-life", "/contact", "/next-steps", "/opportunities", "/give", "/beliefs", "/prayer-care", "/messages", "/events"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-10-07"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
