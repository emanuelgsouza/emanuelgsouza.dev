<template>
  <main class="home_main_container">
    <HomeSection
      v-for="(section, key) in sections"
      :key="key"
      :title="section.title"
      :paragraphs="section.paragraphs"
    />
  </main>
</template>

<script>
import HomeSection from './Section'

export default {
  name: 'HomeHeader',
  components: {
    HomeSection
  },
  data: () => ({
    sections: [
      {
        title: 'Sobre',
        paragraphs: [
          `Sou Emanuel Gonçalves, casado e cristão, web developer, entusiasta de <a class="home_section_text_link" href="https://vuejs.org/"
        title="Visite o site do Vuejs, o Framework Progressivo"> Vuejs </a> e <a class="home_section_text_link" href="https://nodejs.org/en/" title="
        Conheça uma das plataformas mais usadas no momento "> Nodejs</a>. Amo as tecnologias web e invisto a maior parte do meu tempo, me dedicando a estudá - las.Traballho como Analista Web na <a class="home_section_text_link" href="https://decision6.com/" title="Ir para o site da empresa em que trabalho, Decision6"> Decision6 - Store Flow</a>. Procuro desenvolver em meus projetos a solução de problemas, pois acredito que as tecnologias estão para resolverem problemas que nós humanos, talvez demorariam muito para resolver, ou não resolveriam.Gosto de participar da comunidade open source, sempre procurando estar contribuindo com ela.Meu lema é um ditado africano que diz "Go fast, go alone; go far, go together".`
        ]
      }
    ]
  })
}
</script>

<style lang="sass">
@import "~assets/sass/utilities/_all.sass"

.home_main_container
  margin: 20px 0
</style>
