<template>
  <div class="theme-container">
    <CNav />

    <div class="container has-fixed-nav">
      <Content class="content" />

      <CFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostLayout',
  computed: {
    timeToRead () {
      const readingTime = this.$page.readingTime || {}
      return Math.floor(readingTime.minutes || 0)
    }
  },
  mounted () {
    console.log()
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
  @apply mb-6;
}

.content >>> a {
  @apply text-tertiary border-b border-tertiary;
}

.content >>> ul {
  list-style: disc outside;
  @apply ml-8 my-6;
}

.content >>> img {
  @apply mb-6;
}
</style>
