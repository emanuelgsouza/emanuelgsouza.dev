<template>
  <div>
    <AppHeader />
    <div class="container is-max-desktop">
      <Nuxt />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
