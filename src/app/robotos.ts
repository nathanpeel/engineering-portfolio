import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
      }
    ],
    sitemap: "https://nathanpeel.dev/sitemap.xml",
    host: "https://nathanpeel.dev",
  };
}