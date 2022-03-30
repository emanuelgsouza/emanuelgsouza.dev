<template>
  <section v-editable="blok" class="section">
    <div class="title-container">
      <h2 class="title is-2">Alguns dos meus projetos</h2>
    </div>

    <div class="columns is-multiline">
      <div
        v-for="(project, index) in blok.links"
        :key="index"
        class="column is-half"
      >
        <AppProjectCard :project="project.content" :tags="project.tag_list" />
      </div>
    </div>

    <router-link
      to="/projects"
      title="Conheça todos os meus projetos"
      class="button is-primary is-outlined"
    >
      Ver todos os projetos
    </router-link>
  </section>
</template>

<script>
export default {
  name: 'HomeProjects',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>
