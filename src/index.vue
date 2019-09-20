<template>
  <main class="home-page">
    <div class="container">
      <CLogo class="logo" />

      <h1 class="home-page-title"> Emanuel Gonçalves </h1>

      <ContactIcons />

      <section class="home-page-description">
        <p>Prazer, sou Emanuel Gonçalves, casado e cristão, Engenheiro Front End, entusiasta de Tecnologias Web, Acessibilidade e Web Semântica. Trabalho como Desenvolvedor de Software na Decision6 - Store Flow. Possuo como hobbie o estudo na área de Inteligência Artificial, sobretudo Aprendizado de Máquina. Reconheço o papel do Open Source e das comunidades de desenvolvimento e sempre que possível participo delas, sobretudo no Telegram. Tenho como lema um ditado africano que diz 'To go fast, go alone; to go far, go together'.</p>
      </section>

      <CHr />

      <section class="mt-4">
        <h2 class="title is-2"> Confira alguns dos meus projetos </h2>
        <CListProjects
          v-bind="{ projects }"
        />

        <CLink
          class="mt-4"
          to="/projects"
          label="Meus projetos pessoais"
          title="Confira os projetos pessoal de Emanuel Gonçalves"
        />
      </section>

      <CHr />

      <section>
        <h2 class="title is-2"> Confira alguns dos textos em meu blog </h2>
        <CListPosts
          v-bind="{ posts }"
        />

        <CLink
          class="mt-4"
          to="/blog"
          label="Todos os meus textos"
          title="Confira os todos os meus textos"
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
