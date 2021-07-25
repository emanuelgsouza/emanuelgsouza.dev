module.exports = async () => {
  const StoryblokTo11ty = require('storyblok-11ty');
  const sb = new StoryblokTo11ty.importer({
    token: process.env.STORYBLOK_TOKEN,
    version: process.env.STORYBLOK_VERSION
  });

  const stories = await sb.getStories({
    resolve_relations: 'projects'
  });

  return Promise.resolve(
    stories.filter(story => story.full_slug.indexOf('posts/') !== -1)
  )
}
