<template>
  <section v-editable="blok" class="section home-profile">
    <img
      class="profile-image"
      :src="blok.image.filename"
      alt="Foto de perfil de Emanuel Gonçalves"
      width="250"
      height="250"
    />

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div class="description" v-html="contentData"></div>
  </section>
</template>

<script>
import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'

export default {
  name: 'HomeProfile',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },

    lastPosts: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    aboutContent() {
      return this.blok.content || {}
    },

    contentData() {
      const resolver = new RichTextResolver()

      return resolver.render(this.aboutContent)
    },
  },
}
</script>

<style>
.home-profile .profile-image {
  display: block;
  margin: 0 auto 2rem;
}
</style>
