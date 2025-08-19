import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: true,
      eslint: {
        // Remova a flag --fix daqui
        lintCommand:
          'eslint . --cache --cache-location ./node_modules/.vite/vite-plugin-checker-eslint-cache',
        useFlatConfig: true,
      },
    }),
  ],
});
