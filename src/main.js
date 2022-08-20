// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/styles.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js',
    body: true
  })
}

