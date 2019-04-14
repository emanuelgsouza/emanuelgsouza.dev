<template>
  <h3 class="home_section_title"> {{ title }} </h3>
</template>

<script>
export default {
  name: 'HomeSectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/utilities/_all.sass"

.home_section_title
  color: white
  text-align: center
  font-size: $size-1
  position: relative
  margin-bottom: 20px

  &::before
    content: ''
    display: block
    width: 25%
    height: 1px
    background-color: white
    position: absolute
    bottom: -5px
    left: 25%

  &::after
    content: ''
    display: block
    width: 25%
    height: 1px
    background-color: white
    position: absolute
    bottom: -5px
    right: 25%
</style>
