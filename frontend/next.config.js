module.exports = {
  // async redirects() {
  //   return [
  //     {
  //       source: 'http://127.0.0.1/:path*',
  //       destination: 'https://dalkak.store/:path*',
  //       permanent: true,
  //     },
  //   ];
  // },

  distDir: 'build',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        port: '',
        pathname: '/dalkak/**',
      },
    ],
  },
};
