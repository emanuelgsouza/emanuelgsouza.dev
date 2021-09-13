const storyblokClient = require('../../config/storyblok');

const changeDataToContent = (post) => {
  const content = { ...post.content };
  const clone = { ...post };

  delete clone.content;

  return {
    ...clone,
    data: content,
  };
};

const transformPosts = (posts) => posts.map(changeDataToContent);

module.exports = async () => {
  try {
    const posts = await storyblokClient.getAll('cdn/stories', {
      starts_with: 'posts',
      version: process.env.STORYBLOK_VERSION,
      sort_by: 'first_published_at:desc',
    });

    return Promise.resolve(transformPosts(posts));
  } catch (error) {
    // eslint-disable-next-line
    console.error('Error on getting the posts stories on Storyblok');
    return Promise.reject(error);
  }
};
