<template>
  <component
    :is="contentPost.component"
    v-if="contentPost.component"
    :key="contentPost._uid"
    :blok="contentPost"
    :post-data="post"
  />
</template>

<script>
import { useStoryblokBridge } from '@storyblok/nuxt'
import Prism from '~/plugins/prism'

const getSingleStory = (context) => {
  const { params } = context
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .get(`cdn/stories/posts/${params.post}`, {
      version,
    })
    .then((res) => res.data.story)
}

export default {
  async asyncData(context) {
    const { payload } = context

    if (payload) {
      return {
        post: payload,
      }
    }

    try {
      const post = await getSingleStory(context)

      return {
        post,
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
    post: { content: {} },
  }),

  head() {
    return {
      title: `${this.post.name} | Emanuel Gonçalves - Web Software Developer`,
    }
  },

  computed: {
    contentPost() {
      return this.post.content || {}
    },
  },

  mounted() {
    useStoryblokBridge(this.post.id, (newStory) => (this.post = newStory))

    Prism.highlightAll()
  },
}
</script>
