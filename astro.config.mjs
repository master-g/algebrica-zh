import { defineConfig } from 'astro/config';

export default defineConfig({
  compressHTML: true,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
