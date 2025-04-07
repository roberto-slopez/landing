import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import tailwindcss from '@tailwindcss/vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
        Components({
            resolvers: [PrimeVueResolver()]
        })
    ],
    // Configuración para GitHub Pages
    base: './',
    build: {
        // Genera un archivo 404.html que es una copia del index.html
        rollupOptions: {
            input: {
                main: './index.html',
            }
        }
    }
})
