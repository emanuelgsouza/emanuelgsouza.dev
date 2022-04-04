<template>
  <!-- eslint-disable-next-line -->
  <div class="content" v-html="contentData" v-editable="blok" />
</template>

<script>
import richTextResolver from '~/utils/richtext-resolver'

export default {
  name: 'PostBody',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    contentData() {
      return richTextResolver.render(this.blok.content)
    },
  },
}
</script>
