/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'loremflickr.com',
            port: '',
            pathname: '/*/**',
          },
          {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/*/**',
          },
        ],
      },
};

export default nextConfig;

  
//   http://localhost:3000/(https://loremflickr.com/640/480/food)