// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.2/tailwind.min.css'
  })

  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/alpinejs/2.8.0/alpine.js',
    body: true
  })
}

