<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <router-link
          class="navbar-item"
          to="/"
          title="Navegar para a Home Page do site"
        >
          @emanuelgsouza
        </router-link>

        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          :aria-expanded="isMenuOpen"
          @click="handleOpenMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuOpen }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/posts"> Blog </router-link>

          <router-link class="navbar-item" to="/projects">
            Projetos
          </router-link>
        </div>

        <ul class="navbar-end">
          <li class="navbar-item">
            <div class="buttons">
              <a
                class="button is-primary is-outlined"
                href="https://github.com/emanuelgsouza"
                title="View my projects on Github"
                target="_blank"
                rel="noreferrer"
              >
                <span class="icon">
                  <span class="icon-github"></span>
                </span>
              </a>

              <a
                class="button is-primary is-outlined"
                href="https://linkedin.com/in/emanuelgsouza"
                title="My personal profile on Linkedin"
                target="_blank"
                rel="noreferrer"
              >
                <span class="icon">
                  <span class="icon-linkedin-in"></span>
                </span>
              </a>

              <a
                class="button is-primary is-outlined"
                href="https://www.twitter.com/emanuelgsouza"
                title="Follow me on Twitter"
                target="_blank"
                rel="noreferrer"
              >
                <span class="icon">
                  <span class="icon-twitter"></span>
                </span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',

  data: () => ({
    isMenuOpen: false,
  }),

  methods: {
    handleOpenMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
  },
}
</script>
