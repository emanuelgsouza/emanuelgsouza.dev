<template>
  <component
    :is="story.content.component"
    v-if="story.content.component"
    :key="story.content._uid"
    :blok="story.content"
    :last-posts="lastPosts"
  />
</template>

<script>
import { useStoryblokBridge } from '@storyblok/nuxt'
import getMetatags from '~/utils/get-metatags'

const getHomeStory = (context) => {
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .get('cdn/stories/home', {
      version,
      resolve_relations: ['home-projects.links'],
    })
    .then((res) => res.data.story)
}

const getLastPosts = (context) => {
  return context.app.$storyapi
    .get('cdn/stories', {
      starts_with: 'posts',
      sort_by: 'first_published_at:desc',
      per_page: 4,
    })
    .then((res) => res.data.stories)
}

export default {
  async asyncData(context) {
    try {
      const homeStory = await getHomeStory(context)
      const lastPosts = await getLastPosts(context)

      return {
        story: homeStory,
        lastPosts,
      }
    } catch (res) {
      if (!res.response) {
        console.error(res)
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        console.error(res.response.data)
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    }
  },

  data: () => ({
    story: { content: {} },

    lastPosts: [],
  }),

  head() {
    const title = `Home | Emanuel Gonçalves - Web Software Developer`

    return {
      title,
      meta: getMetatags({
        title,
        description:
          'Meu blog pessoal, local em que compartilho um pouco do meu aprendizado, meus projetos e meus pensamentos',
        bannerUrl: 'https://emanuelgsouza.dev/cover.jpeg',
      }),
    }
  },

  mounted() {
    useStoryblokBridge(this.story.id, (newStory) => (this.story = newStory))
  },
}
</script>
