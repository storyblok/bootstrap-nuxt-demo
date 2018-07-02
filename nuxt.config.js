const StoryblokClient = require('storyblok-js-client')

// !!! Change to your Storyblok preview token
const YourStoryblokToken = 'qQTqOxTlxSrQiW7f9FANDwtt'
const StoryblokToken = typeof window !== 'undefined' && window.Storyblok ? window.Storyblok.config.accessToken : YourStoryblokToken

module.exports = {
  mode: 'spa',
  modules: [
    ['storyblok-nuxt', {accessToken: StoryblokToken, cacheProvider: 'memory'}]
  ],
  plugins: [
    '~/plugins/components',
    '~/plugins/filters'
  ],
  router: {
    middleware: 'languageDetection'
  },
  generate: {
    routes: [
      {route: '/'}
    ]
  },
  /*  generate: {
    routes() {
      let routes = []

      const StoryblokClientInstance = new StoryblokClient({
        accessToken: StoryblokToken
      })

      return StoryblokClientInstance.get('cdn/links')
        .then((res) => {
          for (i in res.data.links) {
            routes.push({
              route: '/' + res.data.links[i].slug
            })
          }

          return routes
        })
    }
  },*/
  /*
  ** Headers of the page
  */
  head: {
    title: 'mywebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Storyblok project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.0.9/css/all.css' },
      { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    optimization: {
      splitChunks: {
        chunks: 'async',
      }
    },
    splitChunks: {
      pages: false,
      vendor: true,
      commons: true,
      runtime: true,
      layouts: false
    },
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && process.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
