import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
    base: "/kotnikd3.github.io/sandra-postma/",
    plugins: [
        vue(),
        vueDevTools(),
    ],
    resolve: {
            alias: {
                '@': fileURLToPath(new URL('./src', import.meta.url))
            }
    },
    css: {
            preprocessorOptions: {
                scss: {
                    quietDeps: true,
                    api: 'modern-compiler', // or 'modern'
                },
            },
    },
})
