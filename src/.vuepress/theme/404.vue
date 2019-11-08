<template>
  <div class="not-found-page">
    <div class="container">
      <h1 class="text-5xl font-bold">This page not found :(</h1>
      <div class="mt-4">
        <CLink
          to="/"
          label="Back to home"
          title="Back to home "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'NotFoundLayout'
}
</script>

<style scoped>
.not-found-page {
  @apply p-6;
}
</style>
