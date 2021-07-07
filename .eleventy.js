const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const dayjs = require('dayjs')
const utc = require('dayjs/plugin/utc')
const env = require('./_data/env')

dayjs.extend(utc)

module.exports = function (eleventyConfig) {
  // copy files
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  // filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj).utc().format("MMM, DD YYYY");
  });
  eleventyConfig.addFilter("getBannerSource", bannerFile => {
    return `/images/posts/${bannerFile}`;
  });
  eleventyConfig.addFilter("getFullSlugFromBanner", bannerFile => {
    return `${env.baseUrl}/images/posts/${bannerFile}`;
  });
  eleventyConfig.addFilter("getDescription", (description) => {
    return description || env.description;
  });

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter("readingTime", text => {
    // credits: https://ishambuilds.tech/posts/2020-05-19-building-a-reading-time-indicator-with-eleventy/
    // get entire post content element
    let wordCount = `${text}`.match(/\b[-?(\w+)?]+\b/gi).length;
    //calculate time in munites based on average reading time
    let timeInMinutes = (wordCount / 225)
    //validation as we don't want it to show 0 if time is under 30 seconds
    if(timeInMinutes <= 0.5) {
      return 1;
    } else {
      //round to nearest minute
      return Math.round(timeInMinutes);
    }
  })
};
