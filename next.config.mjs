/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.meatandcheezz.com",
        pathname: "/**", // Add this line
      },
    ],
  },
  output:"export",
};

export default nextConfig;
