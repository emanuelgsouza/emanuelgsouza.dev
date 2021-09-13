const getHostnameFromUrl = require('./get-hostname-from-url');
const readableTimeToRead = require('./readable-time-to-read');

const installFilters = (eleventyConfig) => {
  eleventyConfig.addFilter('getHostnameFromUrl', getHostnameFromUrl);
  eleventyConfig.addFilter('readableTimeToRead', readableTimeToRead);
};

module.exports = {
  installFilters,
};
