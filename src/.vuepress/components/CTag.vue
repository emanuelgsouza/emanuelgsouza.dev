<template>
  <span class="c-tag">
    {{ tag }}
  </span>
</template>

<script>
export default {
  name: 'CTag',
  props: {
    tag: {
      type: String
    }
  }
}
</script>

<style scoped>
.c-tag {
  @apply inline-block py-1 px-2 rounded-sm bg-secondary text-primary;
}

.c-tag:first-of-type {
  @apply mr-1;
}

.c-tag:not(:first-of-type) {
  @apply ml-1;
}
</style>
