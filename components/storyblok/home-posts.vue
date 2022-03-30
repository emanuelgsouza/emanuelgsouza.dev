<template>
  <section v-editable="blok" class="section">
    <div class="title-container">
      <h2 class="title is-2">Últimos blog posts</h2>
    </div>

    <div class="columns is-multiline">
      <div
        v-for="(post, index) in lastPosts"
        :key="index"
        class="column is-half"
      >
        <AppPostCard :post="post" />
      </div>
    </div>

    <router-link to="/posts" class="button is-primary is-outlined">
      Confira meus blog posts
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HomePosts',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },

    lastPosts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
