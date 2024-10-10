/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "meatapi.echopus.com",
        pathname: "/**", // Add this line
      },
    ],
  },
};

export default nextConfig;
