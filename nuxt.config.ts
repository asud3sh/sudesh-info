// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },
    modules: [
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxt/image',
    ],
    ui: {
        icons: ['simple-icons']
    },
    colorMode: {
        preference: 'system'
    },
    content: {
        highlight: {
            theme: {
                // Default theme (same as single string)
                default: 'github-light',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        },
    },
})