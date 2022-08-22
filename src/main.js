// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
require ('~/assets/css/styles.css')

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'fr' }

  head.meta.push({
    name: 'keywords',
    content: 'Freelance,Web,Laravel,PHP,Wordpress'
  })

  head.meta.push({
    name: 'robots',
    content: 'index,follow'
  })
}
