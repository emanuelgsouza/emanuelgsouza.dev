// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/global.css'

import * as components from './components'

export default function (Vue, { head }) {
  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.9.0/css/all.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Lora&display=swap'
  })

  head.meta.push({
    name: 'description',
    content: 'My personal website. A place to meet me'
  })

  head.meta.push({
    name: 'theme-color',
    content: '#2f3439'
  })
}
