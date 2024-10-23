/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dashboard.meatandcheezz.com",
        pathname: "/**", // Add this line
      },
    ],
  },
  output:"export",
};

export default nextConfig;
