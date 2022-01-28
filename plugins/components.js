/* eslint-disable */
import Vue from 'vue'

// storyblok components
import SbHome from '~/components/SbHome.vue'

// own components
import AppTags from '~/components/AppTags.vue'
import AppTitle from '~/components/AppTitle.vue'
import AppProjectCard from '~/components/AppProjectCard.vue'
import AppPostCard from '~/components/AppPostCard.vue'

Vue.component('home', SbHome)

Vue.component('AppTags', AppTags)
Vue.component('AppTitle', AppTitle)
Vue.component('AppProjectCard', AppProjectCard)
Vue.component('AppPostCard', AppPostCard)