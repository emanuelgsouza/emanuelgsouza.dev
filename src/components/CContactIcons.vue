<template>
  <div class="contact-icons">
    <div
      v-for="(icon, key) in icons"
      :key="key"
      class="app_icon"
    >
      <a
        :href="icon.url"
        :style="{ fontSize: '2rem' }"
        target="_blanck"
        :title="icon.title"
      >
        <FontAwesomeIcon :icon="icon.icon" />
      </a>
    </div>
  </div>
</template>

<script>
import { CONTACT_ICONS } from '../utils/contants'

export default {
  name: 'ContactIcons',
  data: () => ({
    icons: [
      CONTACT_ICONS.GITHUB,
      CONTACT_ICONS.LINKEDIN,
      CONTACT_ICONS.TELEGRAM,
      CONTACT_ICONS.TWITTER,
      CONTACT_ICONS.MEDIUM
    ]
  })
}
</script>

<style scoped>
.app_icon {
  width: 50px;
  height: 50px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s;
}

.app_icon:hover,
.app_icon:focus {
  @apply text-tertiary;
}

.app_icon:not(:first-of-type) {
  @apply mx-2;
}

.app_icon:first-of-type {
  @apply mr-2;
}

svg {
  display: inline-block;
  width: 32px;
  height: 32px;
}
</style>
