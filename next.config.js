/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        //pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'd1muf25xaso8hp.cloudfront.net',
        port: '',
        //pathname: '/account123/**',
      },
      {
        protocol:'https',
        hostname:'flowbite.com',
        port: '',
        //pathname: '/account123/**',

      },
     
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},

  async rewrites() {
    return [
      {
        source: '/AboutUs',
        destination: 'http://localhost:3000/About_Us',
       
   
      },
    ];
  },
}

module.exports = nextConfig