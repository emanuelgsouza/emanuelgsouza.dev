<template>
  <main>
    <CNav />

    <div class="projects-page has-fixed-nav">
      <div class="container p-4">
        <h1 class="title is-1"> Projects </h1>

        <!-- PROJECTS -->
        <CListProjects v-bind="{ projects }" />
        <CFooter />
      </div>
    </div>
  </main>
</template>

<script>
import projectData from '../utils/projects'

export default {
  name: 'ProjectsPage',
  metaInfo: {
    title: 'Projects'
  },
  data: () => ({
    projects: JSON.parse(JSON.stringify(projectData['pt-br']))
  })
}
</script>
