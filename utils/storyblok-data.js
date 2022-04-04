import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
})

export const getAllPosts = () => {
  return client.getAll('cdn/stories', {
    version: 'published',
    by_slugs: 'posts/*',
  })
}
