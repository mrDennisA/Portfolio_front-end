/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig;
module.exports = {
  nextConfig,
  // compiler: {
  //   // ssr and displayName are configured by default
  //   styledComponents: true,
  // },
  images: {
    domains: ["res.cloudinary.com"],
  },
  // experimental: {
  //   scrollRestoration: true,
  // },
};
