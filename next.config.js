/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
        port: "",
        pathname: "/images/media/meals/**",
      },
    ],
  },
};

//localhost:3000/(https:/www.themealdb.com/images/media/meals/uuqvwu1504629254.jpg)

http: module.exports = withBundleAnalyzer(nextConfig);
