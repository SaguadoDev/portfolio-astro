import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true
    }
  }
})
