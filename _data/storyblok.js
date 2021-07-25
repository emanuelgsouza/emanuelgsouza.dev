module.exports = async () => {
  const StoryblokTo11ty = require('storyblok-11ty');
  const sb = new StoryblokTo11ty.importer({
    token: process.env.STORYBLOK_TOKEN,
    version: process.env.STORYBLOK_VERSION
  });

  return await sb.getStories({
    resolve_relations: 'projects'
  });
}
