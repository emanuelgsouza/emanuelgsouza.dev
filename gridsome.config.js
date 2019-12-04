const tailwindcss = require("tailwindcss")

module.exports = {
  siteName: 'Emanuel Gonçalves - Front End Enginner',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  }
}