<template>
  <main class="theme-container">
    <CNav />

    <div class="container has-fixed-nav content">
      <Content slot-key="header" />

      <p class="mb-2">
        <small> Publicado em {{ date }} - {{ timeToRead }} minutos </small><br v-if="lastUpdated" />
        <small v-if="lastUpdated"> Atualizado em {{ lastUpdated }} </small>
      </p>

      <Content />

      <CFooter />
    </div>
  </main>
</template>

<script>
import { humanDateFormat, humanDateFormatFull } from '../utils/formats'

export default {
  name: 'PostLayout',
  computed: {
    timeToRead () {
      const readingTime = this.$page.readingTime || {}
      return Math.floor(readingTime.minutes || 0)
    },
    date () {
      return humanDateFormat(new Date(this.$frontmatter.date))
    },
    lastUpdated () {
      if (this.$page.lastUpdated) {
        return humanDateFormatFull(new Date(this.$page.lastUpdated))
      }

      return null
    }
  }
}
</script>

<style scoped>
.content {
  @apply pt-8 px-6;
}

.content >>> h1 {
  @apply text-4xl mb-6 font-bold;
}

.content >>> h2 {
  @apply text-2xl my-6 font-bold;
}

.content >>> hr {
  @apply my-6;
}

.content >>> .header-anchor {
  display: none;
}

.content {
  @apply text-lg;
}

.content >>> p:not(:first-of-type) {
  @apply mt-6;
}

.content >>> a {
  @apply text-tertiary border-b border-tertiary;
}

.content >>> ul {
  list-style: disc outside;
  @apply ml-8 my-6;
}

.content >>> img {
  @apply mb-6 shadow rounded-lg;
}
</style>
