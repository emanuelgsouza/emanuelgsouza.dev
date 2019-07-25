<template>
  <a
    class="app_icon"
    :href="url"
    :style="inlineStyle"
    :title="$t(title, titleExtraProperties)"
    target="blanck"
  >
    <i :class="name" />
  </a>
</template>

<script>
export default {
  name: 'AppIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    titleExtraProperties: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    inlineStyle () {
      if (this.size) {
        return {
          fontSize: this.size
        }
      }
      return null
    }
  }
}
</script>

<style scoped>
.app_icon {
  color: inherit;
}
</style>
