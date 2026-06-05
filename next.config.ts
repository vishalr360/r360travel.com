import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options",  value: "nosniff" },
  { key: "X-Frame-Options",         value: "SAMEORIGIN" },
  { key: "X-XSS-Protection",        value: "1; mode=block" },
  { key: "Referrer-Policy",         value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy",      value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.google.com https://www.googletagmanager.com",
      "frame-ancestors 'self'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  output: "standalone",

  // Compress responses
  compress: true,

  // Trailing slash consistency — canonical URLs use /page/
  trailingSlash: false,

  // Redirect rules
  async redirects() {
    return [
      // www → non-www (canonical)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tripsure.com" }],
        destination: "https://tripsure.com/:path*",
        permanent: true,
      },
      // Common typos / legacy paths
      { source: "/home",       destination: "/", permanent: true },
      { source: "/index",      destination: "/", permanent: true },
      { source: "/index.html", destination: "/", permanent: true },
      // No self-redirects needed — pages render at these paths directly
    ];
  },

  // Security + cache headers
  async headers() {
    return [
      // Security headers on all routes
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
      // Aggressive caching for static assets
      {
        source: "/fonts/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:file(.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|gif|woff|woff2|ttf|eot))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:file(.*\\.(?:js|css))",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // LLMs + AI discovery files — no-cache for freshness
      {
        source: "/llms.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
          { key: "Content-Type",  value: "text/plain; charset=utf-8" },
        ],
      },
      {
        source: "/llms-full.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
          { key: "Content-Type",  value: "text/plain; charset=utf-8" },
        ],
      },
      // Sitemap + robots — short cache
      {
        source: "/(sitemap.*\\.xml|robots\\.txt|humans\\.txt)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, must-revalidate" },
        ],
      },
    ];
  },

  // Image optimisation
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
