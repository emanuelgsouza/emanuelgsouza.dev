<template>
  <div class="project_card">
    <a
      v-if="hasImage"
      :href="url"
      :title="`Conheça site do projeto ${name}`"
      target="blank"
      class="project_card_image"
    >
      <figure>
        <img :src="image.src" alt="">
      </figure>
    </a>
    <div class="project_card_content">
      <!-- NAME -->
      <template v-if="hasUrl">
        <a
          :href="url"
          :title="`Conheça site do projeto ${name}`"
          target="blank"
          class="project_card_name"
        >
          <span class="has-text-weight-bold"> {{ name }} </span>
        </a>
      </template>
      <template v-else>
        <p class="project_card_name">
          <span class="has-text-weight-bold"> {{ name }} </span>
        </p>
      </template>

      <!-- TAGS -->
      <div
        v-if="hasTags"
        class="project_card_tags tags"
      >
        <span
          v-for="(tag, key) in tags"
          :key="key"
          class="tag is-secondary"
        >
          <FontAwesomeIcon icon="tag" />
          {{ tag }}
        </span>
      </div>

      <!-- DESCRIPTION -->
      <!-- <p class="project_card_description">
        {{ description }}
      </p> -->

      <a
        v-if="hasRepository"
        class="button"
        :href="repository"
        target="blank"
      >
        <span class="icon is-small">
          <FontAwesomeIcon :icon="['fab', 'github']" />
        </span>

        <span>Github</span>
      </a>
    </div>
  </div>
</template>

<script>
import { isNil } from '../utils/functions'

export default {
  name: 'CCardProject',
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    name () {
      return this.project.name || ''
    },
    description () {
      return this.project.description || ''
    },
    url () {
      return this.project.url || null
    },
    hasUrl () {
      return !isNil(this.url)
    },
    repository () {
      return this.project.repository || null
    },
    image () {
      const path = this.project.image || null

      if (path) {
        return require(`!!assets-loader!~/assets/images/${path}`) 
      }

      return ''
    },
    hasImage () {
      return !isNil(this.image)
    },
    hasRepository () {
      return !isNil(this.repository)
    },
    tags () {
      return this.project.tags || []
    },
    hasTags () {
      return this.tags.length > 0
    }
  }
}
</script>

<style scoped>
.project_card {
  @apply relative shadow bg-white overflow-hidden rounded-sm;
}

.project_card_image img {
  transition: transform 0.4s ease;
}

.project_card_image:hover img {
  transform: scale(1.1);
}

.project_card_content {
  @apply p-4;
}

.project_card_content .project_card_name {
  color: inherit;
  font-size: 20px;
}

.project_card_content .project_card_name .project_card_link,
.project_card_content .project_card_name .project_card_repository {
  @apply text-primary;
}

.project_card_content .project_card_description {
  @apply my-4;
}

.project_card_content .button {
  @apply text-secondary bg-primary;
}

.project_card_content .project_card_tags.tags {
  margin-top: 0.5rem;
  margin-bottom: 0;
}

.project_card_content .project_card_tags.tags .tag {
  display: inline-block;
  @apply py-2 text-primary text-sm;
}

.project_card_content .project_card_tags.tags .tag:not(:first-of-type) {
  @apply ml-2;
}

.button {
  display: inline-block;
  @apply mt-2;
}

.button .icon {
  @apply mr-1;
}
</style>
