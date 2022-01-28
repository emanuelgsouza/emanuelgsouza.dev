import StoryblokClient from 'storyblok-js-client'

const client = new StoryblokClient({
  accessToken: 'SFz62rmD0ZrOfZqDVrCgCgtt',
})

export const getAllPosts = () => {
  return client.getAll('cdn/stories', {
    version: 'published',
    by_slugs: 'posts/*',
  })
}
