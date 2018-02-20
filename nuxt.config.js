const path = require('path');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Title',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' },
      { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
    ]
  },
  css: [
    { src: '~assets/bulma-overrides.scss', lang: 'sass' },
    { src: '~assets/main.css', lang: 'css' }
  ],
  loading: false,
  loadingIndicator: 'circle',
  plugins: [
    {src: '~plugins/buefy'},
    { src: '~/plugins/vue-observe-visibility' },
    { src: '~/plugins/feathers' },
    { src: '~/plugins/vue-smoothscroll' },
  ],
  manifest: {
    theme_color: '#3B8070'
  },
  /*
  ** Modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],
  rootDir: path.resolve(__dirname),
  srcDir: path.resolve(__dirname, 'client'),
  dev: process.env.NODE_ENV !== 'production',
  build: {
    vendor: [
      '@feathersjs/client',
      'socket.io-client',
    ],
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    }
  },
  env: {
    baseUrl: 'http://localhost:3000'
  }
}
