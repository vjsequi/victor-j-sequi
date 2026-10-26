import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'http://localhost:4321',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
  redirects: { '/work/saturnpy/': '/work/transportpy/' },
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
