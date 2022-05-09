import { fileURLToPath, URL } from 'url';

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

export default ({ mode }: { mode: string }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const { VITE_BASE, VITE_PUBLIC_DIR } = process.env;

  // https://vitejs.dev/config/
  return defineConfig({
    base: VITE_BASE,
    build: {
      // See https://github.com/vitejs/vite/issues/7647
      target: 'es2020',
    },
    publicDir: VITE_PUBLIC_DIR,
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import '@/assets/stylesheets/helpers';`,
        },
      },
    },
  });
};
