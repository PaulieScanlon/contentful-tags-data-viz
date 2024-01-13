import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import qwikdev from '@qwikdev/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
  integrations: [tailwind(), qwikdev()],
});
