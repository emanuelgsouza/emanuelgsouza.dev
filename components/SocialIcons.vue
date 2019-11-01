<template>
  <div class="social_icons columns">
    <div
      v-for="(icon, key) in icons"
      :key="key"
      class="column"
    >
      <a
        class="app_icon"
        :href="icon.url"
        :style="{ fontSize: '3rem' }"
        :title="$t(icon.title)"
        target="_blanck"
      >
        <i :class="icon.name" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialIcons',
  props: {
    icons: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.social_icons
  +flexCenter()
  max-width: 300px
  margin: 0 auto

  .column
    +flexCenter()

    .app_icon
      width: 70px
      height: 70px
      +flexCenter()
      padding: 5px
      color: $secondary
      border-radius: 100%
      overflow: hidden
      transition: all .3s ease

      &:hover
        color: $primary
        background-color: $secondary
</style>
