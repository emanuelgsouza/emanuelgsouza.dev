// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/global.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as fab from '@fortawesome/free-brands-svg-icons'
import * as fas from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import * as components from './components'

export default function (Vue, { head }) {

  library.add(
    fab.faGithub,
    fab.faMedium,
    fab.faLinkedinIn,
    fab.faTelegram,
    fab.faTwitter,
    fab.faCodepen,
    fas.faMugHot,
    fas.faHeart,
    fas.faTag,
    fas.faEnvelope,
    fas.faChess
  )

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
  })

  Vue.component('FontAwesomeIcon', FontAwesomeIcon)

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
