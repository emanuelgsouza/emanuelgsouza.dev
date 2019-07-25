<template>
  <div class="home_contacts_section">
    <!-- TITLE -->
    <AppTitle :title="$t('contacts.title')" />

    <!-- PROJECTS -->
    <div class="columns is-mobile">
      <div
        v-for="(contact, key) in contacts"
        :key="key"
        class="column col-2 contacts_icon_container"
      >
        <AppIcon
          v-bind="contact"
          size="2rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { CONTACT_ICONS } from '../../constants'
import AppTitle from '~/components/Title'
import AppIcon from '~/components/Icon'

export default {
  name: 'HomeContacts',
  components: {
    AppTitle,
    AppIcon
  },
  data: () => ({
    contacts: Object.values(CONTACT_ICONS)
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
