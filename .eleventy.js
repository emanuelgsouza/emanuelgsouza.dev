require('dotenv').config()

// plugins
const sitemap = require("@quasibit/eleventy-plugin-sitemap");
const codeStyleHooks = require('eleventy-plugin-code-style-hooks');

const tinyHTML = require('@sardine/eleventy-plugin-tinyhtml');
const tinyCSS = require('@sardine/eleventy-plugin-tinycss');

const dayjs = require('dayjs')
require('dayjs/locale/pt-br')
const utc = require('dayjs/plugin/utc')
const env = require('./src/_data/env')
const RichTextResolver = require('storyblok-js-client/dist/rich-text-resolver.cjs');
const { installFilters } = require('./config/filters')

dayjs.locale('pt-br')
dayjs.extend(utc)

const resolver = new RichTextResolver()

resolver.addNode('code_block', (node) => {
  return {
    tag: [
      {
        tag: 'pre',
        attrs: node.attrs
      },
      {
        tag: 'code',
        attrs: node.attrs
      },
    ]
  }
})

resolver.addMark('link', (node) => {
  const attrs = { ...node.attrs }
  const { linktype = 'url' } = node.attrs

  const isLinkTypeEmail = linktype === 'email'
  if (isLinkTypeEmail) {
    attrs.href = `mailto:${attrs.href}`
  }

  const hasAnchor = attrs.anchor
  if (hasAnchor) {
    attrs.href = `${attrs.href}#${attrs.anchor}`
    delete attrs.anchor
  }

  const isNotStoryOpenNewTab = linktype !== 'story' && attrs.target === '_blank'
  if (isNotStoryOpenNewTab) {
    attrs.rel = 'noreferrer noopener'
  }

  return {
    tag: [{
      tag: 'a',
      attrs: attrs
    }]
  }
})

module.exports = function (eleventyConfig) {
  // copy files
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/static");

  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  // filters
  installFilters(eleventyConfig);

  eleventyConfig.addFilter("readableDate", dateObj => {
    return dayjs(dateObj || undefined).utc().format("MMM, DD YYYY");
  });
  eleventyConfig.addFilter("getBannerSource", bannerFile => {
    return `/images/posts/${bannerFile}`;
  });
  // TODO: refactor this to use the Image Service
  eleventyConfig.addFilter("getFullSlugFromBanner", bannerFile => {
    if (bannerFile) {
      return bannerFile;
    }

    return `${env.baseUrl}images/cover.jpeg`;
  });
  eleventyConfig.addFilter("getDescription", (description) => {
    return description || env.description;
  });

  // plugins
  eleventyConfig.addPlugin(codeStyleHooks, {
    lineNumbers: false,
  });

  eleventyConfig.addPlugin(sitemap, {
    sitemap: {
      hostname: process.env.HOST_NAME,
    },
  });

  eleventyConfig.addPlugin(tinyCSS);

  eleventyConfig.addPlugin(tinyHTML);

  eleventyConfig.addFilter("concatUrl", (partUrl) => {
    return `${env.baseUrl}${partUrl}`
  })

  eleventyConfig.addFilter("homeStory", (storyblokData = []) => {
    return storyblokData.find(storyItem => storyItem.full_slug === 'home')
  })

  eleventyConfig.addFilter("lastPosts", (storyblokData = []) => {
    return storyblokData.filter(storyItem => storyItem.full_slug.indexOf('posts/') !== -1)
  })

  eleventyConfig.addFilter("storyblokPosts", (storyblokData = []) => {
    return storyblokData.filter(storyItem => storyItem.full_slug.indexOf('posts/') !== -1)
  })

  eleventyConfig.addFilter("storyblokProjects", (storyblokData = []) => {
    return storyblokData.filter(storyItem => storyItem.full_slug.indexOf('projects/') !== -1)
  })

  eleventyConfig.addFilter('resolveRichtext', (content = {}) => {
    return resolver.render(content)
  })

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  }
};
