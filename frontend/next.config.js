// eslint-disable-next-line @typescript-eslint/no-var-requires
const withExportImages = require('next-export-optimize-images');

export default withExportImages({
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
  output: 'export',
  images: {
    remotePatterns: [
      // 재료, 도구 이미지 경로
      {
        protocol: 'https',
        hostname: 'kr.object.ncloudstorage.com',
        port: '',
        pathname: '/dalkak/basic/**',
      },
      // 앱솔루트 이미지 경로
      {
        protocol: 'https',
        hostname: 'images.absolutdrinks.com',
        port: '',
        pathname: '/drink-images/**',
      },
      // iba 이미지 경로
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
        port: '',
        pathname: '/i/**',
      },
    ],
  },
});
