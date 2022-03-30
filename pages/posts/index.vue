<template>
  <section class="section">
    <AppTitle level="1">Meus posts</AppTitle>

    <div class="columns is-multiline">
      <div v-for="post in posts" :key="post.id" class="column is-half">
        <AppPostCard :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
import getMetatags from '~/utils/get-metatags'
const getPosts = (context) => {
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .getAll('cdn/stories', {
      version,
      by_slugs: 'posts/*',
    })
    .then((res) => res)
}

export default {
  async asyncData(context) {
    try {
      const posts = await getPosts(context)

      return {
        posts,
      }
    } catch (res) {
      if (!res.response) {
        console.error(res)
        context.error({
          statusCode: 404,
          message: 'Failed to receive content form api',
        })
      } else {
        console.error(res.response.data)
        context.error({
          statusCode: res.response.status,
          message: res.response.data,
        })
      }
    }
  },

  data: () => ({
    posts: [],
  }),

  head() {
    const title = `Blog posts | Emanuel Gonçalves - Web Software Developer`

    return {
      title,
      meta: getMetatags({
        title,
        description:
          'Meu blog pessoal, local em que compartilho um pouco do meu aprendizado, meus projetos e meus pensamentos',
        bannerUrl: 'https://emanuelgsouza.dev/cover.jpeg',
      }),
    }
  },
}
</script>
