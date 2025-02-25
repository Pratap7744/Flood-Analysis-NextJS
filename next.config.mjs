/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**", // Supports all external domains
          },
        ],
      },
};

export default nextConfig;
