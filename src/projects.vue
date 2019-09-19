<template>
  <main>
    <CNav />

    <div class="projects-page has-fixed-nav">
      <div class="container">
        <h1 class="title is-1"> Conheça alguns dos meus projetos </h1>

        <!-- PROJECTS -->
        <CListProjects
          v-bind="{ projects }"
        />
      </div>
      <CFooter />
    </div>
  </main>
</template>

<script>
import projectData from './.vuepress/utils/projects'

export default {
  name: 'ProjectsPage',
  data: () => ({
    projects: projectData['pt-br']
  })
}
</script>

<style scoped>
.projects-page {
  @apply p-4;
}
</style>
