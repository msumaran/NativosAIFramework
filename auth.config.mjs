import { defineConfig } from 'auth-astro';
import Google from "@auth/core/providers/google"

export default defineConfig({

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