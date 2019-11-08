<template>
  <div class="lists-layout">
    <CNav />

    <main class="container has-fixed-nav p-4">
      <h1 class="title is-1"> {{ $frontmatter.title }} </h1>

      <ul id="default-layout">
        <li v-for="post in posts">
          <CListPosts
            v-bind="{ posts }"
          />
        </li>
      </ul>

      <div id="pagination">
        <router-link
          v-if="$pagination.hasPrev"
          :to="$pagination.prevLink">Prev
        </router-link>

        <router-link
          v-if="$pagination.hasNext"
          :to="$pagination.nextLink">Next
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'IndexLayout',
  computed: {
    posts () {
      return this.$pagination.pages
    }
  }
}
</script>
