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
const getHomeStory = (context) => {
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .get('cdn/stories/home', {
      version,
      resolve_relations: ['home.projects'],
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
    return {
      title: `Home | Emanuel Gonçalves - Web Software Developer`,
    }
  },

  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new window.StoryblokBridge({
        resolveRelations: ['home.projects'],
      })

      // Use the input event for instant update of content
      storyblokInstance.on('input', (event) => {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      })

      // Use the bridge to listen the events
      storyblokInstance.on(['published', 'change'], (event) => {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true,
        })
      })
    })
  },
}
</script>
