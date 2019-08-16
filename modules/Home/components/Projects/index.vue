<template>
  <div class="home_projects_section">
    <!-- TITLE -->
    <AppTitle :title="$t('projects.title')" />

    <!-- PROJECTS -->
    <div class="columns is-multiline">
      <div
        v-for="(project, key) in projects"
        :key="key"
        class="column is-4"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import Project from './Project'
import AppTitle from '~/components/Title'

export default {
  name: 'HomeProjects',
  components: {
    AppTitle,
    Project
  },
  data () {
    return {
      projects: [
        {
          name: this.$t('projects.project1.name'),
          description: this.$t('projects.project1.description'),
          url: 'https://acessibilidade-for-devs.github.io/',
          repository: 'https://github.com/acessibilidade-for-devs/acessibilidade-for-devs.github.io',
          tags: this.$t('projects.project1.tags'),
          image: '/projects-acessibility.jpg'
        },
        {
          name: this.$t('projects.project2.name'),
          description: this.$t('projects.project2.description'),
          url: null,
          repository: 'https://github.com/legislative-votes-br',
          tags: this.$t('projects.project2.tags'),
          image: '/projects-development.png'
        },
        {
          name: this.$t('projects.project3.name'),
          description: this.$t('projects.project3.description'),
          url: 'https://help-me.surge.sh',
          repository: 'https://github.com/emanuelgsouza/help-me',
          tags: this.$t('projects.project3.tags'),
          image: '/projects-helpme.jpg'
        },
        {
          name: this.$t('projects.project4.name'),
          description: this.$t('projects.project4.description'),
          url: null,
          repository: 'https://github.com/emanuelgsouza/eleicoes-dc-2016',
          tags: this.$t('projects.project4.tags'),
          image: '/projects-nopreview.png'
        },
        {
          name: this.$t('projects.project5.name'),
          description: this.$t('projects.project5.description'),
          url: 'http://www.unigranrio.com.br/ersi2019/',
          repository: null,
          tags: this.$t('projects.project5.tags'),
          image: '/projects-ersi2019.jpg'
        },
        {
          name: this.$t('projects.project6.name'),
          description: this.$t('projects.project6.description'),
          url: 'https://emilenagoncalves.com.br/',
          repository: null,
          tags: this.$t('projects.project6.tags'),
          image: '/projects-emilenagoncalves.jpg'
        }
      ]
    }
  }
}
</script>

<style>

</style>
