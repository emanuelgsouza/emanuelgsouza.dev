import pkg from './package'
import i18nConfig from './i18n/module'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Emanuel Gonçalves',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Nunito'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
        integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
        crossorigin: 'anonymous'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/flag-icons.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-i18n', i18nConfig],
    ['@nuxtjs/google-analytics', {
      id: process.env.GA,
      dev: false
    }]
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://use.fontawesome.com/.*'
      },
      {
        urlPattern: 'https://fonts.googleapis.com/.*'
      },
      {
        urlPattern: 'https://fonts.gstatic.com/.*'
      }
    ]
  }
}
