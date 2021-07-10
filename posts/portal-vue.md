---
title: Portal - uma nova feature no Vue 3
description: Tradução livre do artigo do time do Vueschool sobre a feature de Portal no Vue 3 - implementada atualmente sobre o nome de Teleport.
banner: portal-vue-image.png
date: 2020-01-24
tags:
  - vue
  - javascript
  - posts
layout: layouts/post.liquid
---

Fala galera, esta é mais uma tradução livre de um artigo do pessoal do [Vueschool](https://vueschool.io/articles/), dessa vez sobre uma outra feature do Vue 3, que são os Portals ou Portais. Não deixe de conferir!

[Link do post original](https://vueschool.io/articles/vuejs-tutorials/portal-a-new-feature-in-vue-3/) escrito pelo [Filip Rakowski](https://twitter.com/filrakowski).

----

Recentemente eu escrevi um artigo sobre [as novas features disponíveis no Vue 3](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/) ([texto também traduzido](https://dev.to/codecasts/conheca-as-novas-funcionalidades-do-vue-3-o2g)) onde eu brevemente introduzi quais *features* podemos esperar na próxima *major release* do Vue.js.

No artigo de hoje, eu quero falar um pouco mais sobre uma das mais úteis - Portais.

Este artigo é baseado no repositório vue-next. Não há garantia de que os recursos mencionados neste artigo cheguem ao Vue 3 exatamente da forma descrita (mas é provável que aconteça).

## O que é um portal?

Portal é um conceito bem conhecido do React que também foi adotado no Vue 2 através de plugins de terceiros como o [portal-vue](https://github.com/LinusBorg/portal-vue). Como o nome sugere, ele é responsável por "teletransportar" algo de um lugar para outro... E é exatamente o que ele faz!

Com um portal, você pode renderizar um componente em um local diferente na árvore DOM, mesmo que este local não esteja no escopo do seu app. Portais são muito convenientes quando trabalhamos com *modals*, *notifications*, *popups* e outros elementos que são sensíveis ao local em que eles estão na árvore DOM.

Deixe-me te mostrar:

```html
<!-- UserCard.vue -->
<template>
  <div class="user-card">
    <b> {{ user.name }} </b>  
    <button @click="isPopUpOpen = true">Remove user</button>
    <div v-show="isPopUpOpen">
      <p>Are you sure?</p>
      <button @click="removeUser">Yes</button>
      <button @click="isPopUpOpen = false">No</button>
    </div>
  </div>
</template>
```

No código acima nos temos um componente `UserCard` que nos permite remover um determinado usuário de um banco de dados. Depois de clicar no botão, nós iremos ver um *popup* de confirmação no qual podemos confirmar a ação e remover o usuário usando o método `removeUser`.

Manter componentes relacionados (o *popup* de confirmação por exemplo) no mesmo local é uma boa prática em termos de manutenção de código. Mas, quando se trata de elementos de UI que podem aparecer acima de outros, podemos ter alguns problemas.

O primeiro problema que podemos encontrar é o fato de que a classe `user-card`, assim como qualquer outra classe mais alta na hierarquia do DOM, pode afetar a aparência do nosso *popup*. Por exemplo, se qualquer container definir `visibility: 0.5`, a visibilidade de nosso *popup* também será afetada.

Garantir que nosso *popup* irá aparecer no topo de outros elementos é um outro desafio. Você pode pensar no elementos DOM como camadas. Nós colocamos estas camadas acima de outras para construir um layout. Normalmente, quando nós queremos cobrir uma dessas camadas com outras, nós fazemos isso intencionalmente colocando outros elementos **dentro** dessa camadas ou **depois** dela.

Uma das formas de resolver este problema é usando a propriedade `z-index` do CSS para mudar a ordem natural de aparência de um elemento. Contudo, este método não é muito elegante e normalmente nos traz outros desafios para enfrentar, como quando temos outros elementos posicionados com `z-index`.

É por isso que geralmente colocamos elementos de UI que devem aparecer em cima dos outros antes da tag de fechamento `</body>`. Dessa forma, não precisamos fazer hacks para garantir que nosso *popup* seja exibido exatamente onde e como queremos. Também garante que outros elementos não o cubram.

Portanto, parece que temos duas boas práticas que entram em conflito:

* O primeiro diz para mantermos os componentes relacionados juntos, o que implica manter o componente *popup* dentro do componente `UserCard`.
* O segundo nos diz para colocar o componente *popup* imediatamente antes do fechamento da tag `body`.

Para atender a ambos os requisitos, precisamos garantir que, mesmo que o código do nosso *popup* esteja localizado no componente `UserCard`, ele seja renderizado em outro lugar - idealmente antes do fechamento da tag `body`.

**Felizmente, é exatamente para isso que os portais foram criados!**

## Portais no Vue 3

Entre muitos outros recursos, o Vue 3 virá com suporte nativo para portais na através do componente `Portal`.

A boa notícia é que o componente `Portal` é muito simples! Ele possui apenas uma propriedade, `target`, e um slot padrão. O conteúdo do slot será renderizado no elemento DOM, selecionado pelo seletor de consulta passado na propriedade `target` do componente `Portal`.

```html
<!-- In some nested Vue component -->
<NestedComponent>
  <Portal target="#popup-target">
    <PopUp />
  </Portal>
</NestedComponent>
<!-- before closing body tag -->
<div id="popup-target"></div>
```

No exemplo acima, o componente `PopUp` irá ser renderizado numa div com um id `popup-target`, mesmo que esteja posicionado dentro de um componente `NestedComponent`.

Sabendo disso, podemos reescrever nosso componente `UserCard` neste formato:

```html
<!-- UserCard.vue -->
<template>
  <div class="user-card">
    <b> {{ user.name }} </b>  
    <button @click="isPopUpOpen = true">Remove user</button>
    <Portal target="#popup-target">
      <div v-show="isPopUpOpen">
        <p>Are you sure?</p>
        <button @click="removeUser">Yes</button>
        <button @click="isPopUpOpen = false">No</button>
      </div>
    </Portal>
  </div>
</template>
```

Simples e fácil, não é? Agora, podemos manter nosso código estruturado corretamente, sem ser forçados a executar soluções desagradáveis ​​para mantê-lo funcionando!

Se você ainda está curioso e deseja ver outros exemplos, [aqui](https://github.com/vuejs/vue-next/blob/46490ac1a5a7a20411affcd93877174c6dc007a7/packages/vue/examples/transition/modal.html) você pode encontrar um pequeno site com uma modal, usando os portais do Vue 3. Você também pode procurar por [cenários de teste](https://github.com/vuejs/vue-next/blob/957d3a0547e43ecf81169f5dd9663cf754ea7167/packages/runtime-core/__tests__/rendererPortal.spec.ts) no repositório `vue-next`.

## Resumo

Portal é uma das adições mais interessantes ​​do Vue 3. Simplifica o trabalho com elementos como modais e *popups* e torna extremamente fácil renderizá-los sobre outros elementos do DOM sem soluções feias.

---

Bom, mais uma tradução finalizada. Espero que tenha gostado. Não deixe de compartilhar este post para que mais pessoas sejam alcançadas por este conhecimento. Definitivamente, portais serão muito úteis em nosso dia-a-dia desenvolvendo com Vue.js.

Até a próxima!