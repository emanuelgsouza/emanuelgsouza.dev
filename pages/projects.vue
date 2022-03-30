<template>
  <section class="section">
    <AppTitle level="1">Meus projetos</AppTitle>

    <div class="columns is-multiline">
      <div v-for="project in projects" :key="project.id" class="column is-half">
        <AppProjectCard :project="project.content" :tags="project.tag_list" />
      </div>
    </div>
  </section>
</template>

<script>
const getProjects = (context) => {
  const version =
    context.query._storyblok || context.isDev ? 'draft' : 'published'

  return context.app.$storyapi
    .getAll('cdn/stories', {
      version,
      by_slugs: 'projects/*',
    })
    .then((res) => res)
}

export default {
  async asyncData(context) {
    try {
      const projects = await getProjects(context)

      return {
        projects,
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
    projects: [],
  }),

  head() {
    return {
      title: `Projetos | Emanuel Gonçalves - Web Software Developer`,
    }
  },
}
</script>
