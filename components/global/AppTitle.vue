<template>
  <div class="title-container">
    <component :is="tag" :class="computedClass">
      <slot />
    </component>
  </div>
</template>

<script>
export default {
  name: 'AppTitle',

  props: {
    level: {
      type: String,
      default: '1',
    },
  },

  computed: {
    tag() {
      return `h${this.level}`
    },

    computedClass() {
      return `title is-${this.level}`
    },
  },
}
</script>
