// https://content.nuxtjs.org/api/configuration
export default defineNuxtConfig({
    devtools: {
      enabled: true,

      timeline: {
        enabled: true,
      },
    },
    ssr:false,
    target: 'static',
    nitro: {
      preset: process.env.NITRO_PRESET || 'static' // Use 'netlify' if you need SSR
    },
    generate: {
      fallback: '404.html' // For SPA fallback
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
