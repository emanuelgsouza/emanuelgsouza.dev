<template>
  <div class="tag-layout">
    <CNav />

    <main class="container has-fixed-nav p-4">
      <h1 class="title is-1"> Confira as tags </h1>
      <ul class="tags">
        <li v-for="tag in tags">
          <CLink
            v-bind="{
              icon: 'fas fa-tag',
              to: tag.path,
              label: tag.name,
              title: `Visualize os textos relacionados à tag ${tag.name}`
            }"
          />
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
export default {
  name: 'TagLayout',
  computed: {
    tags () {
      return this.$tag.list
    }
  }
}
</script>

<style scoped>
.tags {
  display: flex;
}

.tags li:not(:first-of-type) {
  @apply ml-2;
}
</style>
