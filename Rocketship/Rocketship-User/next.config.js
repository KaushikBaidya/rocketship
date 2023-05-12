/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["drive.google.com", "res.cloudinary.com", "i.ibb.co"],
  },
  env: {
    CLOUDINARY_ID: process.env.CLOUDINARY_ID,
    EMAILJS_SERVICE: process.env.EMAILJS_SERVICE,
    EMAILJS_TEMPLATE_CONTACT: process.env.EMAILJS_TEMPLATE_CONTACT,
    EMAILJS_PUBLIC: process.env.EMAILJS_PUBLIC,
    BASE_URL: process.env.BASE_URL,
  },
};

module.exports = nextConfig;
