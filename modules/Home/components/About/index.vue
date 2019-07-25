<template>
  <main id="main" class="home_main_container">
    <HomeSection
      :title="$t('about.title')"
      :paragraph="$t('about.description')"
    />
  </main>
</template>

<script>
import HomeSection from './Section'

export default {
  name: 'HomeHeader',
  components: {
    HomeSection
  },
  data: () => ({})
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.home_main_container
  margin: 20px 0
</style>
