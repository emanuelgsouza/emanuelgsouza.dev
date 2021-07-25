const storyblokClient = require('../config/storyblok')

module.exports = async () => {
  return storyblokClient.getAll('cdn/stories', {
    starts_with: 'posts'
  })
}
