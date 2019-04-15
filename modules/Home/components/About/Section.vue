<template>
  <section>
    <AppTitle :title="title" />

    <div
      v-for="(paragraph, key) in paragraphs"
      :key="key"
      class="section_text"
    >
      <p
        class="has-text-light"
        v-html="paragraph"
      />
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
    paragraphs: {
      type: Array,
      default: () => []
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
