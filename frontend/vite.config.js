import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://AQ.Ab8RN6L2elnvso1WZ9uoqwDUyrrCYXJdWUAqlUaMVCnw3ryClA',
      '/uploads': 'http://AQ.Ab8RN6L2elnvso1WZ9uoqwDUyrrCYXJdWUAqlUaMVCnw3ryClA',

    },
  },
});
