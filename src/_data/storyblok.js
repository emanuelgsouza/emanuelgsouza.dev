const StoryblokTo11ty = require('storyblok-11ty');

module.exports = async () => {
  // eslint-disable-next-line
  const sb = new StoryblokTo11ty.importer({
    token: process.env.STORYBLOK_TOKEN,
    version: process.env.STORYBLOK_VERSION,
  });

  return sb.getStories({
    resolve_relations: 'projects',
  });
};
