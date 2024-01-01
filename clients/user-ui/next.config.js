/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      "images.unsplash.com",
      "flowbite.s3.amazonaws.com",
      "localhost",
      "firebasestorage.googleapis.com",
      "www.fitsync.ro",
      "kaapo-fit-angular.vercel.app",
    ],
  },
};

module.exports = nextConfig;
