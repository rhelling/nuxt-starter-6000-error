// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    '/api/**': {
      swr: false,
      proxy: 'http://heap.nl:6000/',
    },
  },
});
