<template>
  <div class="home_contacts_section">
    <!-- TITLE -->
    <AppTitle :title="$t('contacts.title')" />

    <SocialIcons :icons="icons" />
  </div>
</template>

<script>
import { CONTACT_ICONS } from '../../constants'
import AppTitle from '~/components/Title'
import SocialIcons from '~/components/SocialIcons'

export default {
  name: 'HomeContacts',
  components: {
    AppTitle,
    SocialIcons
  },
  data: () => ({
    icons: Object.values(CONTACT_ICONS)
  })
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.contacts_icon_container
  // +flexCenter()
  color: $secondary

  .app_icon
    +flexCenter()
    position: relative
</style>
