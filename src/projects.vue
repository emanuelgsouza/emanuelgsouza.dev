<template>
  <main>
    <CNav />

    <div class="projects-page has-fixed-nav">
      <div class="container">
        <h1 class="title"> Conheça alguns dos meus projetos </h1>

        <!-- PROJECTS -->
        <div class="projects-container">
          <div
            v-for="(project, key) in projects"
            :key="key"
            class="column is-4"
          >
            <CCardProject :project="project" />
          </div>
        </div>
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

.projects-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
}

@screen md {
  .projects-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
}
</style>
