/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://www.pexels.com',
        port: '',
        pathname: '/api/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
