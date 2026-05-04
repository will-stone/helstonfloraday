import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import svelte from '@astrojs/svelte'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://helstonfloraday.org.uk',
  integrations: [svelte(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
})
