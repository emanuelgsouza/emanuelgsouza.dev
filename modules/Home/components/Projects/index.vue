<template>
  <div class="home_projects_section">
    <!-- TITLE -->
    <AppTitle title="Projetos" />

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
  data: () => ({
    projects: [
      {
        name: 'Guia de Acessibilidade na web',
        description: 'Um site para quem quer aprender sobre acessibilidade. Voltado para o mundo dos devs, você encontra lá inúmeras dicas de como tornar seu site acessível',
        url: 'https://acessibilidade-for-devs.github.io/',
        repository: 'https://github.com/acessibilidade-for-devs/acessibilidade-for-devs.github.io',
        tags: ['Acessibilidade', 'Front-End']
      },
      {
        name: 'Como meu deputado foi eleito?',
        description: 'Você conhece o conceito de puxadinho? Então, este projeto visa a trazer de maneira rápida, a informação de que Deputados foram "puxados" e quais foram eleitos pelos seus próprios votos. Ainda em desenvolvimento de Front-End',
        url: null,
        repository: 'https://github.com/Guilherme2020/legislative-votes-web',
        tags: ['React', 'Front-End']
      },
      {
        name: '[API] Como meu deputado foi eleito?',
        description: 'API para os dados do site "Como meu deputado foi eleito?"',
        url: null,
        repository: 'https://github.com/emanuelgsouza/legislative-votes-api',
        tags: ['Nodejs', 'Back-end', 'Javascript']
      },
      {
        name: 'Help-Me!',
        description: 'Uma aplicação para cadastro de problemas para os cursos de TI da Unigranrio',
        url: 'https://help-me.surge.sh',
        repository: 'https://github.com/emanuelgsouza/help-me',
        tags: ['Vuejs', 'Quasar', 'Front-end', 'Javascript']
      }
    ]
  })
}
</script>

<style>

</style>
