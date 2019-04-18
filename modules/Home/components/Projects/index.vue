<template>
  <div class="home_projects_section">
    <!-- TITLE -->
    <AppTitle :title="$t('projects.title')" />

    <!-- PROJECTS -->
    <div>
      <div
        v-for="(project, key) in projects"
        :key="key"
      >
        <Project :project="project" />
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '~/components/Title'
import Project from './Project'

export default {
  name: 'HomeProjects',
  components: {
    AppTitle,
    Project
  },
  data() {
    return {
      projects: [
        {
          name: 'Guia de Acessibilidade na web',
          description: this.$t('projects.project1.description'),
          url: 'https://acessibilidade-for-devs.github.io/',
          repository: 'https://github.com/acessibilidade-for-devs/acessibilidade-for-devs.github.io',
          tags: this.$t('projects.project1.tags')
        },
        {
          name: 'Como meu deputado foi eleito?',
          description: this.$t('projects.project2.description'),
          url: null,
          repository: 'https://github.com/Guilherme2020/legislative-votes-web',
          tags: this.$t('projects.project2.tags')
        },
        {
          name: '[API] Como meu deputado foi eleito?',
          description: this.$t('projects.project3.description'),
          url: null,
          repository: 'https://github.com/emanuelgsouza/legislative-votes-api',
          tags: this.$t('projects.project3.tags')
        },
        {
          name: 'Help-Me!',
          description: this.$t('projects.project4.description'),
          url: 'https://help-me.surge.sh',
          repository: 'https://github.com/emanuelgsouza/help-me',
          tags: this.$t('projects.project4.tags')
        }
      ]
    }
  }
}
</script>

<style>

</style>
