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
          size="1.4rem"
          class="project_card_link"
        />

        <!-- GITHUB -->
        <AppIcon
          v-if="hasRepository"
          name="fab fa-github"
          :url="repository"
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
  color: white
  margin: 30px 0
  position: relative
  padding: 10px

  &::after,
  &::before
    content: ''
    display: block
    position: absolute
    width: 100px
    height: 50px
    border: 2px solid
    transition: all 0.6s ease
    border-radius: 2px

  &::after
    bottom: -5px
    left: -5px
    border-top-color: transparent
    border-left-color: $secondary
    border-bottom-color: $secondary
    border-right-color: transparent

  &::before
    top: -5px
    right: -5px
    border-bottom-color: transparent
    border-right-color: $secondary
    border-top-color: $secondary
    border-left-color: transparent

  .project_card_name
    position: relative

    span
      position: relative
      // margin-bottom: 10px
      display: block

      // &::after
      //   content: ''
      //   display: block
      //   width: 80%
      //   height: 1px
      //   background-color: white
      //   position: absolute
      //   bottom: -6px
      //   left: 0

    .project_card_icons_container
      position: relative
      margin-top: 10px

    .project_card_link,
    .project_card_repository
      color: $secondary

    .project_card_icons_container > :nth-child(even)
      margin-left: 10px

  .project_card_description
    margin: 10px 0

  .project_card_tags .tag
    background-color: $secondary
    color: $primary
</style>
