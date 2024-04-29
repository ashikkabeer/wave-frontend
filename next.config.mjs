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
          {
            protocol: 'https',
            hostname: 'firebasestorage.googleapis.com',
            port: '',
            pathname: '/*/**',
          },
        ],
      },
};

export default nextConfig;

  
//   http://localhost:3000/(https://loremflickr.com/640/480/food)
//(https://firebasestorage.googleapis.com/v0/b/wave-miniproject.appspot.com/o/post%2F93de16f8-e215-4b9b-9610-ce589914594c.jpg?alt=media&token=da3ed810-c0fe-4a60-bacf-8fb64f3da712) 
