<template>
  <div>
    <CNav />
    <main class="container has-fixed-nav p-4">
      <h1 class="title is-1"> Blog </h1>

      <CListPosts v-bind="{ posts }" />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PostsLayout',
  computed: {
    pages () {
      return this.$site.pages || []
    },
    posts () {
      return this.pages.filter(page => page.title)
    }
  }
}
</script>

<style>

</style>
