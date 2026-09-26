import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://jhatechsolution.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    /* =====================================================
       MAIN PAGES
    ===================================================== */

    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${siteUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/portfolio`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: `${siteUrl}/projects`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    /* =====================================================
       WEB SOLUTIONS
    ===================================================== */

    {
      url: `${siteUrl}/services/website-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/services/web-applications`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/services/ecommerce`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    /* =====================================================
       MOBILE SOLUTIONS
    ===================================================== */

    {
      url: `${siteUrl}/services/android-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/services/ios-development`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/services/cross-platform-apps`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    /* =====================================================
       SOFTWARE SOLUTIONS
    ===================================================== */

    {
      url: `${siteUrl}/services/custom-software`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.95,
    },

    {
      url: `${siteUrl}/services/bug-fixing`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    {
      url: `${siteUrl}/services/maintenance`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },

    /* =====================================================
       TECHNOLOGY & DIGITAL SOLUTIONS
    ===================================================== */

    {
      url: `${siteUrl}/services/ai`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/services/cloud`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: `${siteUrl}/services/seo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },

    /* =====================================================
       LEGAL PAGES
    ===================================================== */

    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    {
      url: `${siteUrl}/terms`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}