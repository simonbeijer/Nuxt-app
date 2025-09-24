// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['@/assets/css/theme.css'],
  runtimeConfig:{
    public: {
      weatherApiKey:  process.env.WEATHER_API
    }
  }
})
