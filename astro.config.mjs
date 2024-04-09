import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import node from '@astrojs/node';
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), auth()],
  adapter: node({
    mode: 'standalone',
  }),
});