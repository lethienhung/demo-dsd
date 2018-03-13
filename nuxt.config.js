module.exports = {
  /*
   ** Headers of the page
   */
  plugins: [{
    src: '~/plugins/vuex-persistedstate',
    ssr: false
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
    tree: [{
      id: "1",
      name: "Cây xoài",
      age: "15",
      lat: "1.0202822",
      long: "2.09283838",
      status: "Sống"
    }, {
      id: "2",
      name: "Cây Sung",
      age: "15",
      lat: "1.0202822",
      long: "2.09283838",
      status: "Sống"
    }, {
      id: "3",
      name: "Cây Táo",
      age: "15",
      lat: "1.0202822",
      long: "2.09283838",
      status: "Sống"
    }, {
      id: "4",
      name: "Cây ổi",
      age: "15",
      lat: "1.0202822",
      long: "2.09283838",
      status: "Sống"
    }, {
      id: "5",
      name: "Cây Chuối",
      age: "15",
      lat: "1.0202822",
      long: "2.09283838",
      status: "Sống"
    }]
  },
  generate: {
    routes: [
      '/1',
      '/2',
      '/3',
      '/4',
      '/5',
      '/posts/1'
    ]
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
