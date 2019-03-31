<template>
  <div class="site_container">
    <main class="main_site_container">
      <header class="header">
        <!-- LOGO -->
        <PersonalLogo />
        <!-- TITLES -->
        <hgroup>
          <h1 class="header__title has-text-centered title has-text-light"> Emanuel Gonçalves </h1>
          <h2 class="header__subtitle has-text-centered has-text-light"> Desenvolvedor na Decision6 </h2>
        </hgroup>
      </header>
    </main>
  </div>
</template>

<script>
import PersonalLogo from '../components/Logo'

export default {
  name: 'IndexPage',
  components: {
    PersonalLogo
  }
}
</script>

<style lang="sass">
@import "~assets/sass/app.sass"

.site_container
  +flexCenter()
  min-width: 100%
  min-height: 100vh
  position: relative
  padding: 1em 2em
  background-color: $gray

  .main_site_container
    width: 60%
    margin: 0 auto
    padding: 2em
    border-radius: 2px
    box-shadow: 0 42px 48px -20px rgba(0,0,0,0.75)
    background-color: $great

  @media screen and (max-width: 768px)
    .main_site_container
      width: 100%
</style>
