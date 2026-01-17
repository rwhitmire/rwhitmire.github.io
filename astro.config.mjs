// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://rwhitmire.com',
  base: '/',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  }
});