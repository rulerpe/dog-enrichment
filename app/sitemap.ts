import { MetadataRoute } from "next";
import activities from "./lib/activity-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date().toISOString().split("T")[0];
  const homeMap: MetadataRoute.Sitemap = [
    {
      url: "https://www.scentsavvydogenrich.com",
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  let activityMap: MetadataRoute.Sitemap = activities.map((activity) => {
    return {
      url: `https://www.scentsavvydogenrich.com/activity/${activity.slug}`,
      lastModified: lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
  return [...homeMap, ...activityMap];
}
