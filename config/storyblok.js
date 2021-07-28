// 1. Require the Storyblok client
const StoryblokClient = require('storyblok-js-client');

// 2. Initialize the client with the preview token
// from your space dashboard at https://app.storyblok.com
const client = new StoryblokClient({
  accessToken: process.env.STORYBLOK_TOKEN,
  version: process.env.STORYBLOK_VERSION,
});

module.exports = client;
