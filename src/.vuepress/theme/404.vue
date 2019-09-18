<template>
  <div class="not-found-page">
    <div class="container">
      <h1 class="text-5xl font-bold">Essa página não existe :(</h1>
      <p class="text-xl"> Isso pode ter acontecido por ter encontrado uma página que não existe. Mas não deixe de conferir meu site pessoal, clicando no botão abaixo. </p>
      <div class="mt-4">
        <CLink
          to="/"
          label="Voltar para a Home"
          title="Ir para a página inicial do site de Emanuel Gonçalves"
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
