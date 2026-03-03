/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/atheer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/atheer/' : '',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false
};

module.exports = nextConfig;
