import { MetadataRoute } from "next";
import { getSortedBlogPosts } from "./blog/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getSortedBlogPosts().map((post) => ({
    url: `https://nathanpeel.dev/blog/${post.data.route}`,
    lastModified: post.data.date,
  }));

  const routes = ['', '/blog'].map((route) => ({
    url: `https://nathanpee.dev${route}`,
    lastModified: new Date().toISOString().split('T')[0]
  }));

  return [...routes, ...blogs];
}