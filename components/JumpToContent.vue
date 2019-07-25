<template>
  <a
    :href="contentId"
    :title="title"
    class="jump-to-content"
  > {{ text }} </a>
</template>

<script>
export default {
  name: 'JumpToContent',
  props: {
    contentId: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
@import "../assets/sass/utilities/_variables"

.jump-to-content
  position: absolute
  top: 0
  left: 50px
  z-index: 2
  display: inline-block
  padding: 0.8em 1em
  color: $great
  background-color: $gray
  transform: translateY(-100px)
  transition: transform 0.4s ease

  &:focus
    transform: translateY(0)
</style>
