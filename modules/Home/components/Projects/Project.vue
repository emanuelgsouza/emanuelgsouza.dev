<template>
  <div class="project_card">
    <a
      :href="url"
      :title="$t('projects.go_to_website', {name})"
      target="blank"
    >
      <figure
        v-if="hasImage"
        class="project_card_image"
      >
        <img :src="image" alt="">
      </figure>
    </a>
    <div class="project_card_content">
      <!-- NAME -->
      <template v-if="hasUrl">
        <a
          :href="url"
          :title="$t('projects.go_to_website', {name})"
          target="blank"
          class="project_card_name"
        >
          <span class="has-text-weight-bold"> {{ name }} </span>
        </a>
      </template>
      <template v-else>
        <h4 class="project_card_name">
          <span class="has-text-weight-bold"> {{ name }} </span>
        </h4>
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
          {{ tag }}
        </span>
      </div>

      <!-- DESCRIPTION -->
      <p class="project_card_description">
        {{ description }}
      </p>

      <a
        v-if="hasRepository"
        class="button"
        :href="repository"
        :title="$t('projects.go_to_github', { name })"
        target="blank"
      >
        <span class="icon is-small">
          <i class="fab fa-github" />
        </span>
        <span>Github</span>
      </a>
    </div>
  </div>
</template>

<script>
import { get, isNil, isEmpty } from 'lodash'
// import AppIcon from '~/components/Icon'

export default {
  name: 'Project',
  // components: { AppIcon },
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    name () {
      return get(this.project, 'name', '') || ''
    },
    description () {
      return get(this.project, 'description', '') || ''
    },
    url () {
      return get(this.project, 'url', null)
    },
    hasUrl () {
      return !isNil(this.url)
    },
    repository () {
      return get(this.project, 'repository', null)
    },
    image () {
      return get(this.project, 'image', null)
    },
    hasImage () {
      return !isNil(this.image)
    },
    hasRepository () {
      return !isNil(this.repository)
    },
    tags () {
      return get(this.project, 'tags', []) || []
    },
    hasTags () {
      return !isEmpty(this.tags)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "~assets/sass/utilities/_all.sass"

.project_card
  position: relative
  background-color: #fefefe
  border-radius: 0 0 4px 4px
  overflow: hidden
  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) // based on Material Card

  .project_card_image
    img
      transition: transform 0.4s ease

    &:hover
      img
        transform: scale(1.1)

  .project_card_content
    padding: 10px

  .project_card_name
    color: inherit

    span
      position: relative
      display: block

    .project_card_icons_container
      position: absolute
      top: 5px
      right: 10px

    .project_card_link,
    .project_card_repository
      color: $primary

    .project_card_icons_container > :nth-child(even)
      margin-left: 10px

  .project_card_description
    margin: 0.5rem 0 0.5rem 0

  .button
    background-color: $primary
    color: white
    border: none

  .project_card_tags.tags
    margin-top: 0.5rem
    margin-bottom: 0

    .tag
      background-color: $secondary
      color: $primary
</style>
