<template>
  <ul class="tags">
    <li v-for="(tag, index) in computedTags" :key="index" class="tag is-dark">
      #{{ tag }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'AppTags',

  props: {
    max: {
      type: Number,
      default: 0,
    },

    tags: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    computedTags() {
      if (this.max) {
        return this.tags.slice(0, this.max)
      }

      return this.tags
    },
  },
}
</script>
