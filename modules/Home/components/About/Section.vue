<template>
  <section>
    <AppTitle :title="title" />

    <div class="section_text">
      <p class="has-text-light">
        {{ paragraph }}
      </p>
    </div>
  </section>
</template>

<script>
import AppTitle from '~/components/Title'

export default {
  name: 'AppSection',
  components: {
    AppTitle
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.section_text
  margin: 10px 0

  .home_section_text_link
    color: $secondary

    &:hover
      text-decoration: underline
</style>
