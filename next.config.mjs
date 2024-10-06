/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["unsplash.it"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unsplash.it",
      },
    ],
  },
};

export default nextConfig;
