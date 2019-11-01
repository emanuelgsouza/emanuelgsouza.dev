<template>
  <header class="header">
    <!-- LOGO -->
    <PersonalLogo />
    <!-- TITLES -->
    <hgroup>
      <h1 class="header__title has-text-centered title has-text-light">
        Emanuel Gonçalves - {{ $t('header.subtitle') }}
      </h1>
      <!-- <h2 class="header__subtitle has-text-centered subtitle has-text-light">
        {{ $t('header.subtitle') }}
      </h2> -->
    </hgroup>
    <!-- SOCIAL ICONS -->
    <SocialIcons :icons="icons" />
  </header>
</template>

<script>
import { CONTACT_ICONS } from '../../constants'
import SocialIcons from '~/components/SocialIcons'
import PersonalLogo from '~/components/Logo'

export default {
  name: 'HomeHeader',
  components: {
    PersonalLogo,
    SocialIcons
  },
  data: () => ({
    icons: [
      CONTACT_ICONS.GITHUB,
      CONTACT_ICONS.LINKEDIN,
      CONTACT_ICONS.MEDIUM,
      CONTACT_ICONS.CODEPEN
    ]
  })
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
