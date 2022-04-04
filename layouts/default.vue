<template>
  <div>
    <AppHeader />
    <main class="container is-max-desktop">
      <Nuxt />
    </main>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '~/components/global/AppHeader.vue'
import AppFooter from '~/components/global/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
  },
}
</script>
