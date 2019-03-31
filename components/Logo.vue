<script>
export default {
  name: 'PersonalLogo'
}
</script>

<template>
  <div class="personal_logo" aria-hidden="true">
    <figure>
      <img src="~static/icon.png" alt="" aria-hidden="true">
    </figure>
  </div>
</template>

<style lang="sass" scoped>
.personal_logo
  position: relative
  display: block
  margin: 0 auto
  max-width: 200px
  height: 200px
  border-radius: 100%
  overflow: hidden
</style>
