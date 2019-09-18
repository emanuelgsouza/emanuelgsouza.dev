<template>
  <router-link :to="to" class="c-link" :title="title">
    <span>{{ label }}</span>
  </router-link>
</template>

<script>
export default {
  name: 'CLink',
  props: {
    to: {
      type: [String, Object],
      required: true
    },
    label: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.c-link {
  transition: all 0.3s ease-out;
  @apply relative inline-block py-2 px-4 border border-primary rounded text-primary;
}

.c-link span {
  position: relative;
  z-index: 2;
}

.c-link::after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: 1;
  @apply bg-primary;
  transition: all 0.3s ease-out;
}

.c-link:hover,
.c-link:focus {
  @apply text-secondary;
}

.c-link:hover::after,
.c-link:focus::after {
  width: 100%;
}
</style>
