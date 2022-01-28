<template>
  <main v-editable="blok" class="index-page">
    <section class="section">
      <img
        class="profile-image"
        :src="blok.profile.filename"
        alt="Foto de perfil de Emanuel Gonçalves"
        width="250"
        height="250"
      />

      <div class="description">
        <p>
          {{ blok.about }}
        </p>
      </div>
    </section>

    <section class="section">
      <div class="title-container">
        <h2 class="title is-2">Últimos blog posts</h2>
      </div>

      <div class="columns is-multiline">
        <div
          v-for="(post, index) in lastPosts"
          :key="index"
          class="column is-half"
        >
          <AppPostCard :post="post" />
        </div>
      </div>

      <router-link to="/posts" class="button is-primary is-outlined">
        Confira meus blog posts
      </router-link>
    </section>

    <section class="section">
      <div class="title-container">
        <h2 class="title is-2">Alguns dos meus projetos</h2>
      </div>

      <div class="columns is-multiline">
        <div
          v-for="(project, index) in blok.projects"
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
  </main>
</template>

<script>
export default {
  name: 'SbHome',

  props: {
    blok: {
      type: Object,
      default: () => ({}),
    },

    lastPosts: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss">
.index-page {
  .profile-image {
    display: block;
    margin: 0 auto 2rem;
  }
}
</style>
