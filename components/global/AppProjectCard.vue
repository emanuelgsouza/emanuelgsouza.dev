<template>
  <div class="card">
    <a
      :href="project.url.url"
      class="card-image"
      :title="computedLinkTitle"
      rel="noreferrer"
      target="_blank"
    >
      <figure class="image">
        <img :src="project.image.filename" width="400" height="200" alt="" />
      </figure>
    </a>

    <div class="card-content">
      <AppTags :tags="tags" />

      <p class="title is-4">{{ project.title }}</p>

      <div class="buttons">
        <template v-if="project.repository.url">
          <a
            :href="project.repository.url"
            target="_blank"
            rel="noreferrer"
            class="button is-small"
            :title="computedGithubTitle"
          >
            Github
          </a>
        </template>

        <template v-if="project.url.url">
          <a
            :href="project.url.url"
            target="_blank"
            rel="noreferrer"
            class="button is-small"
            :title="computedLinkTitle"
          >
            Link
          </a>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppProjectCard',

  props: {
    project: {
      type: Object,
      default: () => ({}),
    },

    tags: {
      type: Array,
      default: () => [],
    },
  },

  computed: {
    computedLinkTitle() {
      return `Conheça o projeto ${this.project.title}`
    },

    computedGithubTitle() {
      return `Conheça o repositório do projeto ${this.project.title}`
    },
  },
}
</script>
