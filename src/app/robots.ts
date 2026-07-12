import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const isLive = process.env.NEXT_PUBLIC_SITE_LIVE === "true";

  if (!isLive) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://sevinckarahanoglu.com/sitemap.xml",
  };
}
