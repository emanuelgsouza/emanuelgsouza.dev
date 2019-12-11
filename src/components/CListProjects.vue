<template>
  <div class="projects-container">
    <div
      v-for="(project, key) in projects"
      :key="key"
    >
      <CCardProject :project="project" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CListProjects',
  props: {
    projects: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
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
