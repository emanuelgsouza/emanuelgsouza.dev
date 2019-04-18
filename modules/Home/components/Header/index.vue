<template>
  <header class="header">
    <!-- LOGO -->
    <PersonalLogo />
    <!-- TITLES -->
    <hgroup>
      <h1 class="header__title has-text-centered title has-text-light">
        Emanuel Gonçalves
      </h1>
      <h2 class="header__subtitle has-text-centered subtitle has-text-light">
        {{ $t('header.subtitle') }}
      </h2>
    </hgroup>
    <!-- SOCIAL ICONS -->
    <HomeSocialIcons />
  </header>
</template>

<script>
import PersonalLogo from '~/components/Logo'
import HomeSocialIcons from './SocialIcons'

export default {
  name: 'HomeHeader',
  components: {
    PersonalLogo,
    HomeSocialIcons
  }
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.header
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
</style>
