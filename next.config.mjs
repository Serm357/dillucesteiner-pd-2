import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: "https",
        hostname: "images.unsplash.com",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

export default withNextVideo(nextConfig);