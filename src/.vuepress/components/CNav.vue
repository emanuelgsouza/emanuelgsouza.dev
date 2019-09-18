<template>
  <nav class="navbar">
    <div class="container">
      <router-link to="/" class="left">
        <CLogo class="logo" />
        <p class="navbar-title"> {{ title }} </p>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  computed: {
    title () {
      return this.$site.title
    }
  }
}
</script>

<style>
.navbar {
  z-index: 2;
  @apply fixed w-full py-2 px-4 bg-primary text-secondary shadow;
}

.left {
  display: flex;
  align-items: center;
}

.left .logo {
  max-width: 50px;
  @apply mr-4;
}

.navbar-title {
  @apply text-lg font-bold;
}
</style>
