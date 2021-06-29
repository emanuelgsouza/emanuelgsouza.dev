---
title: Grid para layout, flexbox para componentes
description: "Tradução autorizada do artigo Grid for layout, Flexbox for components escrito por Ahmad Shadeed."
date: 2020-06-26
tags:
  - posts
  - grid
  - flexbox
  - css
  - componentização
layout: layouts/post.liquid
banner: flex-grid-post-image.jpeg
---

<span>Imagem de fundo por <a href="https://unsplash.com/@halacious?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Halacious</a> on <a href="/s/photos/layout?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

Compartilho com você a tradução autorizada deste excelente artigo escrito por [Ahmad Shadeed](https://twitter.com/shadeed9).

> Título original - [Grid for layout, Flexbox for components](https://ishadeed.com/article/grid-layout-flexbox-components/)

Meu irmão é recém-formado em engenharia da computação e ele está atualmente finalizando seu estágio em desenvolvimento front-end. Ele aprendeu sobre CSS grid e flexbox, mas eu notei um padrão que eu vi muito na web. Ele não conseguia decidir quando usar grid ou flexbox. Por exemplo, ele usou CSS grid para fazer o layout do cabeçalho de um site e mencionou que o processo não foi tranquilo, pois ele brincava com a propriedade `grid-column` e tentava ajustá-la até se parecer com o design.

Para ser sincero, não gosto disso, e também pesquisei sobre um recurso que ele pode usar para aprender as diferenças entre grid e flexbox, com exemplos de ambos, mas não consegui encontrar nenhum. Decidi escrever um artigo profundo que cubra tudo sobre aquele tópico. Espero que você ache claro!

## Introdução

Antes de entrar de cabeça nos conceitos e exemplos, eu quero me certificar que você entende a diferença entre CSS grid e flexbox. CSS grid é um módulo multi-dimensional de layout, que significa que ele possui colunas e linhas. Flexbox pode dispor seus itens filhos como colunas ou linhas, mas não ambos.

Se você não conhece CSS grid e flexbox, eu recomendo ler [este artigo visual](https://ishadeed.com/article/learn-box-alignment/). Se você os conhece, que legal, vamos mergulhar nas diferenças entre eles e quando usar cada um e o porquê.

## A diferença entre Grid e Flexbox

Deixe-me ser claro a respeito disso, não há uma maneira direta de decidir entre CSS grid e flexbox. Além disso, não há uma forma **correta** e **incorretá** de usá-los. Este artigo é um tipo de guia que **recomenda** usar uma técnica para um específico caso de uso. Eu explicarei o conceito geral, e então ir aos exemplos, e o resto é você que explora e experimenta mais.

```css
/* Flexbox wrapper */
.wrapper {
  display: flex;
}

/* Grid wrapper */
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 16px;
}
```

![Imagem mostrando a diferença entra Flexbox e grid em uma linha](https://ishadeed.com/assets/grid-flex/grid-vs-flexbox.png)

Você notou alguma coisa? O Flexbox apresenta uma lista in-line de elementos, enquanto o CSS grid os torna os transforma em um grid de colunas e linhas. Flexbox está alinhando o alinhamento em uma linha. Isso pode ser uma coluna, se quisermos.

```css
/* Flexbox wrapper */
.wrapper {
  display: flex;
  flex-direction: column;
}
```

![Imagem mostrando a diferença entra Flexbox e grid em colunas](https://ishadeed.com/assets/grid-flex/grid-vs-flexbox-1.png)

## Como decidir qual usar

Decidir entre CSS grid e flexbox pode ser um pouco difícil (às vezes), especialmente se você é novo em CSS. Eu posso ouvir você! Aqui estão algumas perguntas iniciais que eu faço ao escolher entre eles:

* Como os itens filho do componente são exibidos? Em linha ou em colunas e linhas?
* Como o componente deve funcionar em diferentes tamanhos de tela?

Na maioria das vezes, se o componente que você está vendo tiver todos os itens filhos exibidos em linha, provavelmente o flexbox é a melhor solução. Considere o seguinte exemplo:

![Imagem mostrando que um componente possui dois filhos dispostos em linha](https://ishadeed.com/assets/grid-flex/decide-1.png)

Contudo, se você ver colunas e linhas, o CSS grid é a solução para o seu caso.

![Imagem mostrando que há um layout com 3 colunas e duas linhas](https://ishadeed.com/assets/grid-flex/decide-2.png)

Agora que expliquei a principal diferença entre eles, passemos a exemplos mais específicos e vejamos como decidir.

## Casos de uso e exemplos

Na seção a seguir, discutirei em detalhes sobre os diferentes casos de uso para flexbox e grid.

### CSS Grid

#### Main e Sidebar

Quando você tem uma barra lateral e seção principal (`main`), o CSS Grid é uma solução perfeita para construí-los. Considere a seguinte modelo:

![Imagem que mostra duas seções, uma com uma barra lateral à esquerda e a seção principal à direita](https://ishadeed.com/assets/grid-flex/grid-use-1.png)

Aqui está como eu faria isso em CSS:

```html
<div class="wrapper">
  <aside>Sidebar</aside>
  <main>Main</main>
</div>
```

```css
@media (min-width: 800px) {
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 16px;
  }
  
  aside {
    align-self: start;
  }
}
```

Se `align-self` não for usado para o elemento `aside`, a altura dele será igual ao do elemento `main`, não importa o tamanho do conteúdo.

#### Cards em Grid

Conforme discutido no início do artigo, o CSS grid é auto-explicativo a partir do nome, portanto, usá-lo para criar uma grade de cartões é um uso perfeito dele.

![Imagem mostrando um grid de cards com 3 colunas e duas linhas](https://ishadeed.com/assets/grid-flex/grid-use-2.png)

Aqui está como eu implementaria o layout:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
}
```

A largura da coluna será de pelo menos `200px`, e se o espaço não for suficiente, ele irá colocar os cards em uma nova linha. Vale ressaltar que o código acima pode causar rolagem horizontal se a largura do *viewport* for menor que `200px`.

Uma solução simples é adicionar a definição de grid somente quando a largura do *viewport* for suficiente. Veja abaixo:

```css
@media (min-width: 800px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 16px;
  }
}
```

#### Layout de seção

No design a seguir, podemos usar o grid duas vezes, o primeiro uso é dividir a área em outras duas áreas (a barra lateral "Contact us", e o formulário) e o segundo uso é no próprio grid do formulário.

Não consigo enfatizar o quanto CSS grid é perfeito para isso. Aqui está como fazer no CSS:

```css
@media (min-width: 800px) {
  .wrapper {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  
  .form-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
  
  .form-message,
  .form-button {
    grid-column: 1 / 3; /* deixe que eles tomem toda a largura */
  }
}
```

Este exemplo é emprestado do [meu artigo](https://webdesign.tutsplus.com/tutorials/how-to-build-web-form-layouts-with-css-grid--cms-28776) na Envanto sobre a construção de layouts para formulários web com CSS grid. Eu recomendo que você leia.

### CSS Flexbox

#### Navegação do website

90% das vezes, a navegação do website deverá ser feita com Flexbox. O padrão mais comum é ter a logo à esquerda e a navegação à direita. Isso é perfeito para flexbox.

![Imagem mostrando uma simples nagevação, com a logo à esquerda e o menu à direita](https://ishadeed.com/assets/grid-flex/flexbox-use-1.png)

No exemplo acima, tudo que você precisa definir é o seguinte:

```css
.site-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
```

O mesmo conceito também pode funcionar no seguinte design também.

![Imagem mostrando a mesma navegação anterior, porém, com um maior espaçamento no elemento final](https://ishadeed.com/assets/grid-flex/flexbox-use-2.png)

Note como a estrutura de navegação ficou um pouco diferente, mas o espaçamento entre os itens ainda é feito com a propriedade `justify-content`.

#### Lista de ações

Quando você ouve falar de uma lista, a primeira coisa que você pensa é uma lista vertical. No entanto, uma lista pode ser exibida em linha, então eu só queria ter certeza de que isso está claro.

Um exemplo de uma lista de ações é algo que podemos pegar emprestado do Facebook ou Twitter. A lista de ações consiste em botões de ação que o usuário pode executar. Veja as imagens abaixo:

![Imagem mostrando uma lista de ação do Facebook e do Twitter](https://ishadeed.com/assets/grid-flex/flexbox-use-3.png)

Como você vê, os itens são exibidos um ao lado do outro e são distribuídos horizontalmente. Flexbox é perfeito para isso! Esse é um dos principais usos dele.

```css
.actions-list {
  display: flex;
}

.actions-list__item {
  flex: 1; /* expande os items para que tomem todo o espaço disponível igualmente entre eles */
}
```

Outra variação disso é um botão de ação de uma *modal* ou um cabeçalho de uma *modal*.

![Imagem mostrando uma modal, em que na parte de cima, seu cabeçalho possui um título à esquerda e um botão de ação para fechar à direita. Abaixo há três botões: um para salvar, outro para limpar e à direita para cancelar](https://ishadeed.com/assets/grid-flex/flexbox-use-4.png)

Tanto o cabeçalho da modal como o rodapé têm elementos filhos que são exibidos em linha. Como você vê, o espaçamento entre eles é feito como abaixo.

Para o cabeçalho da modal, fica assim:

```css
.modal-header {
  display: flex;
  justify-content: space-between;
}
```

E para o rodapé, é um pouco diferente. A ação "Cancel" usa uma margem automática para se empurrar para a direita. Eu escrevi um [artigo detalhado](https://ishadeed.com/article/auto-css/) sobre isso.

```css
.cancel__action {
  margin-left: auto;
}
```

O nome da classe `.cancel__action` pode não ser perfeito aqui, mas não quero entrar em convenções de nomenclatura de CSS para este artigo.

#### Elementos de formulário

Uma combinação de um `input` com um botão ao lado é um caso de uso perfeito para o Flexbox. Considere a figura abaixo:

![Uma imagem com dois campos de formulário](https://ishadeed.com/assets/grid-flex/flexbox-use-5.png)

No primeiro formulário, o `input` está ocupando todo o espaço restante, fazendo com que ele tenha uma largura dinâmica. O mesmo se aplica ao segundo formulário (Facebook Messenger), o campo de texto ocupa todo o espaço restante. Vamos olhar mais de perto.

![Uma imagem mostrando dois campos de formulário](https://ishadeed.com/assets/grid-flex/flexbox-use-6.png)

```css
.input { flex: 1 1 auto; }
```

Observe que, sem usar `flex: 1 1 auto` no campo de texto, ele não se expandirá e preencherá o espaço restante.

#### Threads e comentários

Outro caso de uso comum para o flexbox são as threads de comentários. Considere o seguinte exemplo.

![Uma imagem mostrando um exemplo de comentário em uma thread](https://ishadeed.com/assets/grid-flex/flexbox-use-7.png)

Temos a foto do usuário e o próprio comentário. O comentário está ocupando o espaço restante de seu elemento pai. Esse é um uso perfeito para o flexbox.

#### Componentes de card

Um componente de *card* tem muitas variações, mas o design mais comum é semelhante ao modelo abaixo.

![Imagem mostrando dois cards, um em formato de coluna e outro em linha](https://ishadeed.com/assets/grid-flex/flexbox-use-8.png)

À esquerda, o ítens filhos do card são empilhados pois a direção definida na propriedade `flex-wrapper` é `column`. Enquanto que à direita é o oposto. A direção usada é `row`, e tenha em mente que `row` é o default para flexbox.

```css
.card {
  display: flex;
  flex-direction: column;
}

@media (min-width: 800px) {
  .card {
    flex-direction: row;
  }
}
```

Outra variação comum para um cartão é ter um ícone com um *label* de texto abaixo dele. Pode ser um botão, link ou apenas para decoração. Considere o seguinte modelo:

![Imagem mostrando três card, um ao lado do outro e em outro exemplo, um abaixo do outro](https://ishadeed.com/assets/grid-flex/flexbox-use-9.png)

Note como o ícone e o *label* do texto estão centralizados na horizontal e na vertical. Graças ao flexbox, isso é fácil de fazer.

```css
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```

O estilo em linha será o padrão, basta remover a declaração `flex-direction: column` e deixá-la no valor padrão (`row`).

#### Tabs e Menus de botão

Quando se trata de elementos que ocupam toda a largura da tela e têm itens que devem preencher todo o espaço disponível, o flexbox é a ferramenta perfeita aqui.

![Imagem que mostra uma tab com 3 elementos dispostos em tamanho igual](https://ishadeed.com/assets/grid-flex/flexbox-use-10.png)

No exemplo acima, cada item deve preencher o espaço disponível e deve ter largura igual. Ao configurar a exibição do *wrapper* para *flex*, isso pode ser feito facilmente.

```css
.tabs__item {
  flex-grow: 1;
}
```

Essa técnica é usada no React Native para criar a barra de guias para aplicativos *mobile*. Aqui está um exemplo de código que faz o mesmo que o descrito acima em React Native. O código é emprestado [deste local](https://reactnative.dev/docs/flexbox).

```js
import React from 'react';
import { View } from 'react-native';

export default FlexDirectionBasics = () => {
    return (
      <View style=>
        <View style= />
        <View style= />
        <View style= />
      </View>
    );
};
```

#### Lista de características

O que eu mais gosto no flexbox é a capacidade de reverter a direção dos elementos. A direção padrão no flexbox é `row`, mas podemos revertê-la como abaixo.

```css
.item {
  flex-direction: row-reverse;
}
```

Na modelo abaixo, observe como o item par é revertido, isso é feito com a técnica acima. É muito útil.

![Imagem mostrando 3 cards, em que o card do meio possui o ícone à direita e o texto à esquerda](https://ishadeed.com/assets/grid-flex/flexbox-use-11.png)

#### Centralizando uma seção de conteúdo

Vamos considerar que temos uma seção `hero`, e o conteúdo precisa estar centralizado horizontalmente e verticalmente. A centralização horizontal pode ser fácil pois poderia ser feito com o alinhamento de texto.

![Imagem mostrando uma hero section com os elementos centralizados horizontalmente](https://ishadeed.com/assets/grid-flex/flexbox-use-12.png)

```css
.hero {
  text-align: center;
}
```

Mas como podemos usar o flexbox para centralizar os elementos verticalmente? Aqui está o que precisamos.

```css
.hero {
  display: flex;
  flex-direction: column;
  align-items: center; /* centralizar os elementos horizontalmente */
  justify-content: center; /* centralizar os elementos verticalmente */
  text-align: center;
}
```

### Combinando CSS grid e Flexbox

Não apenas cada módulo de layout possui seu caso de uso, mas podemos usar ambos. Quando penso sobre combinar eles, o primeiro uso que eu vejo é uma lista de cards. Grid é usado para dispor os cards, e flexbox é usado para o componente card em si.

![Imagem mostrando um grid de cards](https://ishadeed.com/assets/grid-flex/grid-and-flex.png)

Aqui estão os requisitos para o layout:
* A altura dos *cards* para cada linha deve ser igual
* O link "Read more" deve ser posicionado no final do *card*, independentemente da sua altura.
* O grid deve usar a função `minmax()`

```html
<div class="wrapper">
  <article class="card">
    <img src="sunrise.jpg" alt="">
  <div class="card__content">
    <h2><!-- Title --></h2>
    <p><!-- Desc --></p>
    <p class="card_link"><a href="#">Read more</a></p>
  </div>
  </article>
</div>
```

```css
@media (min-width: 500px) {
  .wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 16px;
  }
}

.card {
  display: flex; /* [1] */
  flex-direction: column; /* [2] */
}

.card__content {
  flex-grow: 1; /* [3] */
  display: flex; /* [4] */
  flex-direction: column;
}

.card__link {
  margin-top: auto; /* [5] */
}
```

Deixe-me explicar o CSS acima:

1. Faz o card um wrapper flexbox.
2. A direção usado é `column`, o que significa que os elementos cards estão empilhados
3. Deixa o conteúdo do card expandido e preencher o espaço restante.
4. Faz o conteúdo do card um wrapper flexbox.
5. Finalmente, usando `margin-top:auto` para empurrar o item para baixo. Isto irá mantê-lo posicionado ao final do card independente da altura.

Como você viu, combinar CSS grid e flexbox não é difícil. Essas duas ferramentas podem nos dar várias maneiras de implementar layouts na web. Vamos usá-los corretamente e combiná-los **somente** quando necessário, como acima.

### Fallback e suporte a navegadores antigos

#### Usando CSS @supports

Há alguns meses, recebi um *tweet* dizendo que meu site estava quebrado no IE11. Depois de verificar, notei um comportamento muito estranho. Todo o conteúdo do site estava recolhido na área superior esquerda. Meu site não estava navegável!

![Imagem mostrando todo o conteúdo do site colapsado à esquerda](https://ishadeed.com/assets/grid-flex/ishadeed-ie11.png)

Sim, este é o meu site - um site de um desenvolvedor front-end, no IE11. No começo, fiquei confuso, por que isso está acontecendo? Lembrei que o CSS grid é suportado no IE11, mas essa é a versão antiga lançada pela Microsoft. A solução é muito simples, que é usar o `@supports` para usar somente a grade CSS em novos navegadores.

```css
@supports (grid-area: auto) {
  body {
    display: grid;
  }
}
```

Deixe-me explicar isso. Eu usava `grid-area` porque ela era suportada apenas na nova especificação do CSS grid, de março de 2017 até hoje. Uma vez que o IE não suporta a *query* `@supports`, toda a regra será ignorada. Como resultado, o novo CSS grid será usado apenas em navegadores que o suportam.

#### Usando o flexbox para suporte ao CSS grid

Se o flexbox não é adequado para exibir uma grade de itens, isso não significa que não seja bom como fallback. Você pode usar o flexbox como substituto do CSS grid para navegadores não compatíveis. Eu trabalhei em uma [ferramenta](https://shadeed.github.io/grid-to-flex/) que faz exatamente isso.

```scss
@mixin grid() {
  display: flex;
  flex-wrap: wrap;

  @supports (grid-area: auto) {
    display: grid;
    grid-gap: 16px 16px;
  }
}

@mixin gridAuto() {
  margin-left: -16px;

  > * {
    margin-bottom: 16px;
    margin-left: 16px;
  }

  @media (min-width: 320px) {
    > * {
      width: calc((99% / #{2}) - 16px);
      flex: 0 0 calc((99% / #{2}) - 16px);
    }
  }

  @media (min-width: 768px) {
    > * {
      width: calc((99% / #{3}) - 16px);
      flex: 0 0 calc((99% / #{3}) - 16px);
    }
  }

  @supports (grid-area: auto) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-left: 0;

    > * {
      width: auto;
      margin-left: 0;
      margin-bottom: 0;
    }
  }
}
```

O código de fallback acima funciona da seguinte maneira:

1. Adiciona `display: flex` e `flex-wrap: wrap` ao elemento wrapper.
2. Verifica se CSS grid é suportado, se sim, então `display: grid` será usado.
3. Usando o seletor `> *`, podemos selecionar os elementos filhos diretos do wrapper. Ao selecioná-los, podemos adicionar uma largura ou tamanho específico a cada um.
4. Obviamente, a margem entre cada uma é necessária e será substituída por `grid-gap`, caso CSS grid seja suportado.

Aqui está um exemplo de como usar este mixin do Sass.

```scss
.wrapper {
  @include grid();
  @include gridAuto();
}
```

[Demostracão](https://codepen.io/shadeed/pen/XWrLmYe)

### Quando as coisas dão errado para o Grid e o Flexbox

Enquanto fazia uma revisão de código para o meu irmão, notei alguns usos incorretos para o CSS grid ou o flexbox e achei que seria útil se eu destacasse alguns deles.

#### Usar CSS grid para um cabeçalho de site

Uma das motivações deste artigo foi esse erro. Notei que meu irmão está usando CSS Grid para implementar um cabeçalho de site.

Ele mencionou coisas como "era complexo, CSS Grid é difícil... etc". Como resultado do uso de um método de layout incorreto, ele teve uma ideia de que o CSS grid é complexo. Não é, e toda a sua confusão veio do fato de usá-lo para algo que não é adequado.

Considere o seguinte exemplo que eu notei.

![Imagem mostrando o uso incorreto de css grid num cabecalho](https://ishadeed.com/assets/grid-flex/incorrect-use-1.png)

```css
.site-header {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.site-nav {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
```

O CSS grid foi usada duas vezes, a primeira vez foi para todo o cabeçalho e a segunda para a navegação. Ele usou `grid-column` para ajustar o espaçamento entre os elementos e outras coisas estranhas que não me lembro, mas você entendeu!

#### Usando CSS Grid para tabs

Outro uso incorreto do CSS Grid é aplicá-lo em um componente de tabs. Considere o seguinte modelo.

![Imagem mostrando o uso incorreto de css grid em tabs](https://ishadeed.com/assets/grid-flex/incorrect-use-2.png)

O código CSS incorreto se parece com o seguinte:

```css
.tabs-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Pelo código acima, posso ver que o desenvolvedor assumiu que a contagem de tabs é de apenas três. Como resultado, ele usou `1fr 1fr 1fr` para organizar as colunas. Isso pode ser quebrado facilmente se a contagem de colunas for alterada.

#### Uso excessivo de Flexbox ou Grid

Lembre-se de que o antigo método de layout pode ser perfeito para o trabalho. O uso excessivo de flexbox ou grid pode aumentar a complexidade do seu CSS com o tempo. Não estou dizendo que eles são complexos, mas usá-los **corretamente** e no contexto certo, conforme explicado nos exemplos deste artigo, é muito melhor.

Por exemplo, você tem a seguinte seção `hero` com uma solicitação para centralizar horizontalmente todo o conteúdo dela.

![Imagem mostrando um form de solitacão com um botão de Leia Mais](https://ishadeed.com/assets/grid-flex/hero-centered.png)

Isso pode ser feito simplesmente usando `text-align: center`. Porque usar flexbox quando há uma solução mais fácil?

## Conclusão

Ufa, isso foi muito sobre as diferenças entre o uso de grid CSS e flexbox. Este tópico estava em minha mente por muito tempo, e eu fico feliz que eu tive a chance de escrever sobre ele. Por favor, não hesite de dar um *feedback* tanto por email ou twitter [@shadeed9](https://twitter.com/shadeed9)!

Obrigado pela leitura.

---

E é isso, espero que tenha gostado. Não deixe de seguir [Ahmad Shadeed](https://twitter.com/shadeed9) no Twitter. Ele sempre vem com textos bem completos sobre CSS e Design. E se você gostou deste post, não esqueça de curtir ele e compartilhá-lo em suas redes sociais.

Até o próximo post!
