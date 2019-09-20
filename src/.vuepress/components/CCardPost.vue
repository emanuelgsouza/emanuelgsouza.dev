<template>
  <article class="post">
    <router-link :to="post.path" class="post-link">
      <p class="post-title">{{ title }}</p>
    </router-link>

    <p> {{ description }} </p>

    <p class="date"> Publicado em: {{ dateFormated }} </p>

    <div class="tags">
      <CTag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
      />
    </div>
  </article>
</template>

<script>
import { humanDateFormat } from '../utils/formats'

export default {
  name: 'CCardPost',
  props: {
    post: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    title() {
      return this.post.title || ''
    },
    frontmatter () {
      return this.post.frontmatter || {}
    },
    description () {
      return this.frontmatter.description
    },
    tags () {
      return this.frontmatter.tags
    },
    date () {
      return new Date(this.frontmatter.date)
    },
    dateFormated () {
      return humanDateFormat(this.date)
    }
  }
}
</script>

<style scoped>
.post {
  @apply py-4 px-6 rounded-sm text-secondary bg-primary shadow;
}

.post-title {
  @apply text-xl font-bold;
}

.tags {
  @apply mt-4;
}
</style>
