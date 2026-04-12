import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import partytown from '@astrojs/partytown';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    imageService: {
      enabled: true
    },
  }),
  site: 'https://www.haderman.dev/',
  integrations: [partytown()],
});
