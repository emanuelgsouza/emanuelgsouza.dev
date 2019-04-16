<template>
  <div class="site_container">
    <div class="main_site_container">
      <GithubConner />

      <HomeHeader />

      <HomeAbout />

      <HomeProjects />

      <HomeContacts />
    </div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeAbout from './components/About'
import HomeProjects from './components/Projects'
import HomeContacts from './components/Contacts'
import GithubConner from './components/GithubConner'

export default {
  name: 'HomeLayout',
  components: {
    HomeHeader,
    HomeAbout,
    HomeProjects,
    HomeContacts,
    GithubConner
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
  background-color: $gray

  .main_site_container
    position: relative
    width: 60%
    margin: 0 auto
    padding: 2em
    border-radius: 2px
    box-shadow: 0 42px 48px -20px rgba(0,0,0,0.75)
    background-color: $great

@media screen and (max-width: 768px)
  .site_container
    padding: 0.5em

    .main_site_container
      width: 100%
      padding: 1em
</style>
