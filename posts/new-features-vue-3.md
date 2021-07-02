---
title: Conheça as novas funcionalidades do Vue 3
description: Tradução livre do artigo do Vueschool escrito pelo Filip Rakowski sobre quais as novas funcionalidades que podemos esperar na nova versão do framework Vue.
banner: new-features-image.jpeg
date: 2020-01-20
tags:
  - vue
  - javascript
  - posts
layout: layouts/post.liquid
---

Este texto é uma livre tradução do artigo do time do Vueschool sobre as novas funcionalidades que irão vir no Vue 3. Então, desde já agradecemos ao excelente artigo escrito por [Filip Rakowski](https://twitter.com/filrakowski) que você pode [conferir aqui](https://vueschool.io/articles/vuejs-tutorials/exciting-new-features-in-vue-3/). Vamos ao texto?

----

No antigo anterior, [nós aprendemos sobre as melhorias de performance que Vue 3 irá trazer](https://vueschool.io/articles/vuejs-tutorials/faster-web-applications-with-vue-3/). Nós já sabemos que apps escritos na nova versão do Vue irão performar melhor mas esta não é a melhor parte. O que mais importa para nós desenvolvedores é como esta nova *release* irá afetar a forma como nós desenvolvemos.

Como você poderia esperar, Vue 3 traz uma série de novas e emocionantes características. Felizmente, a equipe do Vue introduziu, em vez de grandes mudanças, adições e melhorias nas APIs atuais, para que as pessoas que já conhecem o Vue 2 se sintam à vontade rapidamente com as novas sintaxes.

Vamos começar com a API, você provavelmente já ouviu falar a respeito...

## Composition API

Composition API é a *syntax feature* mais discutida desta nova versão do Vue. É uma abordagem completamente nova para reuso de lógica e organização de código.

Normalmente nós construímos nossos componentes com o que nós chamamos de *Options API*. Para adicionar lógica aos componentes Vue nós preenchemos propriedades tais como `data`, `methods`, `computed` etc. A maior desvantagem dessa abordagem é o fato de que esse não é como um código JavaScript em si. Você necessita saber exatamente quais propriedades estão acessíveis no templates assim como o comportamento do `this`. Por baixo do capô, o compilador Vue precisa transformar estas propriedades em um código funcional. Por causa disso, nós não temos os benefícios de coisas como auto sugestões (autocomplete de editores) ou checagem de tipo (*type checking*).

A Composition API visa solucionar este problema, expondo os mecanismos atualmente disponíveis nas propriedades do componente como funções JavaScript. O *Core Team* do Vue descreve a Composition API como "um conjunto de APIs baseadas em funções que permitem composições flexíveis de lógica de componentes". Código escrito usando a Composition API é mais legível e não há mágica por trás, o que faz com seja mais fácil de ler e aprender.

Vamos ver um exemplo simples de um componente que usa a nova Composition API para entender como ela funciona:

```html
<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}, click to increment.
  </button>
</template>

<script>
import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const double = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    onMounted(() => console.log('component mounted!'))

    return {
      count,
      double,
      increment
    }
  }
}
</script>
```

Agora, vamos quebrar este código em algumas partes para entender o que está acontecendo:

```js
import { ref, computed, onMounted } from 'vue'
```

Como mencionado antes, a Composition API expõe propriedades de componentes como funções, então a primeira etapa é importar as funções de que nós precisamos. Em nosso caso, precisamos criar uma referencia reativa com a função `ref`, uma propriedade computada com `computed` e acessar o *hook* de ciclo de vida com `onMounted`.

Agora, você provavelmente está se perguntando: o que é este misterioso método `setup`?

```js
export default {
  setup() {
  }
}
```

Em poucas palavras é apenas uma função que retorna propriedades e funções para o template. É só isso. Nós declaramos todas as propriedades reativas, propriedades computadas, *watchers*, *hooks* de ciclo de vida aqui e então retornamos eles para que possam ser usadas no template.

O que não retornamos na função setup não estará disponível no template.

```js
const count = ref(0)
```

No código acima nós declaramos uma propriedade reativa chamada `count` usando a função `ref`. Ela pode encapsular qualquer valor primitivo ou objeto e retorná-lo como uma propriedade. O valor passado será mantido na propriedade `value` da referência criada. Por exemplo, se você quiser acessar o valor de `count`, você precisa explicitamente chamar por `count.value`.

```js
const double = computed(() => count.value * 2)

function increment() {
  count.value++
}

```

... e isso é exatamente o que nós fazemos quando declaramos a propriedade computada `double` e a função `increment`.

```js
onMounted(() => console.log('component mounted!'))
```

Com o *hook* `onMounted` nós estamos exibindo alguma mensagem quando o componente é montado só para mostrar para você que você pode 😉.

```js
return {
  count,
  double,
  increment
}
```

No final estamos retornando as propriedades `count` e `double` com o método `increment` para que eles estejam disponíveis no template.

```html
<template>
  <button @click="increment">
    Count is: {{ count }}, double is {{ double }}. Click to increment.
  </button>
</template>
```

E voila! Agora nós podemos acessar as propriedades e funções retornadas pelo método `setup` no template da mesma forma que eles estavam declarados quando da antiga *Options API*.

Este é um simples exemplo, que poderia ser facilmente realizado com a *Options API*. O verdadeiro benefício da nova Composition API não é apenas desenvolver de uma forma diferente, os benefícios se revelam quando se trata de reutilizar nosso código/lógica.

### Reuso de código com a Composition API

Há mais vantagens na nova Composition API. Vamos falar sobre reuso de código. Normalmente, se nós queremos compartilhar algum código entre componentes há duas opções disponíveis - *mixins* e *scoped slots*. Ambos tem suas desvantagens.

Vamos dizer que nós queremos extrair uma funcionalidade chamada `counter` e reaproveitá-la em outro componente. Abaixo, você pode ver como poderíamos fazer isso usando as APIs disponíveis e a nova Composition API:

Vamos começar com *mixins*:

```js
import CounterMixin from './mixins/counter'

export default {
  mixins: [CounterMixin]
}
```

A principal desvantagem dos mixins é o fato de nós não sabermos nada sobre o que eles estão adicionando ao nosso componente. Isso torna não apenas difícil de entender o código, mas também pode levar a colisões de nomes com propriedades e funções existentes.

Agora os *scoped slots*.

```html
<template>
  <Counter v-slot="{ count, increment }">
     {{ count }}
    <button @click="increment">Increment</button> 
  </Counter> 
</template>
```

Com *scoped slots* nós sabemos exatamente quais propriedades nós podemos acessar através da propriedade `v-slot` então fica muito mais fácil entender o código. A desvantagem dessa abordagem é que podemos acessá-la apenas em um `template` e estar disponível apenas no escopo do componente `Counter`.

Agora, vamos ver como fica com a Composition API:

```js
function useCounter() {
  const count = ref(0)
  function increment () { count.value++ }

  return {
    count,
    incrememt
  }
}

export default {
  setup () {
    const { count, increment } = useCounter()
    return {
      count,
      increment
    }
  }
}
```

Muito mais elegante não é? Nós não estamos limitados nem pelo `template` nem pelo escopo dos nossos componentes e sabemos exatamente quais propriedades de `counter` nós podemos acessar. Adicionado a isso, temos o benefício de termos auto complete do nosso código disponível em nosso editor pois `useCounter` é apenas uma função que retorna algumas propriedades. Não há mágica por trás, então o editor pode nos ajudar com checagem de tipo e sugestões.

Também é uma forma mais elegante de usarmos biblioteca de terceiros. Por exemplo, se nós queremos usar o [Vuex](https://vuex.vuejs.org/) nós explicitamente usamos a função `useStore` ao invés de poluir o protótipo do objeto Vue (`this.$store`). Essa abordagem também apaga a mágica dos que acontece nos bastidores dos plug-ins Vue.

```js
const { commit, dispatch } = useStore()
```

Se você quiser aprender um pouco mais sobre Composition API e seus casos de uso, eu recomendo fortemente ler [este documento](https://vue-composition-api-rfc.netlify.com/) escrito pelo time do Vue que explica o raciocínio por trás da nova API e sugere os melhores casos de uso dela. Há também este [excelente repositório](https://github.com/LinusBorg/composition-api-demos) com exemplos de uso da Composition API mantido por [Thorsten Lünborg](https://twitter.com/linus_borg), um membro do *core team* do Vue.

## Mudanças na API de montagem/configuração global

Nós encontramos outra mudança grande na forma que nós instanciamos e configuramos nossa aplicação. Vamos ver como isso irá ficar:

```js
import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [/^app-/]
Vue.use(/* ... */)
Vue.mixin(/* ... */)
Vue.component(/* ... */)
Vue.directive(/* ... */)

new Vue({
  render: h => h(App)
}).$mount('#app')
```

Atualmente nós usamos o objeto global do Vue para nos prover qualquer configuração e criar novas instâncias do objeto Vue. Qualquer mudança feita num objeto Vue irá afetar todas as outras instâncias e componentes.

Agora, vamos ver como isso irá funcionar no Vue 3:

```js
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.config.ignoredElements = [/^app-/]
app.use(/* ... */)
app.mixin(/* ... */)
app.component(/* ... */)
app.directive(/* ... */)

app.mount('#app')
```

Como você provavelmente percebeu agora, todas as configurações têm o escopo definido para uma determinada aplicação Vue definida com a função `createApp`.

Atualmente, se alguma solução de terceiros estiver modificando o objeto Vue, ela poderá afetar sua aplicação de maneiras inesperadas (especialmente com *mixins* globais), o que não será possível com o Vue 3.

Esta mudança de API está sendo discutida atualmente [neste RFC](https://github.com/vuejs/rfcs/pull/29), o que significa que potencialmente poderá mudar no futuro.

## Fragments

Outra emocionante adição que nós podemos esperar no Vue 3 são os fragmentos.

O que são fragmentos? Bem, se você criar componentes Vue, eles só podem ter apenas um nó central.

Isso significa que um componente como este não poderá ser criado:

```html
<template>
  <div>Hello</div>
  <div>World</div>
</template>
```

A razão para isso é que a instância do Vue que representa qualquer componente Vue precisa ser vinculado a um único elemento DOM. A única forma que você tem para criar um componente com múltiplos nós DOM é criando um componente funcional que não tem fundamento na instância do Vue.

Acontece que a comunidade React teve o mesmo problema. A solução que eles trouxeram foi criar um elemento virtual chamado `Fragment`. Parece mais ou menos assim:

```js
class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    );
  }
}
```

Apesar de `Fragments` se parecerem com um elemento DOM normal eles são virtuais e não serão renderizados na árvore DOM. Dessa forma, podemos vincular a funcionalidade do componente em um único elemento sem criar um nó DOM redundante.

Atualmente nós podemos usar `Fragments` no Vue 3 com a biblioteca [vue-fragments](https://vuejsdevelopers.com/2018/09/11/vue-multiple-root-fragments/) e no Vue 3 você os terá pronto para usar!

## Suspense

Outra grande ideia do ecossistema React que será adotado pelo Vue é o componente `Suspense`.

`Suspense` suspenderá a renderização de seu componente e renderizará um componente *fallback** até que uma condição seja atingida. Durante a Vue London, Evan You tocou brevemente neste tópico e nos mostrou a API que mais ou menos podemos esperar. Acontece que o `Suspense` será apenas um componente com slots:

```html
<Suspense>
  <template >
    <Suspended-component />
  </template>
  <template #fallback>
    Loading...
  </template>
</Suspense>
```

Um conteúdo de *fallback** será exibido até que o componente `Suspended-component` seja inteiramente renderizado. `Suspense` pode esperar até o download do componente, se for um componente assíncrono, ou executar algumas ações assíncronas na função `setup`.

## Múltiplos v-models

`v-model` é uma diretiva que nós usamos para realizar um *two-way data binding* em um dado componente. Nós podemos passar uma propriedade reativa e modificá-la de dentro de um componente.

Conhecemos bem o `v-model` pelo seu uso em componentes de formulário.

```html
<input v-model="property />
```

Mas você sabia que pode usar o `v-model` com cada componente? Por baixo do capô ele é apenas um atalho para um mecanismo de passar uma propriedade `value` e ouvir um evento `input`. Reescrevendo o exemplo acima para a sintaxe abaixo teremos o mesmo efeito:

```html
<input 
  v-bind:value="property"
  v-on:input="property = $event.target.value"
/>
```

Nós ainda podemos alterar o nome padrão das propriedades e os nomes dos eventos com a propriedade `model` do componente.

```js
model: {
  prop: 'checked',
  event: 'change'
}
```

Como você pode ver a diretiva `v-model` pode nos dar um açucar sintático muito útil quando queremos ter um *two-way data binding* em nossos componentes. Infelizmente você só pode ter apenas um `v-model` por componente.

Felizmente, isso não será um problema no Vue 3! Você poderá dar nomes às propriedades do `v-model` e ter quantas delas desejar. Abaixo você encontra um exemplo de dois `v-model`s em um componente de formulário:

```html
<InviteeForm
  v-model:name="inviteeName"
  v-model:email="inviteeEmail"
/>
```

Esta mudança na API está atualmente sendo discutida [neste RFC](https://github.com/vuejs/rfcs/pull/31) o que significa que potencialmente poderá mudar no futuro.

## Portals

Portais são componentes especiais determinados a renderizar certo conteúdo fora do componente atual. É também uma *feature* [nativamente implementada no React](https://pl.reactjs.org/docs/portals.html). Isso é o que a documentação oficial do React diz sobre os portais:

> "Os portais fornecem uma maneira *first-class* de renderizar filhos em um nó DOM que existe fora da hierarquia DOM do componente pai."

É uma maneira muito interessante de lidar com modais, popups e outros componentes que geralmente aparecem no topo da página. Ao usar portais, você pode ter certeza de que nenhuma das regras CSS do componente pai afetará o componente que você deseja exibir e o isentará de executar hacks desagradáveis ​​com o `z-index`.

Para cada portal precisamos especificar qual o destino alvo onde o conteúdo do portal será renderizado. Abaixo você pode ver uma implementação da biblioteca [portal-vue](https://github.com/LinusBorg/portal-vue) que adiciona essa funcionalidade ao Vue 2.

```html
<portal to="destination">
  <p>This slot content will be rendered wherever thportal-target with name 'destination'
    is  located.</p>
</portal>

<portal-target name="destination">
  <!--
  This component can be located anywhere in your App.
  The slot content of the above portal component wilbe rendered here.
  -->
</portal-target>
```

O Vue 3 terá suporte nativo aos portais!

## Nova API para diretivas customizadas

Diretivas customizadas irão mudar superficialmente no Vue 3 para melhor se alinhar com o ciclo de vida dos componentes. Esta mudança poderá tornar a API mais fácil de se entender e aprender para iniciantes, pois será mais intuitiva.

Esta é a API atual:

```js
const MyDirective = {
  bind(el, binding, vnode, prevVnode) {},
  inserted() {},
  update() {},
  componentUpdated() {},
  unbind() {}
}
```

... e isto é como ela irá se parecer no Vue 3:

```js
const MyDirective = {
  beforeMount(el, binding, vnode, prevVnode) {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {}, // new
  unmounted() {}
}
```

Mesmo sendo uma *breaking change*, ela deve ser facilmente coberta com uma ferramenta de compatibilidade do Vue.

Esta mudança na API está atualmente sendo discutida [neste RFC](https://github.com/vuejs/rfcs/pull/32/files) o que significa que potencialmente poderá mudar no futuro.

Psst! Você pode aprender como dominar diretivas customizas em [nosso curso](https://vueschool.io/courses/custom-vuejs-directives).

## Sumário

Além da Composition API, que é a maior e mais nova API do Vue 3, também podemos encontrar muitas melhorias menores. Podemos ver que o Vue está caminhando para uma melhor experiência de desenvolvimento e uma API mais simples e intuitiva. Também é bom ver que a equipe do Vue decidiu adotar muitas idéias que estão disponíveis atualmente apenas através de bibliotecas de terceiros para o núcleo do *framework*.

A lista acima contém apenas as principais alterações e melhorias da API. Se você estiver curioso sobre outras, verifique o repositório de [RFCs do Vue](https://github.com/vuejs/rfcs/).

---

Bom, está é a tradução. Espero que tenha gostado. Não deixe de compartilhar este post para que mais pessoas o encontrem e se surpreendam com as mudanças bastante positivas que o time do Vue está trazendo.

Até a próxima!