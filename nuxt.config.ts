// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  extends: ['@nuxt/ui-pro'],
  modules: [
    '@nuxt/eslint',
    "@nuxt/ui",
    '@nuxt/content',
    '@vee-validate/nuxt',
    '@nuxtjs/seo',
    '@vueuse/nuxt',
    '@nuxt/test-utils',
    '@pinia/nuxt',
    'nuxt-viewport',
  ],
})