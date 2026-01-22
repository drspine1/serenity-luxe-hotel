/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
  remotePatterns: [
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },
  ],
},
 experimental: {
    turbo: false,
  },

};

export default nextConfig;
