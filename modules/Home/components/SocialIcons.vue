<template>
  <div class="social_icons columns">
    <div
      v-for="(icon, key) in icons"
      :key="key"
      class="column">

      <a
        class="app_icon"
        :href="icon.url"
        :style="{ fontSize: '3rem' }"
        target="_blanck">
        <i :class="icon.name" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSocialIcons',
  data: () => ({
    icons: [
      { name: 'fab fa-github', url: 'https://github.com/emanuelgsouza' },
      { name: 'fab fa-linkedin-in', url: 'https://linkedin.com/in/emanuelgsouza' },
      { name: 'fab fa-kaggle', url: 'https://kaggle.com/emanuelgsouza' }
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
      color: $green
      .fab
        transition: all .2s ease

      &:hover .fab
        transform: rotate(10deg)
</style>
