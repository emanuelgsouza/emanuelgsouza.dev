<template>
  <main class="home-page">
    <div class="container">
      <CLogo class="logo" />

      <h1 class="home-page-title"> Emanuel Gonçalves </h1>

      <ContactIcons />

      <section class="home-page-description">
        <p>Pleasure, I am Emanuel Gonçalves, married and christian, Front End Enginner, enthusiast of Web Technologies, Accessibility and Semantic Web. I work with Front End at Storyblok. I have as hobbie the study in the area of Artificial Intelligence, especially Machine Learning, play chess and play guitar. I recognize the role of Open Source and development communities and, whenever possible, participate in them, especially in the Telegram. My motto is an African saying that says 'To go fast, go alone; to go far, go together'</p>
      </section>

      <CHr />

      <section class="mt-4">
        <h2 class="title is-2"> My projects </h2>
        <CListProjects
          v-bind="{ projects }"
        />

        <CLink
          class="mt-4"
          to="/projects"
          label="Show all projects"
          title="Show all projects"
        />
      </section>

      <CHr />

      <section>
        <h2 class="title is-2"> Blog posts </h2>
        <CListPosts
          v-bind="{ posts }"
        />

        <CLink
          class="mt-4"
          to="/blog"
          label="Show all blog posts"
          title="Show all blog posts"
        />
      </section>
      <CFooter />
    </div>
  </main>
</template>

<script>
import projectData from './.vuepress/utils/projects'
import { slice } from 'lodash'

export default {
  name: 'IndexPage',
  computed: {
    pages () {
      return this.$site.pages || []
    },
    posts () {
      return slice(this.pages.filter(page => page.title), 0, 4)
    },
    projects () {
      return slice(projectData['pt-br'], 0, 2)
    }
  }
}
</script>

<style scoped>
.home-page {
  @apply p-4;
}

.logo {
  max-width: 200px;
}

.home-page-title {
  @apply font-bold text-3xl;
}

.home-page-description {
  @apply text-lg my-4;
}

.posts-list {
  display: block;
  @apply mt-4;
}

.posts-list >>> .post:not(:first-of-type) {
  @apply mt-2;
}

/* tablets */
@screen md {
  .home-page {
    @apply p-8;
  }

  .home-page-title {
    @apply text-5xl;
  }

  .posts-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  .posts-list >>> .post:not(:first-of-type) {
    @apply mt-0;
  }
}
</style>
