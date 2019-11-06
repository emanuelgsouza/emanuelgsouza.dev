<template>
  <nav class="navbar">
    <div class="container flex justify-between">
      <div class="left">
        <router-link class="left-link" to="/" title="Back to home">
          <CLogo class="logo" />
          <span class="navbar-title"> @emanuelgsouza </span>
        </router-link>
      </div>

      <div class="right">
        <CLink
          inverted
          to="/blog"
          label="Blog"
          title="Show all blog posts"
        />

        <CLink
          inverted
          to="/projects"
          label="Projects"
          title="Show all projects"
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

.left,
.left-link,
.right {
  display: flex;
  align-items: center;
}

.left .logo {
  max-width: 50px;
  @apply hidden mr-2;
}

.right a:last-of-type {
  @apply ml-2;
}

.navbar-title {
  @apply text-lg font-bold;
}

@screen md {
  .left .logo {
    @apply block;
  }
}
</style>
