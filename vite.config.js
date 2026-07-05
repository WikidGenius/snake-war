import { defineConfig } from 'vite';

export default defineConfig({
  base: '/snake-war/',
  build: { target: 'es2022', sourcemap: false, chunkSizeWarningLimit: 1600 }
});
