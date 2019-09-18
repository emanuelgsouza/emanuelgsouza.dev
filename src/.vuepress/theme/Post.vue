<template>
  <div class="theme-container">
    <CNav />
    <div class="container">
      <Content class="content" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostLayout'
}
</script>

<style scoped>
.content {
  position: relative;
  top: 50px;
  @apply py-8 px-6;
}

.content >>> h1 {
  @apply text-xl font-bold;
}

.content >>> .header-anchor {
  display: none;
}

.content >>> p {
  @apply my-4 text-lg;
}
</style>
