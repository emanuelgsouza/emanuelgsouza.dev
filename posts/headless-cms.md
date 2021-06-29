---
title: Headless CMS, o que são? onde vivem? o que comem?
description: "Em Outubro de 2019 eu entrei para uma empresa de um produto bem interessante e de um mercado que não conhecia muito: Storyblok..."
banner: headless-post-image.jpeg
date: 2020-06-04
tags:
  - posts
  - headless
  - storyblok
layout: layouts/post.liquid
---

Em Outubro de 2019 eu entrei para uma empresa de um produto bem interessante e de um mercado que não conhecia muito: [a Storyblok](https://www.storyblok.com/). Além de trabalhar com linguagens que eu já gostava muito e com um time fera e internacional, estou tendo a oportunidade de lidar com uma tecnologia bem interessante e moderna: **Headless CMS**.

O motivo para a escrita deste texto é trazer para você conhecimentos que eu não tive no passado e despertar o interesse por novas soluções no ecossistema de CMS. Então, esquece de colocar no Google Tradutor o termo "Headless CMS", porquê a resposta não é animadora (spoiler: é "CMS Sem cabeça"). Venha conferir o que são Headless CMS, onde vivem, e o que comem.

## Evolução do conceito de CMS na internet

Antes, vamos investigar rapidamente a evolução que a internet teve e o papel dos Gerenciadores de Conteúdo nessa evolução.

### A Web 1.0

Características:
- **Estática**, os navegadores apenas entendiam HTML e a interação era nula;
- **Celeiro de informações**: a Web 1.0, mesmo tendo as características acima, era extremamente revolucionária, pois agora era possível armazenar conhecimento e compartilhá-lo como jamais visto.
- **Armazenamento em arquivos**: a web era feita de arquivos HTML que eram publicados através de um FTP. Precisa mudar o conteúdo? Edite o arquivo e suba novamente.

Com o advento dos anos 2000 e o surgimento de ferramentas como PHP e ASP, a Web passou por uma grande mudança, vindo agora a Web 2.0.

### A Web 2.0

Sem dúvida, o que propiciou o surgimento dessa revolução foram ao menos três fatores:

1. Possibilidade de **criação de conteúdo dinâmico**. Era possível deixar comentários nos posts, por exemplo.
2. **O conteúdo poderia ser armazenado em bases de dados**, diferentemente do formato anterior, em que o conteúdo era armazenado em arquivos, como por exemplo, o próprio HTML.
3. Surgimento de linguagens que permitiam uma dinamização na criação de conteúdo e acesso à base de dados, como [PHP](https://www.youtube.com/watch?v=AqDj3OSV0mM) e [ASP](https://pt.wikipedia.org/wiki/ASP).

Portanto, a principal característica da Web era ser dinâmica, sendo assim  possível adicionar conteúdos, editá-los e o consumidor final (o usuário) poder interagir com este conteúdo, por exemplo, criando comentários em posts.

É aqui que os grandes players do mercado de CMS surgem (mais a frente iremos investigar o que são os CMSs) como o [Wordpress](https://br.wordpress.com/) e o [Drupal](https://www.drupal.org/) e os *Site Builders*, que são ferramentas que praticamente constroem o site para você. Tudo isso surge para facilitar a vida dos produtores de conteúdo, pois agora não era mais necessário ter conhecimentos específicos de programação web para ter um site no ar.

Porém, mais um elemento é adicionado a sociedade: o ***smartphone***. E com ele, a possibilidade de acessar as mesmas páginas web que antes o usuário acessava no computador por esse novo dispositivo.

### A Web 3.0

Com o advento dos *smartphones* e algumas evoluções no acesso aos dados, como por exemplo, a possibilidade de automação da leitura de uma página web (criação dos *crawlers* web), a web precisou se reinventar. Surgindo assim a **Web semântica**. É nesta era que surge o [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5), que possibilita a estruturação do conteúdo web para que não humanos entendam.

Tal evolução trouxe um grande desafio aos CMSs: praticamente qualquer dispositivo consegue acessar a internet. Temos não apenas computadores, *smartphones* e *tablets* que acessam a internet, mas geladeiras, arduínos, *smartwatches* entre outros. Na presente era da internet, que alguns comumente chamam de **Web 4.0**, o desafio é entregar o conteúdo para qualquer dispositivo da melhor maneira.

## Mas, e os CMS?

Um CMS (sigla para Content Management System - Sistema de Gerenciamento de conteúdo), é um software responsável por **gerenciar o conteúdo**, ou seja, permitir a criação, edição e organização de um determinado conteúdo.

Ele precisa possuir, ao menos, alguns destes elementos:

- Um **Dashboard** para o produtor de conteúdo: é aqui que temos a liberdade para gerenciar o conteúdo, criar páginas, editá-las, escolher os temas que queremos entre outros.
- Ferramentas para publicação do conteúdo. Uma das etapas mais importantes é a publicação do conteúdo, ou seja, disponibilizá-lo na rede. Um CMS precisa de uma ferramenta para publicar o conteúdo e ela precisa ser simples para o usuário, já que o objetivo é que pessoas sem conhecimento técnico possam fazer uso de um CMS.

Com a possibilidade de variados dispositivos acessarem a internet, o que chamamos de [Internet das Coisas](https://rockcontent.com/blog/internet-das-coisas/), surge um desafio aos CMSs tradicionais, vejamos.

### O problema dos CMSs tradicionais

Proponho a seguinte analogia para entendermos qual o principal problema de um CMS Tradicional e o surgimento dos Headless CMSs:

> Traduzindo...
> Um CMS Tradicional é como o livro que você compra em uma livraria. Quer acessar o conteúdo? Você pega o livro e lê ele, e esta é a única forma. Um Headless CMS é como comprar um eBook. Você lê ele no Amazon Kindle, ou você usa o aplicativo do Kindle no PC, Mac, smartphone ou Tablet.

**O principal problema de um CMS Tradicional é que o conteúdo está "amarrado" à implementação do CMS**. Em termos técnicos, Front-End (o resultado final para quem consome o conteúdo) está acoplado ao Back-End (implementação do CMS). Como na analogia acima, o conteúdo (texto escrito pelo autor do livro) pode estar amarrado à uma interface física (livro) ou desacoplado da mesma (ebook), possibilitando seu consumo em diferentes interfaces.

Veja a seguinte imagem que mostra a mesma ideia da analogia anterior:

![Infográfico mostrando a diferença entre um Traditional e Headless CMS](https://images.contentstack.io/v3/assets/blt1264fa9b448be721/blt7fb0e48ec6d3ad63/5d0a4e58d8ff351753cbdadb/download)

<figcaption>
Fonte: https://www.contentstack.com/blog/all-about-headless/headless-cms-vs-building-custom-cms
</figcaption>

Portanto, os **Headless CMSs surgem para suprir essa necessidade de gerenciar o conteúdo da melhor forma para diferentes dispositivos**. Mas como se dá isso?

## Conhecendo mais a fundo um headless CMS

Já vimos um pouco da evolução da internet e como os CMSs estavam e estão nela. Vimos como funciona um CMS tradicional e como ele, no novo contexto da internet, possui algumas limitações e também vimos como os Headless CMSs as suprem. Mas, como funciona um Headless CMS?

Um Headless CMSs irá prover uma interface tal como um CMS comum teria. Porém, a diferença primordial dele é que, no final, você não terá o Front End pronto. Você precisará desenvolver um que consuma o conteúdo que está no CMS. Assim, um Headless CMS não se preocupa em como o seu conteúdo ficará no final, **ele se preocupa apenas em como o conteúdo estará estruturado**.

### Quais as vantagens?

Como a preocupação é apenas com a estrutura do conteúdo e o Front End é desacoplado da solução, temos como consequência:

* A **flexibilidade** para escolher a tecnologia que você deseja usar e julga ser a melhor para o projeto.
* **Facilidade de configuração e implantação do código**, pois você não precisará de um Back End, apenas do Front. Então qualquer *static hoisting* irá ser suficiente.
* A flexibilidade para transpor o mesmo conteúdo para ambientes/dispositivos diferentes, que outrora era a maior dificuldade que CMS tradicional enfrentava.

A melhor parte: **Headless CMS não diz respeito apenas a web sites**. Você pode usar um Headless CMS para a criação de aplicativos *mobile* e *desktop*, entre outros usos.

### E as desvantagens?

Creio que há ao menos duas desvantagens que você pode encontrar ao usar um Headless CMS, mas que são contornáveis:

1. Como o seu site não está acoplado ao CMS, não será possível fazer uso de ferramentas de Analytics diretamente pela plataforma/ferramenta que gerencia o conteúdo, como por exemplo, saber quantas pessoas acessaram o site, quais páginas visitaram entre outros dados. Porém, você pode usar o seu *static hosting* para ter essas informações ou usar o [Google Analytics](https://analytics.google.com/analytics/web/) em conjunto com o [Google Search](https://search.google.com/search-console?hl=pt-BR)
2. Você poderá não ter acesso ao resultado final do conteúdo estruturado ao mesmo tempo que gerencia ele. Como Front e Back não estão juntos, você pode achar que criar a estrutura do conteúdo seja algo muito abstrato. Porém, **existe uma solução de Headless CMS que o *core feature* é a solução para isso: [a Storyblok](https://www.storyblok.com/)** 😜😏.

### Quais os tipos

Podemos separar as soluções de Headless CMS em dois tipos, baseados em como ocorre a entrega e o consumo dos dados:

#### API driven

Esta é a solução mais comum. O CMS disponibiliza uma [API](https://www.youtube.com/watch?v=vGuqKIRWosk) para o consumo dos dados, e o Front End a usa. Alguns exemplos de soluções no mercado são: [Storyblok](https://www.storyblok.com/), [Contentful](https://contentful.com/) e [Prismic](https://prismic.io/)

Alguns pontos positivos desta solução são:

* Melhor solução para múltiplos front-ends
* Mais fácil de lidar quando há muito conteúdo

Mas alguns pontos negativos são:

* Geralmente vem com limite no consumo de dados
* Como não é integrado ao Git, pode ser complicado reverter mudanças

#### Git driven

Nesta solução, cada alteração no conteúdo irá gerar um novo *commit* num repositório git, e assim, uma nova versão do site será gerada. Alguns exemplos são: [NetlifyCMS](https://www.netlifycms.org/) e [Forestry](https://forestry.io/).

Alguns pontos positivos desta solução são:

* Configuração simples
* Fácil voltar uma versão, seja específica ou não
* Integração com o git permite uma curva de aprendizado melhor (claro, se já souber e dominar o git)

Porém, alguns pontos negativos são:

* A forma como o conteúdo irá ser estruturado é limitado
* Se o site tiver bastante conteúdo, pode ser um problema
* Se há vários sites/aplicativos acessando o mesmo conteúdo, pode não ser a melhor escolha

Recomendo fortemente a leitura do [artigo do Bejamas (em inglês)](https://bejamas.io/blog/git-based-cms-vs-api-first-cms/) a respeito desse assunto.

## Considerações finais

Headless CMS é uma solução bem interessante para o seu próximo blog, seu website de campanha de marketing ou até mesmo sua página pessoal na web. Existem inúmeras soluções no mercado. Recomendo o [post do time do Bejamas sobre essas diferentes soluções](https://bejamas.io/blog/headless-cms/). É um excelente comparativo, mostrando prós e contras de cada solução.

Vejo você no próximo post!

## Leituras adicionais

* [Post da ContentStack sobre a história dos CMSs](https://www.contentstack.com/blog/all-about-headless/content-management-systems-history-and-headless-cms)
* [Post do Bejamas com um overview de Headless CMS](https://bejamas.io/blog/content-management-systems/)
* [Post da Storyblok explicando o que é um Headless CMS](https://www.storyblok.com/tp/headless-cms-explained)
* [Headless CMS vs CMS Tradicionais do Hackernoon](https://hackernoon.com/headless-cms-vs-traditional-cms-521ad6fda420)
* [Post da Agility sobre dez motivos para se usar um Headless CMS](https://agilitycms.com/resources/guide/top-10-reasons-why-you-should-choose-a-headless-cms-over-a-traditional-cms)
* [Post do Bejamas sobre os tipos de Headless CMS](https://bejamas.io/blog/git-based-cms-vs-api-first-cms/)
* [Post do Bejamas com uma lista com inúmeras soluções no mercado de Headless CMS](https://bejamas.io/blog/headless-cms/)

---

Agradecimentos ao [Vinicius Reis](https://dev.to/vinicius73) pela revisão e pela imagem 😎