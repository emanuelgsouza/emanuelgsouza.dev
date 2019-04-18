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
          :name="contact.icon"
          :url="contact.url"
          size="2rem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppTitle from '~/components/Title'
import AppIcon from '~/components/Icon'

export default {
  name: 'HomeContacts',
  components: {
    AppTitle,
    AppIcon
  },
  data: () => ({
    contacts: [
      {
        icon: 'fab fa-linkedin-in',
        url: 'https://www.linkedin.com/in/emanuelgsouza/'
      },
      {
        icon: 'fab fa-medium',
        url: 'https://www.medium.com/@emanuelgsouza'
      },
      {
        icon: 'fab fa-github-alt',
        url: 'https://www.github.com/emanuelgsouza'
      },
      {
        icon: 'fab fa-telegram',
        url: 'https://telegram.me/emanuelgsouza'
      },
      {
        icon: 'fab fa-twitter',
        url: 'https://www.twitter.com/emanuelgsouza'
      },
      {
        icon: 'fas fa-envelope',
        url: 'mailto:emanuelgdesouza@gmail.com'
      }
    ]
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
