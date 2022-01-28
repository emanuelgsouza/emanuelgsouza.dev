<template>
  <section class="section">
    <header class="blog-post__header">
      <figure class="image mb-4">
        <img
          width="800"
          height="450"
          :src="contentPost.banner.filename"
          :alt="contentPost.banner.alt"
        />
      </figure>

      <div class="blog-post__headline">
        <AppTags :tags="post.tag_list" />

        <AppTitle level="1">
          {{ contentPost.title }}
        </AppTitle>

        <p>
          Publicado em {{ computedDate }} -
          <!-- {{ content | readableTimeToRead }} -->
        </p>

        <p v-if="hasOriginalPost">
          Texto originalmente publicado em
          <a :href="contentPost.original_post.url" rel="noreferrer noopener">
            {{ contentPost.original_post.url }}
          </a>
        </p>
      </div>
    </header>

    <hr />

    <div class="content" v-html="contentData" />
  </section>
</template>

<script>
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
import { readableDate } from '~/utils/time'
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
    try {
      const post = await getSingleStory(context)
      console.log(post)

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

  computed: {
    contentPost() {
      return this.post.content || {}
    },

    computedDate() {
      return readableDate(this.post.first_published_at)
    },

    originalPost() {
      return this.post.original_post || {}
    },

    hasOriginalPost() {
      return !!this.originalPost.url
    },

    contentData() {
      const resolver = new RichTextResolver()

      return resolver.render(this.contentPost.content)
    },
  },

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

    Prism.highlightAll()
  },
}
</script>
