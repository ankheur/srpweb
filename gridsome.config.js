// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwind = require('tailwindcss')
// const purgecss = require('@fullhuman/postcss-purgecss')

const postcssPlugins = [
  tailwind(),
]

// postcssPlugins.push(purgecss(require('./purgecss.config.js')))

module.exports = {
  siteName: 'SRPWeb',
  siteDescription: 'SRPWeb, développeur web freelance pour vos sites vitrine et applications web',
  siteUrl: 'https://srpweb.fr',

  // pathPrefix: '/dist',
  plugins: [
    
  ],
  css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}
