<template>
  <div class="home-page">
    <div class="container">
      <CLogo class="logo" />

      <h1 class="home-page-title"> Emanuel Gonçalves </h1>

      <ContactIcons />

      <section class="home-page-description">
        <p>Prazer, sou Emanuel Gonçalves, casado e cristão, Engenheiro Front End, entusiasta de Tecnologias Web, Acessibilidade e Web Semântica. Trabalho como Desenvolvedor de Software na Decision6 - Store Flow. Possuo como hobbie o estudo na área de Inteligência Artificial, sobretudo Aprendizado de Máquina. Reconheço o papel do Open Source e das comunidades de desenvolvimento e sempre que possível participo delas, sobretudo no Telegram. Tenho como lema um ditado africano que diz 'To go fast, go alone; to go far, go together'.</p>

        <div class="mt-4">
          <CLink
            to="/projects"
            label="Projetos"
            title="Confira os projetos pessoal de Emanuel Gonçalves"
          />
        </div>
      </section>

      <hr class="w-full md:w-3/5 bg-primary my-4" />

      <section>
        <h2 class="text-2xl font-bold"> Textos em meu blog </h2>
        <div class="posts-list">
          <CCardPost
            v-for="(post, index) in posts"
            :key="index"
            v-bind="{ post }"
          />
        </div>
      </section>
      <CFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    pages () {
      return this.$site.pages || []
    },
    posts () {
      return this.pages.filter(page => page.title)
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
