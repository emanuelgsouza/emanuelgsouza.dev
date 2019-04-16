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
        title="Visite o site do Vuejs, o Framework Progressivo"> Vuejs </a> e <a class="home_section_text_link" href="https://paulovasconcellos.com.br/o-que-%C3%A9-intelig%C3%AAncia-artificial-e-porqu%C3%AA-voc%C3%AA-deve-matar-esse-hype-63d1ac28cd0e">Inteligência Artificial</a>. Como diz o título, me tornei aspirante a Engenheiro de Machine Lerning, então tenho buscado dedicar mais tempo aos estudos na área de Inteligência Artificial, com foco mais em Aprendizado de Máquina. Trabalho como Analista Web na <a class="home_section_text_link" href="https://decision6.com/" title="Ir para o site da empresa em que trabalho, Decision6"> Decision6 - Store Flow</a>. Procuro desenvolver em meus projetos a solução de problemas, pois acredito que as tecnologias estão para resolver problemas que nós humanos, talvez demorariamos muito para resolver, ou não resolveríamos. Gosto de participar da comunidade open source, sempre procurando estar contribuindo com ela. Meu lema é um ditado africano que diz "Go fast, go alone; go far, go together".`
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
