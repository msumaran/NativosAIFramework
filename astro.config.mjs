import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import Google from "@auth/core/providers/google"
import node from "@astrojs/node";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), auth()],
  adapter: node({
    mode: "standalone"
  }),
  providers: [
    Google({
      clientId: process.env.FIREBASE_PROJECT_ID,
      clientSecret: process.env.FIREBASE_PRIVATE_KEY,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    })
  ],
});