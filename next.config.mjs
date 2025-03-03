/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // jQuery and window fixes for Next.js
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    
    return config;
  },
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
