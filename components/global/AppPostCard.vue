<template>
  <div class="post-card card">
    <div class="card-content">
      <AppTags :tags="post.tag_list" :max="2" />

      <p class="title is-4">
        <router-link
          class="has-text-black"
          :to="`posts/${post.slug}`"
          :title="computedTitle"
        >
          {{ post.content.title }}
        </router-link>
      </p>

      <p class="mb-4">
        {{ post.content.description }}
      </p>

      <p>Publicado em {{ computedDate }}</p>
    </div>
  </div>
</template>

<script>
import { readableDate } from '~/utils/time'

export default {
  name: 'AppPostCard',

  props: {
    post: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    computedDate() {
      return readableDate(this.post.first_published_at)
    },
  },

  methods: {
    computedTitle() {
      return `Confira o post '${this.post.data.title}'`
    },
  },
}
</script>
