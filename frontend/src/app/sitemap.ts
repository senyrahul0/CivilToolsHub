import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/calculators",
    "/calculators/concrete-calculator",
    "/calculators/steel-weight-calculator",
    "/calculators/brick-calculator",
    "/calculators/plaster-calculator",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/calculators"
          ? 0.9
          : 0.8,
  }));
}