<template>
  <section v-editable="blok" class="section">
    <component
      :is="item.component"
      v-for="item in blok.body"
      :key="item._uid"
      :blok="item"
      :post-data="postData"
    />
  </section>
</template>

<script>
export default {
  name: 'PostPage',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },

    postData: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
