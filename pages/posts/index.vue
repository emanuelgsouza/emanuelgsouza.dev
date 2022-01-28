<template>
  <section class="section">
    <AppTitle level="1">Meus posts</AppTitle>

    <div class="columns is-multiline">
      <div v-for="post in posts" :key="post.id" class="column is-half">
        <AppPostCard :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
const getPosts = (context) => {
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .getAll('cdn/stories', {
      version,
      by_slugs: 'posts/*',
    })
    .then((res) => res)
}

export default {
  async asyncData(context) {
    try {
      const posts = await getPosts(context)

      return {
        posts,
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
    posts: [],
  }),

  mounted() {
    this.$storybridge(() => {
      const storyblokInstance = new window.StoryblokBridge()

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
