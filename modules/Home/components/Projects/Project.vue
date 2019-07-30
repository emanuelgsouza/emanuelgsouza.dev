<template>
  <div class="project_card">
    <!-- NAME -->
    <h4 class="project_card_name">
      <span class="has-text-weight-bold"> {{ name }} </span>

      <div class="project_card_icons_container">
        <!-- URL -->
        <AppIcon
          v-if="hasUrl"
          name="fas fa-external-link-square-alt"
          :url="url"
          :title="'projects.go_to_website'"
          :title-extra-properties="{ name }"
          size="1.4rem"
          class="project_card_link"
        />

        <!-- GITHUB -->
        <AppIcon
          v-if="hasRepository"
          name="fab fa-github"
          :url="repository"
          :title="'projects.go_to_github'"
          :title-extra-properties="{ name }"
          size="1.4rem"
          class="project_card_repository"
        />
      </div>
    </h4>

    <!-- DESCRIPTION -->
    <p class="project_card_description">
      {{ description }}
    </p>

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
  </div>
</template>

<script>
import { get, isNil, isEmpty } from 'lodash'
import AppIcon from '~/components/Icon'

export default {
  name: 'Project',
  components: { AppIcon },
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
  padding: 10px
  background-color: #fefefe
  border-radius: 4px
  box-shadow: 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12) // based on Material Card

  .project_card_name
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
    margin: 10px 0

  .project_card_tags .tag
    background-color: $secondary
    color: $primary
</style>
