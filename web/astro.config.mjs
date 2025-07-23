// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  server: { host: true },
  vite: {
    envDir: '../',
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['6bb3af06cfe8.ngrok-free.app'],
    },
  },
});
