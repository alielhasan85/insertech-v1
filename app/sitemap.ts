import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://insertech.io"

  // This would typically come from a database or CMS
  const blogPosts = [
    { slug: "seo-importance-digital-marketing", lastModified: new Date() },
    { slug: "future-web-development-trends-2025", lastModified: new Date() },
    { slug: "odoo-erp-transform-business-operations", lastModified: new Date() },
    { slug: "native-vs-cross-platform-mobile-development", lastModified: new Date() },
  ]

  const services = [
    { slug: "web-development", lastModified: new Date() },
    { slug: "mobile-development", lastModified: new Date() },
    { slug: "custom-software", lastModified: new Date() },
    { slug: "erp-systems", lastModified: new Date() },
    { slug: "digital-marketing", lastModified: new Date() },
    { slug: "shopify", lastModified: new Date() },
    { slug: "video-production", lastModified: new Date() },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: service.lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
