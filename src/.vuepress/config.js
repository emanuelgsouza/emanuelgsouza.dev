module.exports = {
  title: 'Emanuel Gonçalves',
  description: 'Meu blog pessoal, para compartilhamento de conhecimento relacionados ao mundo da tecnologia, teologia e outras coisas :)',
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
    ]
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
      '@vuepress/google-analytics',
      {
        'ga': process.env.GA
      }
    ],
    [
      '@vuepress/blog',
      {
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
    ]
  ]
}
