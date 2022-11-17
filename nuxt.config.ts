// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: { link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v2' }] },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
    quiet: false,
  },
});
