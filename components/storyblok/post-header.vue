<template>
  <header v-editable="blok" class="blog-post__header">
    <figure class="image mb-4">
      <img
        width="800"
        height="450"
        :src="postBanner.filename"
        :alt="postBanner.alt"
      />
    </figure>

    <div class="blog-post__headline">
      <AppTags :tags="postData.tag_list" />

      <AppTitle level="1">
        {{ blok.title }}
      </AppTitle>

      <p>Publicado em {{ computedDate }}</p>

      <p v-if="hasOriginalPost">
        Texto originalmente publicado em
        <a
          :href="contentPost.original_post.url"
          rel="noreferrer noopener"
          target="_blank"
        >
          {{ originalPostDomain }}
        </a>
      </p>
    </div>

    <hr />
  </header>
</template>

<script>
import { readableDate } from '~/utils/time'

export default {
  name: 'PostHeader',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },

    postData: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    postBanner() {
      return this.blok.banner || {}
    },

    computedDate() {
      return readableDate(this.postData.first_published_at)
    },

    originalPost() {
      return this.contentPost.original_post || {}
    },

    hasOriginalPost() {
      return !!this.originalPost.url
    },

    contentPost() {
      return this.postData.content || {}
    },

    originalPostDomain() {
      if (!this.hasOriginalPost) return

      const postUrl = new URL(this.contentPost.original_post.url || '')

      return postUrl.host
    },
  },
}
</script>
