<template>
  <nav class="navbar">
    <div class="container flex justify-between">
      <div class="left">
        <router-link class="left-link" to="/">
          <CLogo class="logo" />
          <p class="navbar-title"> Emanuel </p>
        </router-link>
      </div>

      <div class="right">
        <CLink
          inverted
          to="/blog"
          label="Blog"
          title="Confira os todos os meus textos"
        />

        <CLink
          inverted
          to="/projects"
          label="Projetos"
          title="Confira os projetos pessoal de Emanuel Gonçalves"
        />
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style>
.navbar {
  z-index: 2;
  @apply fixed w-full py-2 px-4 bg-primary text-secondary shadow;
}

.left-link,
.right {
  display: flex;
  align-items: center;
}

.left .logo {
  max-width: 50px;
  @apply mr-2;
}

.right a:last-of-type {
  @apply ml-2;
}

.navbar-title {
  @apply text-lg font-bold;
}
</style>
