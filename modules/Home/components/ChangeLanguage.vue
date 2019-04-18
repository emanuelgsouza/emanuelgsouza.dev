<script>
const iconsLanguages = {
  'en': 'us',
  'pt': 'br'
}

export default {
  name: 'ChangeLanguage',
  computed: {
    showLocales() {
      return this.$i18n.locales.filter(locale => locale.code !== this.$i18n.locale)
    },
    isHomeRoute() {
      return this.$route.path === '/'
    }
  },
  methods: {
    changeLanguage() {},
    getIconClass(locale) {
      return `flag-icon flag-icon-${iconsLanguages[locale]}`
    }
  }
}
</script>

<template>
  <div class="change-language">
    <nuxt-link
      v-for="(locale, i) in showLocales"
      :key="i"
      :class="getIconClass(locale.code)"
      :to="switchLocalePath(locale.code)"
    />
  </div>
</template>

<style lang="sass" scoped>
@import "~assets/sass/utilities/_all.sass"

.change-language
  position: absolute
  top: 0px
  left: 5px
  z-index: 2
  font-size: $size-3

  .nuxt-link-active, a
    text-decoration: none
</style>
