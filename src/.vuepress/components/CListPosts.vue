<template>
  <div class="posts-container">
    <div
      v-for="(post, key) in posts"
      :key="key"
    >
      <CCardPost :post="post" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CListPosts',
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.posts-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
}

@screen md {
  .posts-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}
</style>
