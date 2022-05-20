export default function getMetatags(meta) {
  const { title, description, bannerUrl } = meta

  let data = [
    // description
    {
      hid: 'description',
      name: 'description',
      content: description,
    },

    // TWITTER
    {
      hid: 'twitter:title',
      name: 'twitter:title',
      content: title,
    },
    {
      hid: 'twitter:description',
      name: 'twitter:description',
      content: description,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: '@emanuelgsouza',
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: '@emanuelgsouza',
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: '@summary_large_image',
    },

    // OG
    {
      hid: 'og:title',
      name: 'og:title',
      content: title,
    },
    {
      hid: 'og:description',
      name: 'og:description',
      content: description,
    },
    {
      hid: 'og:type',
      name: 'og:type',
      content: 'article',
    },
  ]

  if (bannerUrl) {
    data = [
      ...data,
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: bannerUrl,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: bannerUrl,
      },
      {
        hid: 'og:image:width',
        name: 'og:image:width',
        content: '1000',
      },
      {
        hid: 'og:image:height',
        name: 'og:image:height',
        content: '420',
      },
    ]
  }

  return data
}
