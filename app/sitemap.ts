import { MetadataRoute } from "next";
import activities from "./lib/activity-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const homeMap: MetadataRoute.Sitemap = [
    {
      url: "https://www.scentsavvydogenrich.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
  let activityMap: MetadataRoute.Sitemap = activities.map((activity) => {
    return {
      url: `https://www.scentsavvydogenrich.com/activity/${activity.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    };
  });
  return [...homeMap, ...activityMap];
}
