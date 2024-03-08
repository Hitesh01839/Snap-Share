/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "znjhkxwiyuvvmhhwkfqj.supabase.co",
      },
    ],
  },
};

export default nextConfig;
