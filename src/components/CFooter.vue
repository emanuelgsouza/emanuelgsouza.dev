<template>
  <footer class="text-center pb-4">
    <hr class="divisor" />
    <p>
      Made with
      <a class="link" href="https://gridsome.org" title="Go to Gridsome website" target="blank">Gridsome</a> and much
      <span class="text-tertiary">
        <FontAwesomeIcon icon="mug-hot" />
      </span> e
      <span class="text-tertiary">
        <FontAwesomeIcon icon="heart" />
      </span>
    </p>
    <p>
      Code at
      <a
        href="https://github.com/emanuelgsouza/emanuelgsouza.dev"
        target="blank"
        title="View the website code at Github">
        <span class="text-tertiary">
          <FontAwesomeIcon :icon="['fab', 'github']" />
        </span>
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'CFooter'
}
</script>

<style scoped>
.divisor {
  @apply w-full bg-primary mx-auto my-4;
}
</style>
