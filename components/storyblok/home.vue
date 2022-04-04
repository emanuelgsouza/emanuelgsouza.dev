<template>
  <section v-editable="blok" class="index-page">
    <component
      :is="item.component"
      v-for="item in blok.body"
      :key="item._uid"
      :blok="item"
      :last-posts="lastPosts"
    />
  </section>
</template>

<script>
export default {
  name: 'HomePage',

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

<style lang="scss">
.index-page {
  .profile-image {
    display: block;
    margin: 0 auto 2rem;
  }
}
</style>
