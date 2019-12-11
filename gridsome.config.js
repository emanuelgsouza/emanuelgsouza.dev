const tailwindcss = require("tailwindcss")

const siteConfig = {
  title: 'Emanuel Gonçalves - Front End Enginner',
  color: '#2f3439'
}

module.exports = {
  siteName: siteConfig.title,
  plugins: [
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: siteConfig.title,
          startUrl: '/',
          display: 'standalone',
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: siteConfig.title,
          themeColor: siteConfig.color,
          backgroundColor: '#ffffff',
          icon: './src/favicon.png',
          msTileImage: './src/favicon.png',
          msTileColor: siteConfig.color
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}