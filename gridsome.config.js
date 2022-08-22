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
    {
      use: "gridsome-plugin-htaccess",
      options: {
        textCompression: [
          "text/html",
          "application/javascript",
          "text/javascript",
          "text/css",
          "image/svg+xml"
        ],
        fileExpirations: {
          fileTypes: {
            "text/css": "access plus 1 year",
            "text/html": "access plus 1 day",
            "application/javascript": "access plus 1 year",
            "image/png": "access plus 1 month",
            "image/jpeg": "access plus 1 month",
            "image/webp": "access plus 1 month",
            "image/svg+xml": "access plus 1 month",
          },
          default: "access plus 1 month"
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {

      }
    }
  ],
  css: {
        loaderOptions: {
            postcss: {
                plugins: postcssPlugins,
            },
        },
    },
}
