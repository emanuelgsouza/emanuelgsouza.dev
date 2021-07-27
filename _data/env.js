require('dotenv').config();

// inpiring in https://jec.fyi/blog/setting-up-seo-and-google-analytics
const environment = process.env.ELEVENTY_ENV;
const PROD_ENV = 'prod';
const prodUrl = process.env.HOST_NAME;
const devUrl = 'http://localhost:8080';
const baseUrl = environment === PROD_ENV ? prodUrl : devUrl;
const isProd = environment === PROD_ENV;

module.exports = {
  siteName: 'Emanuel Gonçalves - Web Software Developer',
  author: 'emanuelgsouza',
  description: 'Meu blog pessoal, local em que compartilho um pouco do meu aprendizado, meus projetos e meus pensamentos',
  environment,
  isProd,
  baseUrl,
  tracking: {
    gtag: isProd ? process.env.GA : null,
  },
};
