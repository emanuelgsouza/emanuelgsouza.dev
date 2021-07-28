const storyblokClient = require('../config/storyblok');

module.exports = async () => storyblokClient.getAll('cdn/stories', {
  starts_with: 'posts',
});
