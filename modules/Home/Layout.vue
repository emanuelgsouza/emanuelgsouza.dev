<template>
  <div class="site_container">
    <div class="main_site_container">
      <GithubConner />

      <HomeHeader />

      <HomeAbout />

      <HomeProjects />

      <HomeContacts />

      <ChangeLanguage />
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeAbout from './components/About'
import HomeProjects from './components/Projects'
import HomeContacts from './components/Contacts'
import GithubConner from './components/GithubConner'
import ChangeLanguage from './components/ChangeLanguage'

export default {
  name: 'HomeLayout',
  components: {
    HomeHeader,
    HomeAbout,
    HomeProjects,
    HomeContacts,
    GithubConner,
    ChangeLanguage
  }
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.site_container
  min-width: 100%
  min-height: 100vh
  position: relative
  padding: 1em 2em
  background-color: $great

  .main_site_container
    max-width: 1200px
    margin: 0 auto
    padding: 2em
    border-radius: 2px
    background-color: $great

@media screen and (max-width: 768px)
  .site_container
    padding: 0.5em

    .main_site_container
      width: 100%
      padding: 1em
</style>
