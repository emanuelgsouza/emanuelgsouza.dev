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
import { CONTACT_ICONS } from '../../constants'

export default {
  name: 'HomeSocialIcons',
  data: () => ({
    icons: [
      CONTACT_ICONS.GITHUB,
      CONTACT_ICONS.LINKEDIN,
      CONTACT_ICONS.MEDIUM
    ]
  })
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.social_icons
  +flexCenter()

  .column
    +flexCenter()

    .app_icon
      color: $secondary
      .fab
        transition: all .2s ease

      &:hover .fab
        transform: rotate(10deg)
</style>
