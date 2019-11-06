module.exports = {
  title: 'Emanuel Gonçalves - Front End Enginner',
  description: 'My personal website and blog. A place to meet me and share my knowledge',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Lora&display=swap'
      }
    ],
    [
      'meta',
      {
        content: '#2f3439'
      }
    ],
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#2f3439' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#2f3439' }]
  ],
  extend: '@vuepress/theme-default',
  postcss: {
    plugins: [
      require('autoprefixer'),
      require('tailwindcss')('./tailwind.config.js')
    ]
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    'vuepress-plugin-container',
    'vuepress-plugin-medium-zoom',
    'vuepress-plugin-reading-time',
    [
      '@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics', {
        'ga': process.env.GA
      }
    ],
    [
      '@vuepress/blog', {
        directories: [
          {
            id: 'post',
            dirname: 'posts',
            layout: 'Layout',
            itemLayout: 'Post',
            path: '/post/',
            itemPermalink: '/post/:year/:month/:day/:slug'
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ['tag', 'tags'],
            path: '/tag/',
            layout: 'Tag',
            frontmatter: { title: 'Tag' },
            itemlayout: 'IndexPost',
            pagination: {
              perPagePosts: 3
            }
          }
        ],
      }
    ],
    [
      'vuepress-plugin-feed',
      {
        canonical_base: 'https://emanuelgsouza.dev'
      }
    ]
  ]
}
