import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // AÑADE ESTO TEMPORALMENTE
      '@radix-ui/react-slot@1.1.2': '@radix-ui/react-slot',
    },
  },
  build: {
    outDir: 'build',
  },
});