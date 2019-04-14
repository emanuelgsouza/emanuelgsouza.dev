<template>
  <div class="site_container">
    <main class="main_site_container">
      <header class="header">
        <!-- LOGO -->
        <PersonalLogo />
        <!-- TITLES -->
        <hgroup>
          <h1 class="header__title has-text-centered title has-text-light">
            Emanuel Gonçalves
          </h1>
          <h2 class="header__subtitle has-text-centered subtitle has-text-light">
            Desenvolvedor de Software
          </h2>
        </hgroup>
        <!-- SOCIAL ICONS -->
        <HomeSocialIcons />
      </header>
    </main>
  </div>
</template>

<script>
import PersonalLogo from '../components/Logo'
import HomeSocialIcons from '../modules/Home/components/SocialIcons'

export default {
  name: 'IndexPage',
  components: {
    PersonalLogo,
    HomeSocialIcons
  }
}
</script>

<style lang="sass">
@import "~assets/sass/app.sass"

.site_container
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

    hgroup
      margin: 20px 0

    .header__title,
    .header__subtitle
      text-align: center
      color: $green

    .header__title
      font-size: $size-3

    .header__subtitle
      font-size: $size-2

  @media screen and (max-width: 768px)
    .main_site_container
      width: 100%
</style>
