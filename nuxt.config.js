module.exports = {
  /*
   ** Headers of the page
   */
  modules: [
    '@nuxtjs/bulma',
    '@nuxtjs/axios'
  ],

  plugins: [{
    src: '~plugins/vuex-persistedstate.js',
    // ssr: false
  }],

  head: {
    title: 'demo-dsd',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Demo for distributed system'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  env: {
    fbAPIKey: 'AIzaSyBvhVZ4GZC7wQo9sLEl5rJov8tot2mYJuA'
  },

  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#4FC08D',
    failedColor: '#bf5050',
    duration: 1500
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['axios'],
    /*
     ** Run ESLint on save
     */
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
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
