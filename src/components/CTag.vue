<template>
  <router-link class="c-tag" :to="tagPath">
    <i class="fas fa-tag" />
    <span> {{ tag }} </span>
  </router-link>
</template>

<script>
export default {
  name: 'CTag',
  props: {
    tag: {
      type: String
    }
  },
  computed: {
    tagPath () {
      return `/tag/${this.tag}`
    }
  }
}
</script>

<style scoped>
.c-tag {
  @apply inline-block py-1 px-2 rounded-sm bg-primary text-secondary;
}

.c-tag:first-of-type {
  @apply mr-1;
}

.c-tag:not(:first-of-type) {
  @apply ml-1;
}
</style>
