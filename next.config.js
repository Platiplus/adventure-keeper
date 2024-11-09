/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
      },
      {
        protocol: 'https',
        hostname: (process.env.NEXT_PUBLIC_SUPABASE_URL || 'http://localhost:54321').split('//')[1].split(':')[0],
      }
    ]
  },
};

module.exports = nextConfig;
